import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import ScheduleTabs from './schedule-tabs'

export interface ScheduleDay {
  Weekday: string;
  Date: string;
  'Class Topic': string;
  Homework: string;
}

interface ScheduleProps {
  scheduleData: ScheduleData[] | null;
  isLoading: boolean;
}
export interface ScheduleData {
  season: string;
  tableid: number;
  week: string;
  days: ScheduleDay[];
}

function Schedule({ isLoading,scheduleData }: ScheduleProps) {
  return (
    <Card className="max-w-screen-xl w-full mx-auto">
        <CardContent className='p-4'>
            <ScheduleTabs isLoading={isLoading} scheduleData={scheduleData} />
        </CardContent>
    </Card>
  )
}

export default Schedule
