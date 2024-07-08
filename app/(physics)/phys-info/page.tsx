import ClassInfo from "@/components/classinfo";
import { Metadata } from "next";

const Subject = "Physics";
const Syllabus = "/chemistry/Syllabus/Honors_Chemistry_Syllabus_2023_2024.pdf";
const LabSafetyContract = "/chemistry/Syllabus/Lab_Safety_Contract.pdf";

export const metadata: Metadata = {
    title: 'Physics Info',
  }

export default function ChemInfo() {
  return (
    <main>
        <ClassInfo
      Subject={Subject}
      Syllabus={Syllabus}
      LabSafetyContract={LabSafetyContract}
    />
    </main>
  );
}