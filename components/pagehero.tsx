import React from "react";
import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";

interface PageHeroProps {
  ImageSrcLight: string;
  ImageSrcDark: string;
}

function PageHero({ ImageSrcLight, ImageSrcDark }: PageHeroProps) {
  return (
    <div className="py-2 px-4 bg-background">
      <Card className="w-full max-w-screen-xl mx-auto ">
        <CardContent className="px-4 py-3">
          <div className="h-32 mx-auto relative md:h-40 overflow-hidden rounded-lg">
            <Image
            className="object-cover dark:hidden"
              src={ImageSrcLight}
              fill                       
              alt="Banner Light"
              unoptimized
            />
            <Image
            className="object-cover hidden dark:block"
              src={ImageSrcDark}
              fill                       
              alt="Banner Dark"
              unoptimized
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PageHero;
