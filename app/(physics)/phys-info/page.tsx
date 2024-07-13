import ClassInfo from "@/components/classinfo";
import { Metadata } from "next";

const Subject = "Physics";
const Syllabus = "/physics/Syllabus/Honors_Physics_Syllabus_2024_2025.pdf";
const LabSafetyContract = "/physics/Syllabus/Lab_Safety_Contract.pdf";

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