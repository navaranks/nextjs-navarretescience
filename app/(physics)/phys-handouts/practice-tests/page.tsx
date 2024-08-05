import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import PhysPracticeTestData from '@/public/physics/Practice_Tests/Phys_Practice_Tests.json';

import { Metadata } from 'next';

import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Physics Practice Tests',
};

const PhysPracticeTests = () => {
  return (
    <main className="flex flex-col px-4 gap-y-2">
      <Card className="max-w-screen-xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-extrabold text-center text-primary">Practice Tests</CardTitle>
          <CardDescription>
            The practice tests are designed for you to find out if you have mastered the material in a chapter the day before the test is given. Instructors will not answer any questions about practice tests until the day of the actual test. That day an answer key will be posted and tutors will be available. It makes no sense for the teacher to show you how to do the test since they are not the ones taking the tests. They are designed for you to do on your own!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden md:table-cell text-right font-extrabold text-2xl text-primary py-2">Unit</TableHead>
                <TableHead className="hidden md:table-cell text-left font-extrabold text-2xl text-primary py-2">Subject</TableHead>
                <TableHead className="hidden md:table-cell text-center font-extrabold text-2xl text-primary py-2">PDF</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {PhysPracticeTestData.map(({ id, title, subtitle, handouts }) => (
                <TableRow key={id} className="odd:bg-secondary/50">
                  <TableCell className="text-center text-lg font-semibold md:text-right hidden md:table-cell">{title}</TableCell>
                  <TableCell className="text-center text-lg font-semibold md:text-left hidden md:table-cell">{subtitle}</TableCell>
                  <TableCell className="text-center text-lg font-semibold md:text-left block md:hidden">{title} : {subtitle}</TableCell>
                  <TableCell className="text-center text-lg font-semibold md:text-center block md:table-cell">
                    {handouts.map((handout, index) => (
                      <React.Fragment key={index}>
                        {handout.url ? (
                          <Link href={handout.url} legacyBehavior>
                            <a className="text-primary hover:underline hover:decoration-wavy">{handout.title}</a>
                          </Link>
                        ) : (
                          <span className="text-muted-foreground">{handout.title}</span>
                        )}
                        {index < handouts.length - 1 && ' / '}
                      </React.Fragment>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
};

export default PhysPracticeTests;
