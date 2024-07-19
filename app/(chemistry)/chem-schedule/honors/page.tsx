import ClassSchedule from "@/components/class-schedule"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Honors Chemistry Schedule',
  }
const HonorsChemSchedulePage = () => {
    const apiURL = "https://script.google.com/macros/s/AKfycbxb0Kd3Lv15BBKb33s7YUSEyBkGTcB-sl11MuE0xGz_xBn8J7mMvPlKXrCKzW9yXdKEkQ/exec";
    

    return(
        <main>
            <ClassSchedule apiURL={apiURL} />
        </main>
    );
}

export default HonorsChemSchedulePage;