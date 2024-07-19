"use client";
import React, { useLayoutEffect, useState, useRef, useCallback } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from "./ui/select";
import { ScrollArea } from "./ui/scroll-area";

interface TabData {
  id: number;
  title: string;
  subtitle: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface HandoutTabsProps {
  tabsData: TabData[];
  borderColor: string;
}

const HandoutTabs: React.FC<HandoutTabsProps> = ({ tabsData, borderColor }) => {
  const [value, setValue] = useState<number>(tabsData[0].id); // Initialize with the id of the first tab
  const tabsRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const updateIndicatorPosition = useCallback(() => {
    if (tabsRef.current && indicatorRef.current) {
      // Find the active tab based on 'data-id' attribute matching the 'value'
      const activeTab = Array.from(tabsRef.current.children).find(
        (child) => child.getAttribute("data-id") === value.toString()
      ) as HTMLElement;
      if (activeTab) {
        indicatorRef.current.style.top = `${activeTab.offsetTop}px`;
        indicatorRef.current.style.height = `${activeTab.clientHeight}px`;
      }
    }
  }, [value]);

  useLayoutEffect(() => {
    updateIndicatorPosition();
    // Add resize event listener to update position on window resize
    const handleResize = () => {
      updateIndicatorPosition();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [updateIndicatorPosition]);

  const handleChange = (id: number) => {
    setValue(id);
  };

  return (
    <div className="flex flex-col md:flex-row sticky">
      {/* Desktop Tabs */}
      <div
        ref={tabsRef}
        className="relative hidden md:flex flex-col border-r border-primary"
      >
        <div
          ref={indicatorRef}
          className={`absolute right-0 border-r-4 ${borderColor} transition-all duration-300`}
        ></div>
        {tabsData.map((tab, index) => (
          <button
            key={tab.id}
            data-id={tab.id.toString()}
            disabled={tab.disabled}
            className={`px-4 py-5 w-24 h-20 flex-grow justify-center hover:rounded-lg hover:bg-accent hover:via-red-900 hover:to-red-800 active:shadow-[-1px_0px_1px_0px_#b7323f_inset,1px_0px_1px_0px_#b7323f_inset,0px_0.125rem_1px_0px_#c73a4d_inset] ${value === tab.id ? "font-extrabold text-primary" : ""}`}
            onClick={() => handleChange(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Mobile Selector */}
      <Select
        value={value.toString()}
        onValueChange={(val) => handleChange(parseInt(val))}
      >
        <SelectTrigger className="md:hidden">
          <SelectValue>
            {tabsData.find((tab) => tab.id === value)?.title +
              " - " +
              tabsData.find((tab) => tab.id === value)?.subtitle}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Handouts for</SelectLabel>
            {tabsData.map((tab) => (
              <SelectItem key={tab.id} value={tab.id.toString()} disabled={tab.disabled}>
                {tab.title + " - " + tab.subtitle}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Content */}
      <div className="flex-grow py-4 md:py-0">
        <div className="sticky top-0">{tabsData.find((tab) => tab.id === value && !tab.disabled)?.content}</div>
      </div>
    </div>
  );
};

export default HandoutTabs;
