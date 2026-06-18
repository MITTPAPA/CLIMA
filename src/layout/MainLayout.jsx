import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ABCNino from "../components/ABCNino";
import Glosario from "../components/Glosario";
import Actions from "../components/Actions";
import Comunicados from "../components/Comunicados";
import Alerts from "../components/Alerts";
import PapaSection from "../components/PapaSection";
import Contact from "../components/Contact";


import "../styles/comp.css";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Hero />
      <ABCNino />
      <Glosario />
      <Actions />
      <Alerts />
      <Comunicados />
      <PapaSection />
      <Contact />
    </>
  );
}
