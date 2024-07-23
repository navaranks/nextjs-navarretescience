import React from "react";
import Polaroid from "@/components/polaroid";
import PolaroidVideo from "@/components/polaroid-video";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AboutQuickLinks from "@/components/about/aboutquicklinks";
import { Metadata } from "next";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const metadata: Metadata = {
  title: 'About Mr.Navarrete',
}

const Image1 = "/images/aboutme1.webp";
const Image2 = "/images/aboutme2.webp";
const Image3 = "/images/pc";

function page() {
  return (
    <main className="flex flex-col  gap-y-2">
      <div className=" px-4 bg-background">
        <Card className="max-w-screen-xl mx-auto">
          <CardContent className="px-4 py-3 flex flex-col md:flex-row gap-2">
            <Polaroid
              PolaroidImage={Image1}
              Caption="Mr. Navarrete presenting his research at CSUDH Research Day"
            />
            <div className="w-full md:w-1/2 px-4 py-3 m-auto">
              <p className=" text-base text-balance">
                Hello! My name is Christopher Navarrete{" "}
                <span className="text-primary">(Nah-bah-rreh-teh)</span> and I
                am the Honors Chemistry and Honors Physics teacher at Francisco
                Bravo Medical Magnet High School. I am a 1st generation
                Mexican-American teacher who grew up in Bell,CA. I graduated
                from Bell High School and obtained my Bachelors of Science in
                Chemistry/Biochemistry from the University of California, San
                Diego as I was interested in learning how medicine affects the
                body. However, during my time at UCSD, I saw how my lack of
                science experiences meant I had to spend more time "relearning"
                than working in a lab. From there, I decided to not work in a
                lab and instead purse a Masters of Education in Curriculum and
                Instruction from California State University, Dominguez Hills.
                At the same time, I was also part of a research team responsible
                for the DNA extraction, genetic sequencing, and mapping the
                population of the pale evening primrose, Oenothera pallida. I am
                excited to be a part of the Bravo Science team and equally as
                excited to show students about the world of science.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className=" px-4 bg-background">
        <Card className="max-w-screen-xl mx-auto">
          <CardContent className="px-4 py-3 flex flex-col md:flex-row-reverse gap-2">
            <Polaroid
              PolaroidImage={Image2}
              Caption="Mr. Navarrete with The U Science Team"
              variant="landscape"
            />
            <div className="w-full md:w-1/2 px-4 py-3 m-auto gap-y-4">
              <p className=" text-base text-balance">
                Before coming to Bravo, I was fortunate enough to be part of the
                science program at University Pathways Public Service Academy,
                or "The U", in Watts, CA. There I led both the Chemistry and
                Honors Chemistry classes, as well as helped out in other
                programs. My goal was to connect Chemistry to their community
                and ultimately show my students that Chemistry does not only
                happen in a lab, but happens around them. By connecting the
                science to their community, students were able to develop the
                critical thinking and problem solving skills needed to be
                successful not only in my classroom, but also once they were out
                in the real world.
                <br />
                <br />
                Before "The U", I was a part of the science team at Stephen
                White Middle School. There, the big focus was connecting the
                science to other courses, such as Math and English, to show
                students how the skills they develop in each class work together
                to help students develop academically
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className=" px-4 bg-background">
        <Card className="max-w-screen-xl mx-auto">
          <CardContent className="px-4 py-3 flex flex-col md:flex-row gap-2">
            <PolaroidVideo PolaroidImage={Image3} Caption="Guess the specs?" />
            <div className="w-full md:w-1/2 px-4 py-3 m-auto gap-y-4">
              <p className=" text-base text-pretty">
                A few things about me:
                <br />
                <ul className="list-disc px-4 py-2 text-pretty ">
                  <li className="py-2">
                    Love to skate. I have two main decks, a retro "Powell
                    Peralta" and an "Alien Workshop". While tricks are not my
                    thing, each board was built to go down hills as smooth and
                    fast as possible
                  </li>
                  <li className="py-2">
                    Tinker with technology a lot. I like learning how things
                    work and being able to fix things on my own. I recently
                    built my own PC, modified my old iPod and fixed my own
                    switch.
                  </li>
                  <li className="py-2">
                    Am a cuber. I started with a 3x3, but slowly added a 2x2,
                    4x4, and 5x5. While they are all fun to solve, my favorite
                    is the 5x5.
                  </li>
                  <li className="py-2">
                    Play a lot of video games. Most of the time, I am either
                    playing Melee or Smash Ultimate with my friends.
                  </li>
                  <li className="py-2">
                    Do a lot of graphic and video design. The programs I tend to
                    use the most are Photoshop, After Effects and Blender. I
                    just enjoy being able to imagine something in my head and
                    then be able to visually see it on my computer screen.
                  </li>
                  <li className="py-2">
                    Love music, and everything attached to it. I love learning
                    about the history of how specific genres came into existence
                    as well as trying to produce music. While I am not a
                    professional in music production, I know how to get around
                    Ableton. While I listen to a lot of different genres, Disco,
                    House and Hip-Hop is what I listen to the most.
                  </li>
                  <li className="py-2">
                    While I don't watch a lot of Netflix, I spend a lot of time
                    on YouTube, Twitch and TikTok.
                  </li>
                  
                </ul>
                There is a lot more, but that will be saved for school
                    year...
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className=" px-4 bg-background">
        <Card className="max-w-screen-xl mx-auto">
          <CardTitle className="text-xl font-extrabold text-center text-primary p-4 text-balance">
            Education is my main goal, and I want to be able to connect the
            material we are learning in the classroom to various experiences and
            interests in each student's lives. If you want to know more about
            me, or how your student is doing, do not hesitate to reach out to me
            either in person or using the links below
          </CardTitle>
        </Card>
      </div>
      <AboutQuickLinks />
    </main>
  );
}

export default page;
