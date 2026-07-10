import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Research } from "@/components/Research";
import { Projects } from "@/components/Projects";
import { Publications } from "@/components/Publications";
import { Posters } from "@/components/Posters";
import { Experience } from "@/components/Experience";
import { Leadership } from "@/components/Leadership";
import { Certifications } from "@/components/Certifications";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Projects />
      <Publications />
      <Posters />
      <Experience />
      <Leadership />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
