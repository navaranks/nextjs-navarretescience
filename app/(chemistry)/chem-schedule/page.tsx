import ClassSchedule from "@/components/class-schedule"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Chemistry Schedule',
  }
const SchedulePage = () => {
    const apiURL = process.env.CHEM_API_URL as string;
    

    return(
        <main>
            <ClassSchedule apiURL={apiURL} />
        </main>
    );
}

export default SchedulePage;