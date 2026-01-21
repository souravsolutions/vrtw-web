import { motion } from "motion/react";

import FooterSection from "./components/footer/Footer";
import HeroSection from "./components/Hero-section";
import IntegrationsSection from "./components/intregration/integrations-3";
import Navbar from "./components/Navbar";
import PricingComparator from "./components/comparison/pricing-comparator";
import StatsSection from "./components/stats/stats";
import Features from "./components/featured/features-10";

const App = () => {
  return (
    <motion.div
      className='min-h-screen overflow-x-hidden'
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <Navbar />
      <HeroSection />
      <Features />
      <IntegrationsSection />
      <StatsSection />
      <PricingComparator />
      <FooterSection />
    </motion.div>
  );
};

export default App;
