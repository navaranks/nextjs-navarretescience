import ClassSchedule from "@/components/class-schedule"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Regular Chemistry Schedule',
  }
const RegularChemSchedulePage = () => {
    const apiURL = process.env.NEXT_PUBLIC_REGULAR_CHEMISTRY_API_URL!;
    

    return(
        <main>
            <ClassSchedule apiURL={apiURL} />
        </main>
    );
}

export default RegularChemSchedulePage;