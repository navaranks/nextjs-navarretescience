import React from "react";
import HeroCard from "../../components/home-page/hero-card";
import HomeCards from "../../components/home-page/home-cards";
import IconDivider from "../../components/home-page/icon-divider";
import AddToHomeScreen from "@/components/AddToHomeScreen";

export default function Home() {
  return (
    <main className="h-screen w-full">
      <div className="flex flex-col items-center p-6 bg-neutral-900 md:h-full h-fit">
      <HeroCard />
      <h1 className='mt-4 text-3xl text-center text-white text-balance'>Welcome to Mr. Navarrete's Class Website</h1>
      <IconDivider />
      <h3 className='mb-2 text-xl text-center text-white text-balance'>Select an icon to learn more about each class or the teacher!</h3>
      <HomeCards />
    </div>
    <AddToHomeScreen />
    </main>
  );
}
