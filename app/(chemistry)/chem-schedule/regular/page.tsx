import ClassSchedule from "@/components/class-schedule"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Regular Chemistry Schedule',
  }
const RegularSchedulePage = () => {
    const apiURL = process.env.NEXT_PUBLIC_REGULAR_CHEM_API_URL as string;
    

    return(
        <main>
            <ClassSchedule apiURL={apiURL} />
        </main>
    );
}

export default RegularSchedulePage;