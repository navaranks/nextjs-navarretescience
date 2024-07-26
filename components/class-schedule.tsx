"use client";

import useSWR from 'swr';
import Schedule, { ScheduleData } from './schedule'; // Import Schedule and ScheduleData
import ScheduleCard from './schedule-card';

interface ClassScheduleProps {
  apiURL: string;
  prefetchedData: ScheduleData[];
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ClassSchedule({ apiURL, prefetchedData }: ClassScheduleProps) {
  const { data, error } = useSWR<ScheduleData[]>(apiURL, fetcher);

  const scheduleData = data || prefetchedData;

  return (
    <main className='flex flex-col px-4 gap-y-4'>
      <ScheduleCard />
      <Schedule isLoading={!data && !error} scheduleData={scheduleData} />
    </main>
  );
}
