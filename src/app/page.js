import CourseOfferedSection from "@/components/CourseOfferedSection";
import DeptInfo from "@/components/DeptInfo";
import DeptLogo from "@/components/DeptLogo";
import Footer from "@/components/Footer";
import HodMessage from "@/components/HodMessage";
import Toppers from "@/components/Toppers";

export default function Home() {
  return (
    <main>
      <CourseOfferedSection />
      <HodMessage />
      <DeptInfo />
      <DeptLogo />
      <Toppers />
      <Footer />
    </main>
  );
}
