import ClassSchedule from "@/components/class-schedule"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Regular Chemistry Schedule',
  }
const RegularChemSchedulePage = () => {
    const apiURL = "https://script.google.com/macros/s/AKfycbx2__UXdbGW95fejsfshw9BIJQL0uJ_rv7Tvmwc4u4B9Km0ZytwsXBn06CKCXxaZ37vKA/exec";
    

    return(
        <main>
            <ClassSchedule apiURL={apiURL} />
        </main>
    );
}

export default RegularChemSchedulePage;