import React from "react";
import { Link } from "react-router";
import research from "../assets/research.jpg";
import {
	Search,
	Download,
	ArrowRight,
	BookOpen,
	Calendar,
	Clock,
} from "lucide-react";

export default function ResearchInsight() {
	document.title = "AES | Research & Insights";
	const activeFilter = "All";

	// const thoughtLeadershipItems = [
	// 	{
	// 		id: 1,
	// 		title: "The Future of AI in Business Consulting",
	// 		author: "Dr. Sarah Ahmed",
	// 		date: "February 2025",
	// 		excerpt:
	// 			"An exploration of how artificial intelligence is transforming the consulting landscape and creating new opportunities for businesses.",
	// 		category: "Technology",
	// 		readTime: "8 min read",
	// 		image: "https://placehold.co/600x400/e2e8f0/1e40af",
	// 	},
	// 	{
	// 		id: 2,
	// 		title: "Sustainable Business Practices in South Asia",
	// 		author: "Muhammad Tariq",
	// 		date: "January 2025",
	// 		excerpt:
	// 			"A comprehensive analysis of how companies in South Asia are adopting sustainable practices and the economic benefits they're experiencing.",
	// 		category: "Sustainability",
	// 		readTime: "12 min read",
	// 		image: "https://placehold.co/600x400/e2e8f0/1e40af",
	// 	},
	// 	{
	// 		id: 3,
	// 		title: "Digital Transformation Roadmap for SMEs",
	// 		author: "Fatima Hassan",
	// 		date: "December 2024",
	// 		excerpt:
	// 			"Strategic guidance for small and medium enterprises looking to navigate their digital transformation journey effectively.",
	// 		category: "Digital Strategy",
	// 		readTime: "10 min read",
	// 		image: "https://placehold.co/600x400/e2e8f0/1e40af",
	// 	},
	// 	{
	// 		id: 4,
	// 		title: "Financial Services Trends in 2025",
	// 		author: "Amir Khan",
	// 		date: "March 2025",
	// 		excerpt:
	// 			"A forecast of the most significant shifts in the financial services industry expected throughout 2025 and beyond.",
	// 		category: "Finance",
	// 		readTime: "15 min read",
	// 		image: "https://placehold.co/600x400/e2e8f0/1e40af",
	// 	},
	// ];

	const resourceItems = [
		{
			id: 1,
			title: "Offshore Indus",
			type: "Research Paper",
			fileSize: "4.2 MB",
			downloadCount: "842",
			// category: "Business",
			fileUrl: "/pdfs/offshore1.pdf",
		},
		{
			id: 2,
			title: "Offshore Indus",
			type: "Technical Report",
			fileSize: "3.7 MB",
			downloadCount: "1,256",
			// category: "Technology",
			fileUrl: "/pdfs/offshore2.pdf",
		},
		{
			id: 3,
			title: "Shale play",
			type: "Case Study",
			fileSize: "2.1 MB",
			downloadCount: "968",
			// category: "Digital Strategy",
			fileUrl: "/pdfs/shaleplay.pdf",
		},
	];

	const filteredResources =
		activeFilter === "All"
			? resourceItems
			: resourceItems.filter((item) => item.category === activeFilter);

	// const filteredArticles =
	// 	activeFilter === "All"
	// 		? thoughtLeadershipItems
	// 		: thoughtLeadershipItems.filter((item) => item.category === activeFilter);

	return (
		<div className="mx-auto px-4 py-24 md:py-20 max-w-6xl">
			{/* Hero Section with improved overlay */}
			<section className="relative h-96 md:h-screen max-h-[600px] w-full rounded-xl overflow-hidden mb-16">
				<div className="absolute inset-0 w-full h-full">
					<img
						src={research}
						alt="Consulting team working on energy project blueprints"
						className="w-full h-full object-cover"
					/>
					{/* Improved overlay gradient */}
					<div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-black/50"></div>
				</div>

				{/* Hero Content with improved typography and layout */}
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight">
						Cutting-Edge Research for Business Excellence
					</h1>
					<p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-100">
						Access our latest thinking, industry insights, and practical
						resources to help your organization innovate and grow.
					</p>
					{/* <div className="flex flex-col sm:flex-row gap-4 mt-4">
						<button className="px-6 py-3 bg-[#2694AC] text-white font-medium rounded-md hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-2">
							<BookOpen size={18} />
							Browse Research
						</button>
						<button className="px-6 py-3 bg-white text-blue-900 font-medium rounded-md hover:bg-gray-100 transition duration-200 flex items-center justify-center gap-2">
							<Download size={18} />
							Get Latest Report
						</button>
					</div> */}
				</div>
			</section>

			{/* Search and filter bar */}
			{/* <div className="mb-12 bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
				<div className="relative flex-grow max-w-md w-full">
					<input
						type="text"
						placeholder="Search for insights and resources..."
						className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<Search
						className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
						size={18}
					/>
				</div>
				<div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setActiveFilter(category)}
							className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
								activeFilter === category
									? "bg-[#2694AC] text-white"
									: "bg-gray-100 text-gray-700 hover:bg-gray-200"
							}`}
						>
							{category}
						</button>
					))}
				</div>
			</div> */}

			{/* Thought Leadership Section with improved card design */}
			{/* <section className="mb-16">
				<h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-200 flex items-center">
					<BookOpen className="mr-2" size={24} />
					Thought Leadership
				</h2>
				<p className="text-gray-700 mb-8">
					In-depth articles and whitepapers authored by AES consultants,
					offering insights into industry trends and innovations.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredArticles.map((item) => (
						<div
							key={item.id}
							className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col"
						>
							<div className="h-48 overflow-hidden">
								<img
									src={item.image}
									alt={item.title}
									className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
								/>
							</div>
							<div className="p-6 flex flex-col flex-grow">
								<span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
									{item.category}
								</span>
								<h3 className="text-xl font-semibold mb-2 hover:text-[#2694AC] transition-colors">
									{item.title}
								</h3>
								<p className="text-gray-600 text-sm mb-3 flex flex-wrap gap-3">
									<span className="flex items-center">
										<Calendar size={14} className="mr-1" />
										{item.date}
									</span>
									<span className="flex items-center">
										<Clock size={14} className="mr-1" />
										{item.readTime}
									</span>
								</p>
								<p className="text-gray-700 mb-4 flex-grow">{item.excerpt}</p>
								<div className="mt-4">
									<button className="text-[#2694AC] hover:text-blue-800 font-medium flex items-center transition-colors">
										Read More <ArrowRight size={16} className="ml-1" />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-10">
					<button className="px-6 py-3 bg-[#2694AC] text-white font-medium rounded-md hover:bg-blue-700 transition duration-200 flex items-center mx-auto">
						View All Articles <ArrowRight size={18} className="ml-2" />
					</button>
				</div>
			</section> */}

			{/* Downloadable Resources Section with improved visual hierarchy */}
			<section className="mb-16">
				<h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-200 flex items-center">
					<Download className="mr-2" size={24} />
					Resources
				</h2>
				<p className="text-gray-700 mb-8">
					Access research papers, technical reports, and case studies by AES's
					consultance.
				</p>

				<div className="bg-gray-50 rounded-lg p-6 shadow-sm">
					<div className="space-y-4">
						{filteredResources.map((resource) => (
							<div
								key={resource.id}
								className="bg-white rounded-lg border border-gray-200 p-5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:shadow-md transition-shadow"
							>
								<div>
									<h3 className="text-lg font-semibold hover:text-[#2694AC] transition-colors">
										{resource.title}
									</h3>
									<div className="flex flex-wrap items-center gap-4 mt-3">
										{/* <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full">
											{resource.category}
										</span> */}
										<span className="text-sm text-gray-500 flex items-center">
											<BookOpen size={14} className="mr-1" />
											{resource.type}
										</span>
										<span className="text-sm text-gray-500 flex items-center">
											<Download size={14} className="mr-1" />
											{resource.downloadCount}
										</span>
									</div>
								</div>
								<button
									onClick={() => window.open(resource.fileUrl, "_blank")}
									className="px-5 py-2 bg-[#2694AC] text-white rounded-md hover:bg-[#2694AC] transition duration-200 whitespace-nowrap flex items-center cursor-pointer"
								>
									View PDF <Download size={16} className="ml-2" />
								</button>
							</div>
						))}
					</div>
				</div>

				{/* Custom Research CTA with improved design */}
				<div className="bg-[#2694AC] rounded-lg p-8 mt-10 text-white shadow-lg">
					<div className="flex flex-col md:flex-row items-center justify-between">
						<div className="mb-6 md:mb-0 md:mr-8">
							<h3 className="text-2xl font-semibold mb-3">
								Need Custom Research?
							</h3>
							<p className="text-white max-w-xl">
								Our consulting team can develop tailored research solutions to
								address your specific business challenges and help you make
								informed strategic decisions.
							</p>
						</div>
						<Link
							to="/contact"
							className="px-6 py-3 bg-white text-[#2694AC] font-medium rounded-md hover:bg-gray-100 transition duration-200 whitespace-nowrap"
						>
							Contact Our Team
						</Link>
					</div>
				</div>
			</section>

			{/* New section: Featured Research */}
			{/* <section className="mb-16">
				<h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-gray-200">
					Featured Research
				</h2>
				<div className="bg-white rounded-lg shadow-md p-6 md:p-8">
					<div className="flex flex-col md:flex-row gap-8">
						<div className="md:w-1/2">
							<span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
								Special Report
							</span>
							<h3 className="text-2xl font-bold mb-4">
								Pakistan Economic Outlook 2025: Challenges & Opportunities
							</h3>
							<p className="text-gray-700 mb-4">
								This comprehensive report examines the economic landscape of
								Pakistan in 2025, analyzing key sectors, investment
								opportunities, and strategic recommendations for businesses.
							</p>
							<ul className="space-y-2 mb-6">
								<li className="flex items-start">
									<span className="text-[#2694AC] mr-2">✓</span>
									Economic forecasts and growth projections
								</li>
								<li className="flex items-start">
									<span className="text-[#2694AC] mr-2">✓</span>
									Sector-specific analysis and insights
								</li>
								<li className="flex items-start">
									<span className="text-[#2694AC] mr-2">✓</span>
									Risk assessment and mitigation strategies
								</li>
								<li className="flex items-start">
									<span className="text-[#2694AC] mr-2">✓</span>
									Data-driven business recommendations
								</li>
							</ul>
							<button className="px-6 py-3 bg-[#2694AC] text-white font-medium rounded-md hover:bg-blue-700 transition duration-200 flex items-center">
								Download Full Report <Download size={18} className="ml-2" />
							</button>
						</div>
						<div className="md:w-1/2 flex items-center justify-center">
							<img
								src="https://placehold.co/800x600/e2e8f0/1e40af"
								alt="Pakistan Economic Outlook 2025 Report"
								className="max-w-full h-auto rounded-lg shadow-lg"
							/>
						</div>
					</div>
				</div>
			</section> */}

			{/* Newsletter signup */}
			<section className="mb-16 bg-gray-100 rounded-lg p-8">
				<div className="text-center max-w-2xl mx-auto">
					<h3 className="text-2xl font-bold mb-4">Stay Informed</h3>
					<p className="text-gray-700 mb-6">
						Subscribe to our research newsletter to receive the latest insights,
						reports, and thought leadership directly to your inbox.
					</p>
					<div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
						<input
							type="email"
							placeholder="Your email address"
							className="flex-grow px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#2694AC]"
						/>
						<button className="px-6 py-2 bg-[#2694AC] text-white font-medium rounded-md hover:bg-[#2694AC] transition duration-200 whitespace-nowrap">
							Subscribe
						</button>
					</div>
				</div>
			</section>
		</div>
	);
}
