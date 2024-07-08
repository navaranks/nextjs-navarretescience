
import { Card, CardContent, CardFooter } from "./ui/card";

interface PolaroidProps {
  PolaroidImage: string;
  Caption: string;
  
}


export default function PolaroidVideo({
  PolaroidImage,
  Caption,
}: PolaroidProps) {


  return (
    <Card className="max-w-md md:max-w-sm w-full shadow-lg m-auto bg-muted">
      <CardContent className="p-4 ">
        <div className={`relative w-full overflow-hidden rounded-lg`}>
          <video src={PolaroidImage} autoPlay muted loop   />
        </div>
      </CardContent>
      <CardFooter className="block text-center text-pretty">
        {Caption}
      </CardFooter>
    </Card>
  );
}
