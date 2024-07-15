"use client";
import React, { useEffect, useRef } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { ScheduleDay } from "./schedule"; // Adjust the import path as needed
import DOMPurify from "dompurify";

interface SafeHtmlProps {
  html: string;
  
}

const SafeHtml: React.FC<SafeHtmlProps> = ({ html }) => {
  const sanitizedHtml = DOMPurify.sanitize(html);
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (spanRef.current) {
      const anchors = spanRef.current.querySelectorAll("a");
      anchors.forEach((anchor: HTMLAnchorElement) => {
        anchor.classList.add("text-primary", "hover:underline", "hover:decoration-wavy");
      });
    }
  }, []);

  return (
    <span ref={spanRef} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
  );
};

interface ScheduleTableProps {
  days: ScheduleDay[];
}

const ScheduleTable: React.FC<ScheduleTableProps> = ({ days }) => {
  if (!days || days.length === 0) {
    return <div>No schedule data available.</div>;
  }

  return (
    <Table>
      <TableHeader>
        <TableRow className="border-none md:border-b">
          <TableHead className="hidden md:table-cell bg-neutral-950 text-white text-center">
            Weekday
          </TableHead>
          <TableHead className="hidden md:table-cell bg-neutral-950 text-white text-center">
            Date
          </TableHead>
          <TableHead className="hidden md:table-cell bg-neutral-950 text-white text-center">
            Class Topic
          </TableHead>
          <TableHead className="hidden md:table-cell bg-neutral-950 text-white text-center">
            Homework
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {days.map((day, index) => (
          <TableRow key={index} className="odd:bg-secondary/50">
            <TableCell className="block md:table-cell text-center font-bold">
              {day.Weekday}
            </TableCell>
            <TableCell className="block md:table-cell text-center font-bold">
              {day.Date}
            </TableCell>
            <TableCell className="block md:table-cell text-center">
              {day["Class Topic"]}
            </TableCell>
            <TableCell className="block md:table-cell text-center">
              <SafeHtml  html={day["Homework"]} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ScheduleTable;
