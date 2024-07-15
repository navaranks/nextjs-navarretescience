import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

interface PageHeroProps {
  ImageSrcLight: string;
  ImageSrcDark: string;
}

function PageHero({ ImageSrcLight, ImageSrcDark }: PageHeroProps) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <div className="py-2 px-4 bg-background">
      <Card className="w-full max-w-screen-xl mx-auto ">
        <CardContent className="px-4 py-3">
          <div className="h-32 mx-auto relative md:h-40 overflow-hidden rounded-lg">
            <div className="dark:hidden">
              {loading && (
                <Skeleton className="h-full w-full rounded-lg" />
              )}
              <Image
                className="object-cover dark:hidden"
                style={{ display: loading ? 'none' : 'block' }}
                src={ImageSrcLight}
                fill
                alt="Banner Light"
                onLoad={handleImageLoad}
                unoptimized
                loading="eager"
              />
            </div>
            <div className="hidden dark:block">
              {loading && (
                <Skeleton className="h-full w-full rounded-lg" />
              )}
              <Image
                className="object-cover hidden dark:block"
                style={{ display: loading ? 'none' : 'block' }}
                src={ImageSrcDark}
                fill
                alt="Banner Dark"
                onLoad={handleImageLoad}
                unoptimized
                loading="eager"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default PageHero;