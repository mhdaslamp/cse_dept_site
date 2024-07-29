import CourseOfferedSection from "@/components/CourseOfferedSection";
import DeptInfo from "@/components/DeptInfo";
import DeptLogo from "@/components/DeptLogo";
import Footer from "@/components/Footer";
import HodMessage from "@/components/HodMessage";
import Toppers from "@/components/Toppers/Toppers";
import HomePage from "@/components/HomePage/page";
import References from "@/components/References";
import HorizontalScrollCarousel from "@/components/HorizontalScrollCarousel";
import Acadamics from "@/app/acadamics/page";
import History from "../../components/History";
import Faculty from "@/components/Faculty";

export default function About() {
  return (
    <main>
      <HomePage />
      <DeptInfo />
      <DeptLogo />
      <Acadamics />
      <History />
      <Faculty/>
      {/* <HorizontalScrollCarousel /> */}
    </main>
  );
}
