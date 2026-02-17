'use client';

import AppLayout from "@/components/layout/AppLayout";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

// Feature Components
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import OpenSource from "@/components/OpenSource";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";

const SectionSpacer = ({ label }) => (
  <SectionDivider label={label} className="mt-1.5" />
);

export default function Home() {
  return (
    <AppLayout>
      <Hero />

      <SectionSpacer label="PRT_AUTO_XP" />
      <Experience />

      <SectionSpacer label="SYS_STK_V2" />
      <Skills />

      <SectionSpacer label="OS_CNTR_BT" />
      <OpenSource />

      <SectionSpacer label="ARC_WKS_FTR" />
      <Projects />

      <SectionDivider label="ACH_LGC_V1" />
      <Achievements />

      <div className="h-10 w-full" aria-hidden="true" />
      <Footer />
    </AppLayout>
  );
}
