import CourseOfferedSection from "@/components/CourseOfferedSection";
import Footer from "@/components/Footer";
import HodMessage from "@/components/HodMessage";
import Toppers from "@/components/Toppers";

export default function Home() {
  return (
    <main>
      <CourseOfferedSection />

      <HodMessage />
      <Toppers />

      <Footer />
    </main>
  );
}
