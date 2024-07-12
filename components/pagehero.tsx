import React from "react";
import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";

interface PageHeroProps {
  ImageSrc: string;
}

function PageHero({ ImageSrc }: PageHeroProps) {
  return (
    <div className="pb-2 md:pt-20 pt-14 px-4 bg-background">
      <Card className="max-w-screen-xl mx-auto mt-2">
        <CardContent className="px-4 py-3">
          <div className="h-32 mx-auto relative md:h-40 overflow-hidden">
            <Image
            className="object-cover"
              src={ImageSrc}
              fill                       
              alt="banner"
              unoptimized
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PageHero;
