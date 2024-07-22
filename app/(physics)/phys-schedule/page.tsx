import ClassSchedule from "@/components/class-schedule";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: 'Honors Chemistry Schedule',
}
const HonorsPhysSchedulePage = () => {
  const apiURL = process.env.NEXT_PUBLIC_HONORS_PHYSICS_API_URL!;
  

  return(
      <main>
          <ClassSchedule apiURL={apiURL} />
      </main>
  );
}
export default HonorsPhysSchedulePage;