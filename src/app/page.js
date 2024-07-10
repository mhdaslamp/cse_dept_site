import CourseOfferedSection from "@/components/CourseOfferedSection";
import DeptInfo from "@/components/DeptInfo";
import DeptLogo from "@/components/DeptLogo";
import Footer from "@/components/Footer";
import HodMessage from "@/components/HodMessage";
import Toppers from "@/components/Toppers/Toppers";
import HomePage from "@/components/HomePage/page";
import References from "@/components/References";

export default function Home() {
  return (
    <main>
      <HomePage />
      <DeptInfo />
      <DeptLogo />
      <Toppers />
      <CourseOfferedSection />
      <HodMessage />
      <References />
      <Footer />
    </main>
  );
}
