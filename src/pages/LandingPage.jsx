import { useEffect } from "react";
import FeatureSection from "../components/FeatureSection";
import PrototypeSection from "../components/PrototypeSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { beneficios, funcionalidades } from "../data/conteudo";
import "../styles/landing.css";

export default function LandingPage() {
  useEffect(() => {
    document.title = "Hello World Corporation | Capture, Organize, Estude";
  }, []);

  return (
    <>
      <Header />
      <main className="landing-main" id="inicio">
        <Hero />
        <FeatureSection
          id="funcionalidades"
          kicker="Tudo em um só lugar"
          title="Funcionalidades"
          items={funcionalidades}
        />
        <FeatureSection
          id="beneficios"
          kicker="Mais produtividade"
          title="Benefícios"
          items={beneficios}
        />
        <PrototypeSection />
      </main>
      <Footer />
    </>
  );
}
