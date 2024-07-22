import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import ScheduleTable from "./schedule-table";
import { ScheduleData } from "./schedule";

interface ScheduleAccordionProps {
  schedule: ScheduleData;
  isLast: boolean;
  
  
}

const ScheduleAccordion: React.FC<ScheduleAccordionProps> = ({ schedule, isLast }) => {
  
  return (
    <Accordion type="single" collapsible defaultValue={isLast ? `item-${schedule.tableid}` : undefined}  className={`w-full space-y-2 bg-card flex-col ${schedule.displayWeek === 'yes' ? '' : 'hidden'}`}>
      <AccordionItem className="rounded-lg border-primary bg-primary " value={`item-${schedule.tableid}`}>
        <AccordionTrigger className="bg-primary text-white rounded-lg  hover:bg-input px-4">
          <span className="flex-1 font-bold text-center">Week {schedule.tableid}: {schedule.week}</span>
        </AccordionTrigger>
        <AccordionContent className="bg-card border pb-0 border-primary rounded-b-lg ">
          
            <ScheduleTable days={schedule.days} />
          
          
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ScheduleAccordion;
