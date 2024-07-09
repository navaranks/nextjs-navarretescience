import ChemQuickLinks from "@/components/chemistry/chemquicklinks";
import IntroMessage from "@/components/intromessage";
import { Metadata } from "next";

import React from "react";
export const metadata: Metadata = {
  title: 'Chemistry Home',
}

export default function ChemHome() {
  const IntroImageLight = "/images/cintro.jpg";
  const IntroImageDark = "/images/cintro-dark.png";
  const SchoolYear = "2024-2025";
  const Subject = "Chemistry";
  return (
    <main>
      <IntroMessage
        IntroImageSrcLight={IntroImageLight}
        IntroImageSrcDark={IntroImageDark}
        SchoolYear={SchoolYear}
        Subject={Subject}
      />
      <ChemQuickLinks />
    </main>
  );
}
