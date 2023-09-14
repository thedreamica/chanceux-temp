import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Service from "@/components/service/Service";
import Solution from "@/components/solution/Solution";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <Solution />
      <Testimonials />
      <Footer />
    </main>
  );
}
