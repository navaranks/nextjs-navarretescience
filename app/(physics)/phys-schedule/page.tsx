import ClassSchedule from "@/components/class-schedule";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Honors Physics Schedule",
};
const HonorsPhysSchedulePage = async () => {
  const apiURL = process.env.NEXT_PUBLIC_HONORS_PHYSICS_API_URL!;
  const res = await fetch(apiURL);
  const prefetchedData = await res.json();

  return (
    <main>
      <ClassSchedule apiURL={apiURL} prefetchedData={prefetchedData} />
    </main>
  );
};
export default HonorsPhysSchedulePage;
