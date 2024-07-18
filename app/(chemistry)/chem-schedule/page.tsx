import ClassSchedule from "@/components/class-schedule";
import { Metadata } from "next";
import fs from 'fs';
import path from 'path';

// Function to read the JSON file
const getScheduleData = () => {
  const filePath = path.resolve('public', 'schedule', 'honors-chemistry-schedule.json'); // Adjust path as necessary
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
};

export const metadata: Metadata = {
    title: 'Honors Chemistry Schedule',
};

const HonorsSchedulePage = () => {
    const scheduleData = getScheduleData();

    return (
        <main>
            <ClassSchedule scheduleData={scheduleData} />
        </main>
    );
};

export default HonorsSchedulePage;