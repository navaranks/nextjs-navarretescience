import React from 'react';
import Schedule, { ScheduleData } from './schedule'; // Import Schedule and ScheduleData
import ScheduleCard from './schedule-card';

interface ClassScheduleProps {
  apiURL: string;
}

async function fetchScheduleData(apiURL: string): Promise<ScheduleData[] | null> {
  try {
    const response = await fetch(apiURL,
        {
            next: {
                revalidate: 5, // Automatically revalidate the data after 5 seconds
            },
        }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch schedule data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching schedule:', error);
    return null;
  }
}

export default async function ClassSchedule({ apiURL }: ClassScheduleProps) {
  if (!apiURL) {
    return (
      <main className='flex flex-col px-4 gap-y-4'>
        <p>API URL is missing</p>
      </main>
    );
  }

  const scheduleData = await fetchScheduleData(apiURL);

  return (
    <main className='flex flex-col px-4 gap-y-4'>
      <ScheduleCard />
      <Schedule isLoading={!scheduleData} scheduleData={scheduleData} />
    </main>
  );
}
