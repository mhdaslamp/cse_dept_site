import CourseOfferedSection from "@/components/CourseOfferedSection";
import Footer from "@/components/Footer";
import HodMessage from "@/components/HodMessage";
import Toppers from "@/components/Toppers";
import HomePage from "@/components/HomePage/page";

export default function Home() {
  return (
    <main>
      <HomePage />
      <CourseOfferedSection />
      <HodMessage />
      <Toppers />
      <Footer />
    </main>
  );
}
