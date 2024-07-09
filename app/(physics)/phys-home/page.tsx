
import IntroMessage from "@/components/intromessage";
import PhysQuickLinks from "@/components/physics/physicsquicklinks";
import { Metadata } from "next";

import React from "react";
export const metadata: Metadata = {
  title: 'Physics Home',
}

export default function PhysHome() {
  const IntroImageLight = "/images/pintro.png";
  const IntroImageDark = "/images/pintro-dark.png";
  const SchoolYear = "2024-2025";
  const Subject = "Physics";
  return (
    <main>
      <IntroMessage
        IntroImageSrcLight={IntroImageLight}
        IntroImageSrcDark={IntroImageDark}
        SchoolYear={SchoolYear}
        Subject={Subject}
      />
      <PhysQuickLinks />
    </main>
  );
}
