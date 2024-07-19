import ClassSchedule from "@/components/class-schedule";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: 'Honors Chemistry Schedule',
}
const HonorsPhysSchedulePage = () => {
  const apiURL = 'https://script.google.com/macros/s/AKfycbz7nfc5IGy81-mFpgHS2mnJcysrjylojSu_N53CCYD4hHHsaMaUWw_Imz5RL3PHEXL4/exec';
  

  return(
      <main>
          <ClassSchedule apiURL={apiURL} />
      </main>
  );
}
export default HonorsPhysSchedulePage;