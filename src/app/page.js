import CourseOfferedSection from "@/components/CourseOfferedSection";
import Footer from "@/components/Footer";
import HodMessage from "@/components/HodMessage";
import Toppers from "@/components/Toppers";
import HomePage from "@/components/HomePage/page";
import References from "@/components/References";

export default function Home() {
  return (
    <main>
      <HomePage />
      <CourseOfferedSection />

      <HodMessage />
      <Toppers />
      <References/>
      <Footer />
    </main>
  );
}
