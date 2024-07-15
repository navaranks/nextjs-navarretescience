"use client";

import React, { useState, useEffect } from 'react';
import Schedule, { ScheduleData } from './schedule'; // Import Schedule and ScheduleData
import ScheduleCard from './schedule-card';

interface ClassScheduleProps {
  scheduleData: ScheduleData[]; // Accept scheduleData as a prop
}

export default function ClassSchedule({ scheduleData }: ClassScheduleProps) {
    const [data, setData] = useState<ScheduleData[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setData(scheduleData);
        setIsLoading(false);
    }, [scheduleData]); // Dependency on scheduleData

    return (
        <main className='flex flex-col px-4 gap-y-2'>
            <ScheduleCard />
            <Schedule isLoading={isLoading} scheduleData={data}/>
        </main>
    );
}
