import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SelectedScope from "@/components/SelectedScope";
import CareerExperience from "@/components/CareerExperience";
import Ventures from "@/components/Ventures";
import Education from "@/components/Education";
import PersonalDiscipline from "@/components/PersonalDiscipline";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <SelectedScope />
        <CareerExperience />
        <Ventures />
        <Education />
        <PersonalDiscipline />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
