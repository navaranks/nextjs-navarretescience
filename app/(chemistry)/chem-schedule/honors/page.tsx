import ClassSchedule from "@/components/class-schedule"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Honors Chemistry Schedule',
  }
const HonorsSchedulePage = () => {
    const apiURL = process.env.NEXT_PUBLIC_HONORS_CHEM_API_URL as string;
    

    return(
        <main>
            <ClassSchedule apiURL={apiURL} />
        </main>
    );
}

export default HonorsSchedulePage;