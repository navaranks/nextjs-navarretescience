import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";

interface PolaroidProps {
  PolaroidImage: string;
  Caption: string;
  variant?: "default" | "square" | "portrait" | "landscape";
}

const variantStyles = {
  default: "pb-[80%]",
  square: "pb-[100%]",
  portrait: "pb-[150%]",
  landscape: "pb-[60%]",
};

export default function Polaroid({
  PolaroidImage,
  Caption,
  variant = "default",
}: PolaroidProps) {
  const variantClass = variantStyles[variant];

  return (
    <Card className="max-w-md md:max-w-sm w-full shadow-lg m-auto bg-muted">
      <CardContent className="p-4 ">
        <div className={`relative w-full ${variantClass} overflow-hidden rounded-lg`}>
          <Image
            src={PolaroidImage}
            alt={Caption}
            fill
            style={{'objectFit': 'cover'}}
            className="rounded-lg"
            
          />
        </div>
      </CardContent>
      <CardFooter className="block text-center text-pretty">
        {Caption}
      </CardFooter>
    </Card>
  );
}
