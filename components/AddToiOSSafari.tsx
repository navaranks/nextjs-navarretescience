import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./ui/sheet";
import Image from "next/image";
import { Button } from "./ui/button";

interface Props {
  closePrompt: () => void;
  doNotShowAgain: () => void;
}

export default function AddToiOSSafari(props: Props) {
  const { closePrompt, doNotShowAgain } = props;
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Automatically open the sheet when the component mounts
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    closePrompt();
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent side="bottom" className="w-[90%] mx-auto max-w-lg rounded-lg mb-4">
        <Image
          src="/icon-512x512.png"
          alt="Add to Home Screen"
          width={90}
          height={90}
          className="mx-auto"
        />
        <SheetHeader>
          <SheetTitle className="text-pretty mx-auto md:text-center">Add Navarrete Science to your Home Screen</SheetTitle>
          <SheetDescription className="text-pretty md:text-center">
            Install Navarrete Science, and access it like a regular app. Open your Safari menu and tap "Add to Home Screen".
          </SheetDescription>
        </SheetHeader>
        <div className="flex justify-center pt-2">
          <Button variant="outline" onClick={doNotShowAgain}>
            Maybe Later
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
