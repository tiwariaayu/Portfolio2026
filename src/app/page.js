import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-background selection:bg-accent/30 selection:text-accent-foreground">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl w-full space-y-12 animate-fade-in">
        <header className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/50">
            Ayu's Portfolio 2026
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl">
            Crafting high-performance digital experiences with Next.js and modern web technologies.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass p-8 rounded-2xl space-y-4 hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-semibold">Next.js 15</h2>
            <p className="text-foreground/60 line-clamp-2">
              Leveraging the latest features of the App Router and Turbopack for lightning-fast delivery.
            </p>
          </div>
          <div className="glass p-8 rounded-2xl space-y-4 hover:scale-[1.02] transition-transform duration-300">
            <h2 className="text-2xl font-semibold">Premium Design</h2>
            <p className="text-foreground/60 line-clamp-2">
              Combining glassmorphism with high-contrast typography for a truly modern aesthetic.
            </p>
          </div>
        </section>

        <footer className="flex gap-4 pt-8">
          <button className="px-8 py-3 bg-accent text-accent-foreground rounded-full font-medium hover:bg-accent/90 transition-colors shadow-lg shadow-accent/25">
            Get Started
          </button>
          <button className="px-8 py-3 glass rounded-full font-medium hover:bg-white/5 transition-colors">
            Learn More
          </button>
        </footer>
      </div>
    </main>
  );
}
