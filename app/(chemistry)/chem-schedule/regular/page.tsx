import ClassSchedule from "@/components/class-schedule"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Regular Chemistry Schedule',
  }
const RegularChemSchedulePage = () => {
    const apiURL = process.env.NEXT_PUBLIC_REGULAR_CHEMISTRY_API_URL || "https://script.google.com/macros/s/AKfycbwIhztXM518MhKrdP3zsqNhGH0W7M0LAVgzKjc-ETLYagK5thTAKGR0UMSIiX0X7z-8Dw/exec";
    

    return(
        <main>
            <ClassSchedule apiURL={apiURL} />
        </main>
    );
}

export default RegularChemSchedulePage;