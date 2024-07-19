"use client";

import React, { useState, useEffect } from 'react';
import Schedule, { ScheduleData } from './schedule'; // Import Schedule and ScheduleData
import ScheduleCard from './schedule-card';

interface ClassScheduleProps {
  apiURL: string;
}

export default function ClassSchedule({apiURL}: ClassScheduleProps) {
    const [scheduleData, setScheduleData] = useState<ScheduleData[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
       // This will show what URL is received
      if (!apiURL) return;
      fetch(apiURL)
          .then(response => response.json())
          .then(data => {
              setScheduleData(data);
              setIsLoading(false);
          })
          .catch(error => {
              console.error('Error fetching schedule:', error);
              setIsLoading(false);
          });
  }, [apiURL]); // apiURL is a dependency here
  

    return (
        <main className='flex flex-col px-4 gap-y-4'>
            <ScheduleCard />
            <Schedule isLoading={isLoading} scheduleData={scheduleData}/>
        </main>
    );
}