import React, { useState } from "react";

// Team member data imports
import MAzhar1 from "../assets/1MAzhar.png";
import NajamAzeez2 from "../assets/2NajamAzeez.png";
import AdnanKhan5 from "../assets/5AdnanKhan.png";
import MSarfara6 from "../assets/6MSarfaraz.png";
import HameedUllah8 from "../assets/8HameedUllah.png";
import ShamsUlAabidin9 from "../assets/9ShamsUlAabidin.png";
import ilyasAhmadKhan10 from "../assets/10ilyasAhmadKhan.png";
import ShahidSaeed11 from "../assets/11ShahidSaeed.png";
import AttiqurRehman13 from "../assets/13AttiqurRehman.png";
import JamshedAliMughal14 from "../assets/14JamshedAliMughal.png";
import SaghirAhmedSiddiqui15 from "../assets/15SaghirAhmedSiddiqui.png";
import DrSyedIrfanUllahHashmi16 from "../assets/16DrSyedIrfanUllahHashmi.png";
import DrAsifAhsan17 from "../assets/17DrAsifAhsan.png";
import NawazBugti18 from "../assets/18NawazBugti.png";
import email from "../assets/user.png";

// Team data organized by categories
const teamData = {
	seismic: [
		{
			id: 1,
			name: "Muhammad Azhar",
			description:
				"26+ years' experience in the field of Oil & Gas Exploration (Onshore/ Offshore) in National (Pakistan) & International (Oman, UAE, Sudan & Angola) 10 Years experience as a third-party seismic QC in Pakistan",
			image: MAzhar1,
		},
		{
			id: 2,
			name: "Najam Azeez",
			description:
				"28+ years' experience in the field of Oil & Gas Exploration (Onshore/ Offshore) in National (Pakistan) & International (Saudi Arabia) 12 Years experience as a third-party seismic QC in Pakistan",
			image: NajamAzeez2,
		},
		{
			id: 3,
			name: "Muhammad Khalid Khan",
			description:
				"28+ years' experience in the field of Oil & Gas Exploration (Onshore/ Offshore) in National (Pakistan) & International (Saudi Arabia, Sudan), 3rd-party seismic 15 Years",
			image: email,
		},
		{
			id: 4,
			name: "Abbas Mehdi",
			description:
				"29+ years' experience in the field of Oil & Gas Exploration (Onshore/ Offshore) in National (Pakistan) & International (Saudi Arabia, Sudan, Angola, Ethiopia, Congo, Nigeria) 11 Years experience as a third-party seismic QC",
			image: email,
		},
		{
			id: 5,
			name: "Adnan Khan",
			description:
				"25+ years' experience in the industry working as a Seismic QC and Data Processor. Having sufficient experience in Land and Transition Zone Crews using both Vibrosies and Dynamite also experienced in Seismic Acquisition and the training of others as a Seismic QCs. (Onshore/ Offshore) in National (Pakistan) & International ",
			image: AdnanKhan5,
		},
		{
			id: 6,
			name: "M Sarfaraz",
			description:
				"18+ years' experience in the field of Oil & Gas Exploration 3 years' experience as a third-party seismic QC",
			image: MSarfara6,
		},
		{
			id: 7,
			name: "Nazeer Ahmad",
			description:
				"18+ years' experience Exploration 3 years as a third-party seismic QC",
			image: email,
		},
	],
	drilling: [
		{
			id: 8,
			name: "Hameed Ullah",
			description:
				"23+ years' experience in the field of Oil Industry (Onshore/Offshore) in National (Pakistan) & International (Iraq, Qatar) 16 Years experience as a Well site Geologist",
			image: HameedUllah8,
		},
		{
			id: 9,
			name: "Shams Ul Aabidin",
			description:
				"29+ years' experience in the field of Oil Industry (Onshore/Offshore) in National (Pakistan) & International (Qatar, Oman, Sudan, Iran, Algeria, Angola and Iraq) 10 Years experience as a Well site Geologist 16 Year Sr Operations Geologist",
			image: ShamsUlAabidin9,
		},
		{
			id: 10,
			name: "Ilyas Ahmad Khan",
			description:
				"24+ years' experience in the field of Oil Industry (Onshore/Offshore) in National (Pakistan) & International (Qatar, Iran, Iraq, Oman, Malaysia, KSA, UAE, Yemen, Turkey, Australia, Azerbaijan) 14 Years experience as a Well site Geologist",
			image: ilyasAhmadKhan10,
		},
		{
			id: 11,
			name: "Shahid Saeed",
			description:
				"21+ years' experience in the field of Oil Industry (Onshore/Offshore) in National (Pakistan) & International (Qatar, Yemen, Libya, Saudi Arabia, Iraq) 14 Years experience as a Well site Geologist",
			image: ShahidSaeed11,
		},
		{
			id: 12,
			name: "Amir Janan",
			description:
				"19+ years' experience in the field of Oil Industry (Onshore/Offshore) in National (Pakistan) & International (Iraq, Qatar). 10 Years experience as a Well site Geologist",
			image: email,
		},
		{
			id: 13,
			name: "Atiq Ur Rehman",
			subdescription: "(Company Man and Completion)",
			description:
				"+ 42 years in oil & gas drilling and work over operation onshore & off shore in Pakistan and International",
			image: AttiqurRehman13,
		},
		{
			id: 14,
			name: "Jamshed Ali Mughal",
			subdescription: "(Company Man and Completion)",
			description:
				"+ 42 years in oil & gas drilling and work over operation onshore & off shore in Pakistan and International",
			image: JamshedAliMughal14,
		},
		{
			id: 15,
			name: "Saghir Ahmad Siddiqui",
			subdescription: "(Company Man and Completion)",
			description:
				"+37 years in oil & gas drilling and work over operation onshore & off shore in Pakistan and International",
			image: SaghirAhmedSiddiqui15,
		},
	],
	studies: [
		{
			id: 16,
			name: "Dr. Syed Irfan Ullah Hashmi",
			description:
				"He has a PhD degree in Geology from National Centre of Excellence (NCEG) in Geology University of Peshawar. Dr. Hashmi has more than 10 years professional experience in Minerals and Oil & Gas sectors of Pakistan as a consultant Geologist. Dr. Hashmi remained as Lead consultant, Geologist for various mineral explorations projects in Pakistan",
			image: DrSyedIrfanUllahHashmi16,
		},
		{
			id: 17,
			name: "Dr. Asif Ahsan",
			description:
				"Over 30+ experience in Oil & Gas industry as Petroleum Geochemist, Basin Analyst and Geologist. Have delivered petroleum system analysis for hydrocarbon exploration and production of many basins in Pakistan, the UAE and the North Sea (Norway). Performed 2D basin modeling of Hazara Kashmir Syntaxis area and several 1D basin modeling in the Lower Indus Basin. Have contributed significantly in the international exploration portfolio evaluation (Libya, Algeria, Yemen, Iraq) and asset acquisition (Yemen and Iraq) ",
			image: DrAsifAhsan17,
		},
		{
			id: 18,
			name: "Nawaz Bugti",
			description:
				"PhD. is a well-rounded and seasoned geoscientist with two decades of experience in various roles, including exploration, field development planning, regional geology, petroleum systems modeling, salt tectonics, and academic research in oil and gas. I have experience in the US Gulf of Mexico; I mapped the entire salt canopy of deepwater Gulf of Mexico; mapped the source rock acme distribution at basin scale in the Gulf of Mexico basin, prospectivity of Indian offshore basins in Mahanadi, West Bengal, SE Admana and North Sumatra basins. Key skills gained are structural geology, structural forward modeling, and restoration. Seismic interpretation, basin analysis, and petroleum systems modeling. I have extensive experience in geoscience software applications including Petrel, Petromod, Trinity, XCaliber, Kingdom Suite, ArcGIS Pro, and many more.",
			image: NawazBugti18,
		},
	],
};

