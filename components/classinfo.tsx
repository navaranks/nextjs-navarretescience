import {
    Accordion,
    AccordionContent,
    AccordionTrigger,
    AccordionItem,
  } from "@/components/ui/accordion";
  import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Metadata } from "next";
  import Link from "next/link";
  import React from "react";

  interface ClassInfoProps {
    Subject:string;
    Syllabus:string;
    LabSafetyContract:string;
  }
  
  export default function classinfo({Subject,Syllabus,LabSafetyContract}:ClassInfoProps) {
    return (
      <main className="flex flex-col px-4 gap-y-4">
        <Card className="max-w-screen-xl mx-auto">
          <CardHeader>
            <p>
              The purpose of this class is not only to learn about {Subject}, but
              to explore and be able explain the various of ideas that make up {Subject}. We will accomplish this task by using the same
              mathematical techniques and technology used in the industry,
              developing skills necessary for successful data acquisition in a
              laboratory. of this class is to explain and explore the various
              ideas that make up {Subject}. Just like in normal lab, there will be
              a lot of work done collaboratively. Working together is highly
              encouraged, however, cheating/plagiarism will not be tolerated. If
              you received help, give them credit. However, if you are suspected
              or found to be cheating, the cheating policy by the Dean of Students
              will be enforced.
            </p>
          </CardHeader>
        </Card>
        <Card className="max-w-screen-xl mx-auto">
          <CardHeader>
            <p>
              In order to ensure no class time is wasted, make sure to come
              prepared to class every day with all your required materials and
              completed homework ready to turn in. If your homework is not
              finished, is not stapled, and/or does not have your name, it is
              incomplete. Our time together will be used to learn, not looking for
              homework. Below is a list of the required materials needed and
              expectations for this class...
            </p>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row">
            <div className="w-full pb-4 text-center md:pb-0">
              <h1 className="text-2xl font-extrabold ">
                <mark className="bg-primary text-white px-2">Materials</mark>
              </h1>
              <ul className="inline-block text-left list-disc">
                <li>3-Ring Binder</li>
                <li>Pencils/Pens</li>
                <li>Colored Pencils</li>
                <li>Ruler</li>
                <li>Highlighters</li>
                <li>Scientific Calculator</li>
              </ul>
            </div>
            <div className="w-full pt-4 text-center md:pt-0">
              <h1 className="text-2xl font-extrabold ">
                <mark className="bg-primary text-white px-2">Course Policies</mark>
              </h1>
              <ul className="inline-block text-left list-disc">
                <li>Arrive to class on time</li>
                <li>Come to class ready to learn and with an open mind</li>
                <li>Respect the speaker, whether it is myself or a classmate</li>
                <li>Trust yourself to make mistakes</li>
                <li>If things don't make sense, ask or seek help</li>
              </ul>
            </div>
          </CardContent>
          <CardHeader className="py-4">
            <p>
              The schedule is updated every week through the website. There you
              will find the topics as well as the homework we will be completing
              throughout the week and their due dates. Copy them to your planner.
              The excuse of not knowing an assignment was due will not be
              accepted.
            </p>
          </CardHeader>
        </Card>
        <Card className="max-w-screen-xl mx-auto">
          <CardHeader className="py-4">
            <p>
              As mentioned above, you will need a separate binder{" "}
              <strong>ONLY</strong> for this class. You should have dividers with
              the following headings:
            </p>
          </CardHeader>
          <CardContent>
            <ul className="px-4 list-decimal">
              <li>Lecture Outlines</li>
              <li>Handouts</li>
              <li>Homework</li>
              <li>Labs</li>
              <li>Tests</li>
            </ul>
          </CardContent>
          <CardHeader className="py-2">
            <p>
              You should have a separate{" "}
              <mark className="bg-primary text-white px-2">
                "Completed Homework Folder"
              </mark>{" "}
              where you place your assignments ready to be turned in. You may use
              the front pocket of your binder for this, just make sure to label
              the pocket properly.
            </p>
          </CardHeader>
          <CardHeader className="py-2">
            <p>
              The lecture notes for this class are made and distributed by the
              instructor. During class, your task will be to follow along and fill
              out the outline. This way, all your notes are in one place and if
              you’re absent, you know what notes to get.{" "}
              <strong>Guard these with your life.</strong>
            </p>
          </CardHeader>
          <CardContent>
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-2 "
            >
              <AccordionItem
                className="rounded-lg border-primary bg-primary "
                value="item-1"
              >
                <AccordionTrigger className="bg-primary text-white rounded-lg  hover:bg-input hover:no-underline">
                  <span className="flex-1 font-bold text-center">
                    Message for Parents/Guardians
                  </span>
                </AccordionTrigger>
                <AccordionContent className="bg-card border border-primary rounded-b-lg p-4">
                  <p>
                    School today is very different from how it was in the past,
                    allowing for easier communication between teachers, parents
                    and students. Ensuring the success of students is an equal
                    team effort. Therefore it is important that you also keep
                    track of what your child is doing in class to help keep them
                    focused. Some recommendations are:
                  </p>
                  <div className="p-4">
                    <ul className="inline-block space-y-4 text-left list-disc">
                      <li>Follow the website to know what your child is doing. This website was made for parents just as much as it was for students. Have your child help you navigate it</li>
                      <li>Provide a time and space for your student to do work.</li>
                      <li>Please do not wait until the end of the semester to see how your child is doing. Check in with your child at least every two weeks to see how they are doing in the class.</li>
                      <li>You are welcome to contact me by email, phone or office hours. Please allow 24 hours for a response. If you have not heard from me in 24 hours, follow up emails are always appreciated.</li>
                    </ul>
                  </div>
                  <p className="font-bold">
                  The success of your child requires equal team effort.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="rounded-lg border-primary bg-primary "
                value="item-2"
              >
                <AccordionTrigger className="bg-primary text-white rounded-lg hover:bg-input hover:no-underline">
                  <span className="flex-1 font-bold text-center ">
                    Message for Students
                  </span>
                </AccordionTrigger>
                <AccordionContent className="bg-card border border-primary p-4 rounded-b-lg">
                  <p>
                    I do not expect you to fully master material on your first
                    try. We are going to learn together, make mistakes together,
                    and grow together. What I expect from everyone is dedication.
                    Mastery will not happen overnight. It is going to take time.
                    If you need extra help, you can rewatch the lecture videos,
                    create study groups with your peers or attend office hours.
                    Remember that I am here to help you and will do everything
                    that I can to provide plenty of opportunities to check for
                    understanding and correct any misconceptions.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        <Card className="w-full max-w-screen-xl mx-auto ">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-extrabold">
              Frequently Asked Questions
            </CardTitle>
            <CardDescription className="text-primary">
              Really, I get asked this often.
            </CardDescription>
            <CardDescription className="text-gray">
              I get asked these questions a lot, so I made this small section to
              help you out identifying what you need faster.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-2 "
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-bold">
                  Schoology doesnt show a percentage. How do I know what my grade
                  is for the class?
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p>
                    The class follows the mastery grading rubric, meaning you not
                    only need to know the material, but be able to apply it to
                    different situations in order to be successful in the class.
                    For this reason, Schoology does not show a percentage, just
                    the letter grade.
                  </p>
                  <p>
                    Please read the <a href="/images/grades.jpg" className=" text-primary hover:underline hover:decoration-wavy">Mastery Grading Rubric</a> from our syllabus to
                    see how your letter grade is calculated.
                  </p>
                  <p>
                    <strong>Note:</strong>Assignments, such as quizzes/labs/exams,
                    will have more weight and be worth more than one assignment.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-bold">
                  What are my responsibilities as a student?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    You must have your homework ready to be turned in when you
                    arrive to class. Do not think you may spend 15 minutes or even
                    15 seconds looking for where you have put it, finishing one
                    question, stapling pages together or even writing your name on
                    it. Work is due when you arrive in the room. The same concept
                    applies to bringing the materials, calculators and tools that
                    are necessary for you to do your job, the job of being a
                    student. Remember that while you are in my course, my
                    objective is to prepare you for the real world and the
                    consequences you will face will be of the same level as those
                    in the real world. If you come without your tools, you cannot
                    work and hence will not be paid that day. You will not receive
                    credit for the work assigned or collected that day
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-bold">
                  Is cheating allowed?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    Cheating of any type will not be tolerated. If you are caught
                    or suspected of cheating on a homework, lab or test you will
                    be subjected to the schools cheating policy to the fullest
                    extent. The burden of proof does not lie with the instructor
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="font-bold">
                  Are there any extra credit oppurtunites?
                </AccordionTrigger>
                <AccordionContent>
                  <p>
                    There is no extra credit given. It is the student’s
                    responsibility to correct any assignments.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="font-bold">
                  Is there tutoring for this class?
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p>
                    Tutoring is time meant for students to ask questions, aide
                    students, or simply talk to parents and students. I encourage
                    everyone to attend tutoring. Tutoring is available every day
                    before school, on Schoology, and after school on specific
                    days.
                  </p>
                  <p>
                    <strong>Note:</strong>You may need a pass to attend tutoring
                    before school. Let me know before hand so that I can provide
                    one for you.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
        <Card className="w-full max-w-screen-xl mx-auto ">
          <CardHeader>
            <CardTitle className="text-2xl font-extrabold text-center text-primary">
              Useful Handouts
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:mb-0 md:flex-row">
            <Link
              href={Syllabus}
              className="w-full px-5 py-4 transition-colors border border-transparent rounded-lg "
            >
              <img
                src="/images/syllabus.png"
                className="mx-auto w-36"
              />
              <p className="pt-4 font-bold text-center">Syllabus</p>
            </Link>
            <Link
              href={LabSafetyContract}
              className="w-full px-5 py-4 transition-colors border border-transparent rounded-lg "
            >
              <img
                src="/images/safety.png"
                className="mx-auto w-36 "
              />
              <p className="pt-4 font-bold text-center">Lab Safety Contract</p>
            </Link>
          </CardContent>
        </Card>
      </main>
    );
  }
  