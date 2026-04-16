import { NextResponse } from 'next/server';

export async function GET() {
  const username = 'tiwariaayu';
  const token = process.env.GITHUB_TOKEN;

  try {
    // Search for public Pull Requests authored by the user in other repositories
    // We filter out their own repositories to highlight external contributions
    const query = `author:${username} type:pr is:public -user:${username}`;
    const url = `https://api.github.com/search/issues?q=${encodeURIComponent(query)}&sort=created&order=desc&per_page=10`;

    const response = await fetch(url, {
      headers: {
        ...(token && { Authorization: `token ${token}` }),
        Accept: 'application/vnd.github+json',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const data = await response.json();

    const contributions = data.items.map((item) => {
      // Extract repo name from repository_url
      // Example: https://api.github.com/repos/remotion-dev/remotion
      const repoUrlParts = item.repository_url.split('/');
      const repoName = repoUrlParts[repoUrlParts.length - 1];
      const ownerName = repoUrlParts[repoUrlParts.length - 2];

      return {
        id: item.id,
        year: new Date(item.created_at).getFullYear(),
        repo: repoName,
        org: ownerName,
        title: item.title,
        status: item.pull_request?.merged_at ? 'Merged' : (item.state === 'open' ? 'Open' : 'Closed'),
        link: item.html_url,
        logo: `https://github.com/${ownerName}.png`, // Repo owner's avatar
        points: [
          // We can't easily get bullet points, so we use a fallback or an excerpt
          item.body ? item.body.substring(0, 100).split('\n')[0] + '...' : 'Contribution to ' + repoName
        ]
      };
    });

    return NextResponse.json(contributions);
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return NextResponse.json({ error: 'Failed to fetch contributions' }, { status: 500 });
  }
}
