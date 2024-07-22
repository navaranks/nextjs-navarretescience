import ClassSchedule from "@/components/class-schedule"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Honors Chemistry Schedule',
  }
const HonorsChemSchedulePage = () => {
    const apiURL = process.env.NEXT_PUBLIC_HONORS_CHEMISTRY_API_URL || "https://script.google.com/macros/s/AKfycbwOIGu3J1f4WUvuurGWcQA57Mi3Tlv2sROBuSz2c-YqojUHoF_lmYepDZ4vQIZ0s-Vk1A/exec";
    

    return(
        <main>
            <ClassSchedule apiURL={apiURL} />
        </main>
    );
}

export default HonorsChemSchedulePage;