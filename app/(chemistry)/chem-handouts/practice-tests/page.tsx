import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import HonorsPracticeTestData from '@/public/chemistry/Practice_Tests/Honors_Chem_Practice_Tests.json';
import RegularPracticeTestData from '@/public/chemistry/Practice_Tests/Regular_Chem_Practice_Tests.json';
import { Metadata } from 'next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Chemistry Practice Tests',
}

const ChemPracticeTests = () => {
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
          <Tabs defaultValue="honors">
            <TabsList className="w-full grid grid-cols-2 mx-auto h-auto">
              <TabsTrigger value="honors" className="w-full text-pretty text-xl data-[state=active]:bg-primary data-[state=active]:text-white">Honors Chemistry</TabsTrigger>
              <TabsTrigger value="regular" className="w-full text-pretty text-xl data-[state=active]:bg-primary data-[state=active]:text-white">Regular Chemistry</TabsTrigger>
            </TabsList>
            <TabsContent value="honors">
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='hidden md:table-cell text-right font-extrabold text-2xl text-primary vertical-middle py-2'>Unit</TableHead>
                      <TableHead className='hidden md:table-cell text-left font-extrabold text-2xl text-primary vertical-middle py-2'>Subject</TableHead>
                      <TableHead className='hidden md:table-cell text-center font-extrabold text-2xl text-primary vertical-middle py-2'>PDF</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {HonorsPracticeTestData.map(unit => (
                      <TableRow key={unit.id} className='odd:bg-secondary/50'>
                        <TableCell className="text-center md:text-right block md:table-cell">{unit.title}</TableCell>
                        <TableCell className="text-center md:text-left block md:table-cell">{unit.subtitle}</TableCell>
                        <TableCell className="text-center md:text-center block md:table-cell">
                          <Link href={unit.handouts[0].url} legacyBehavior>
                            <a className="text-primary hover:underline hover:decoration-wavy">{unit.handouts[0].title}</a>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>
            <TabsContent value="regular">
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className='hidden md:table-cell text-right font-extrabold text-2xl text-primary vertical-middle py-2'>Unit</TableHead>
                      <TableHead className='hidden md:table-cell text-left font-extrabold text-2xl text-primary vertical-middle py-2'>Subject</TableHead>
                      <TableHead className='hidden md:table-cell text-center font-extrabold text-2xl text-primary vertical-middle py-2'>PDF</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {RegularPracticeTestData.map(unit => (
                      <TableRow key={unit.id} className='odd:bg-secondary/50'>
                        <TableCell className="text-center md:text-right block md:table-cell">{unit.title}</TableCell>
                        <TableCell className="text-center md:text-left block md:table-cell">{unit.subtitle}</TableCell>
                        <TableCell className="text-center md:text-center block md:table-cell">
                          <Link href={unit.handouts[0].url} legacyBehavior>
                            <a className="text-primary hover:underline hover:decoration-wavy">{unit.handouts[0].title}</a>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </main>
  );
};

export default ChemPracticeTests;