// Team member card component
const TeamMemberCard = ({ member }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const words = member.description.split(" ");
	const shortDescription =
		words.length > 30
			? words.slice(0, 30).join(" ") + "..."
			: member.description;

	return (
		<div className="bg-white rounded-xl shadow-lg text-center p-6 transition-all duration-300 transform hover:shadow-xl">
			<img
				src={member.image}
				alt={member.name}
				className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mt-2 border-4 border-gray-200 object-cover shadow-md"
			/>
			<h3 className="text-xl font-semibold mt-4">{member.name}</h3>
			{member.subdescription && (
				<p className="text-blue-600 text-sm mt-1">{member.subdescription}</p>
			)}
			<div className="mt-2">
				<p className="text-gray-600 text-justify">
					{isExpanded ? member.description : shortDescription}
				</p>
				{words.length > 30 && (
					<button
						onClick={() => setIsExpanded(!isExpanded)}
						className="text-blue-600 hover:text-blue-800 text-sm mt-2 focus:outline-none"
					>
						{isExpanded ? "Read less" : "Read more"}
					</button>
				)}
			</div>
		</div>
	);
};

// Team category component
const TeamCategory = ({ title, members }) => {
	return (
		<div className="mt-8">
			<div className="bg-blue-600 text-white rounded-lg px-6 py-3 mb-6 shadow-md">
				<h2 className="text-lg font-semibold">{title}</h2>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{members.map((member) => (
					<TeamMemberCard key={member.id} member={member} />
				))}
			</div>
		</div>
	);
};

