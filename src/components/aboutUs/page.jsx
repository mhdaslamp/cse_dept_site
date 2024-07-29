import React from "react";
import DeptInfo from "@/components/DeptInfo";
import DeptLogo from "@/components/DeptLogo";
import HomePage from "@/components/HomePage/page";
import HorizontalScrollCarousel from "@/components/HorizontalScrollCarousel";
import Acadamics from "@/app/acadamics/page";
import History from "../History";

export default function About() {
  return (
    <main>
      <HomePage />
      <DeptInfo />
      <DeptLogo />
      <Acadamics />
      <History />
      <HorizontalScrollCarousel />
    </main>
  );
}
