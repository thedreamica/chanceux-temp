"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Service from "@/components/service/Service";
import Solution from "@/components/solution/Solution";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  }, []);
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
