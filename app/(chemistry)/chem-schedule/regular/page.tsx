import ClassSchedule from "@/components/class-schedule";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Regular Chemistry Schedule",
};
const RegularChemSchedulePage = async () => {
  const apiURL = process.env.NEXT_PUBLIC_REGULAR_CHEM_API_URL!;
  const res = await fetch(apiURL);
  const prefetchedData = await res.json();

  return (
    <main>
      <ClassSchedule apiURL={apiURL} prefetchedData={prefetchedData} />
    </main>
  );
};

export default RegularChemSchedulePage;