// Main OurTeam component
const OurTeam = () => {
	const [activeTab, setActiveTab] = useState("all");

	return (
		<section className="py-12 md:py-28 bg-gray-50">
			<div className="max-w-screen-xl mx-auto px-4 md:px-8">
				<div className="text-center pb-8">
					{/* <Title text1="Our" text2="Team" /> */}
					<h1 className="text-4xl font-bold">Our Team</h1>
					<p className="max-w-3xl mx-auto mt-4 text-gray-600">
						AES's team consists of skilled professionals dedicated to providing
						solutions with an unwavering commitment to excellence. We strive to
						offer comprehensive services that meet the evolving needs of our
						clients in the rapidly changing industry.
					</p>
				</div>

				{/* Team Category Tabs */}
				<div className="flex flex-wrap justify-center gap-2 mb-8">
					<button
						onClick={() => setActiveTab("all")}
						className={`px-4 py-2 rounded-md transition-colors ${
							activeTab === "all"
								? "bg-blue-600 text-white"
								: "bg-gray-200 text-gray-700 hover:bg-gray-300"
						}`}
					>
						All Teams
					</button>
					<button
						onClick={() => setActiveTab("seismic")}
						className={`px-4 py-2 rounded-md transition-colors ${
							activeTab === "seismic"
								? "bg-blue-600 text-white"
								: "bg-gray-200 text-gray-700 hover:bg-gray-300"
						}`}
					>
						Seismic Team
					</button>
					<button
						onClick={() => setActiveTab("drilling")}
						className={`px-4 py-2 rounded-md transition-colors ${
							activeTab === "drilling"
								? "bg-blue-600 text-white"
								: "bg-gray-200 text-gray-700 hover:bg-gray-300"
						}`}
					>
						Drilling Team
					</button>
					<button
						onClick={() => setActiveTab("studies")}
						className={`px-4 py-2 rounded-md transition-colors ${
							activeTab === "studies"
								? "bg-blue-600 text-white"
								: "bg-gray-200 text-gray-700 hover:bg-gray-300"
						}`}
					>
						Studies Team
					</button>
				</div>

				{/* Team Categories */}
				{(activeTab === "all" || activeTab === "seismic") && (
					<TeamCategory
						title="2D/3D Seismic Acquisition, Processing & Gravity/Magnetic QC Team"
						members={teamData.seismic}
					/>
				)}

				{(activeTab === "all" || activeTab === "drilling") && (
					<TeamCategory
						title="Drilling Team (Wells Site Geologist, Work Over and Company Man)"
						members={teamData.drilling}
					/>
				)}

				{(activeTab === "all" || activeTab === "studies") && (
					<TeamCategory
						title="Studies Team (Field Geology, Geochemistry and Mineral)"
						members={teamData.studies}
					/>
				)}
			</div>
		</section>
	);
};

export default OurTeam;
