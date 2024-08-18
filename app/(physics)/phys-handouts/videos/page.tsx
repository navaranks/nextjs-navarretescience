import React from 'react';
import HandoutTabs from '@/components/handout-tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import UnitTable from '@/components/handouts-table';
import videosData from '@/public/physics/PhysVideoList.json';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Physics Videos',
}
const PhysicsVideos = () => {
  const tabsData = (videosData as any[]).map(unit => ({
    id: unit.id,
    title: unit.title,
    subtitle: unit.subtitle,
    disabled: unit.disabled,
    content: <UnitTable key={unit.id} unitTitle={unit.title} unitSubtitle={unit.subtitle} handouts={unit.handouts} />
  }));

  const borderColor = 'border-primary';

  return (
    <main className="flex flex-col px-4 gap-y-2">
      <Card className="max-w-screen-xl w-full mx-auto">
         <CardHeader className="text-center text-2xl py-2 px-4 font-extrabold">
           Class Videos
         </CardHeader>
         <CardDescription className="text-center pb-2">
           Here is a list of videos that may be useful throughout the year!
         </CardDescription>
       </Card>
      <Card className="max-w-screen-xl w-full mx-auto">
        <CardContent className='p-4'>
          <HandoutTabs tabsData={tabsData} borderColor={borderColor} />
        </CardContent>
      </Card>
    </main>
  );
};

export default PhysicsVideos;


