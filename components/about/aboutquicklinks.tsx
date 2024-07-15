import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneRotary,
  faSchool,
} from "@fortawesome/pro-solid-svg-icons";
import { faGoogleDrive, faYoutube } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import React from "react";

function AboutQuickLinks() {
  return (
    <div className=" px-4 space-y-4">
      <Card className="max-w-screen-xl w-full mx-auto">
        <CardTitle className="text-2xl font-extrabold text-center text-primary pt-2">
          Quick Links
        </CardTitle>
        <CardDescription className="text-center py-2">
          Here are some links that may be useful throughout the year!
        </CardDescription>
        <CardContent>
          <div className="flex justify-center">
            <Button
              asChild
              variant="outline"
              className="border-none bg-[#3b5998] hover:bg-[#3b5998]/80 h-10 w-10 rounded-md"
            >
              <Link href={"mailto:c.navarrete@lausd.net"} className="mr-2 ">
                <FontAwesomeIcon icon={faEnvelope} size="xl" color="white" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-none bg-[#DA4453] hover:bg-[#DA4453]/80 h-10 w-10 rounded-md"
            >
              <Link
                href={"https://www.youtube.com/michaelmorganchem"}
                className="mr-2 "
              >
                <FontAwesomeIcon icon={faYoutube} size="xl" color="white" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-none bg-[#F6BB42] hover:bg-[#F6BB42]/80 h-10 w-10 rounded-md"
            >
              <Link
                href={"/phys-videos"}
                className="mr-2 "
              >
                <FontAwesomeIcon icon={faGoogleDrive} size="xl" color="white"/>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-none bg-[#27ae60] hover:bg-[#27ae60]/80 h-10 w-10 rounded-md"
            >
              <Link href={"tel:+13232274400"} className="mr-2 ">
                <FontAwesomeIcon icon={faPhoneRotary} size="xl" color="white" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-none bg-[#656D78] hover:bg-[#656D78]/80 h-10 w-10 rounded-md"
            >
              <Link href={"https://www.lms.lausd.net/"} className="mr-2 ">
                <FontAwesomeIcon icon={faSchool} size="xl" color="white" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AboutQuickLinks;
