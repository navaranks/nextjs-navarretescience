import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card'

function ScheduleCard() {
  return (
    <Card className="max-w-screen-xl w-full mx-auto">
        <CardHeader>
          <CardTitle className='text-xl font-extrabold text-center'>Course Outline</CardTitle>
          <CardDescription>The purpose of this class is to examine the concepts and ideas of chemistry. It requires the use of many mathematical techniques and applications of technology as they relate to laboratory skills and data acquisition. Many current research areas will be emphasized to provide a background necessary for student research. The major difference between this class and the regular chemistry course is the level of research that is expected of students and the mathematical detail that is used in the course.</CardDescription>
          <CardTitle className='text-xl font-extrabold text-center pt-4'>Below is the schedule we fill follow for the course</CardTitle>
          <CardDescription><strong>Note:</strong>{" "}This schedule is not set in stone. Stuff happens and some things may change, be we will do our best to stick to this schedule</CardDescription>
        </CardHeader>
      </Card>
  )
}

export default ScheduleCard