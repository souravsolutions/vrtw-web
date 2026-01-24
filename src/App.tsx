import { useRef } from "react";
import PricingComparator from "./components/comparison/comparator";
import Features from "./components/featured/features-10";
import FooterSection from "./components/footer/Footer";
import HeroSection from "./components/Hero-section";
import IntegrationsSection from "./components/intregration/integrations-3";
import Navbar from "./components/Navbar";
import StatsSection from "./components/stats/stats";

const App = () => {
	const navRef = useRef<HTMLElement | null>(null);
	return (
		<>
			<Navbar navRef={navRef} />
			<HeroSection />
			<Features />
			<IntegrationsSection />
			<StatsSection />
			<PricingComparator navRef={navRef} />
			<FooterSection />
		</>
	);
};

export default App;
