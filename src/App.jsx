import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ResearchInsight from "./pages/ResearchInsight";
import ConsultingServices from "./pages/ConsultingServices";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import OurTeam from "./pages/OurTeam";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
	return (
		<>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/researchinsight" element={<ResearchInsight />} />
				<Route path="/ourteam" element={<OurTeam />} />
				<Route path="/consultingservices" element={<ConsultingServices />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
