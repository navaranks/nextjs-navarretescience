import ClassSchedule from "@/components/class-schedule"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Physics Schedule',
  }
const SchedulePage = () => {
    const apiURL = process.env.PHYS_API_URL as string;

    return(
        <main>
            <ClassSchedule apiURL={apiURL} />
        </main>
    );
}

export default SchedulePage;