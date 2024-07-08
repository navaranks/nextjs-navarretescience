import ChemQuickLinks from "@/components/chemistry/chemquicklinks";
import IntroMessage from "@/components/intromessage";
import { Metadata } from "next";

import React from "react";
export const metadata: Metadata = {
  title: 'Chemistry Home',
}

export default function ChemHome() {
  const IntroImage = "/images/cintro.jpg";
  const SchoolYear = "2024-2025";
  const Subject = "Chemistry";
  return (
    <main>
      <IntroMessage
        IntroImageSrc={IntroImage}
        SchoolYear={SchoolYear}
        Subject={Subject}
      />
      <ChemQuickLinks />
    </main>
  );
}
