import React from "react";
// Import a placeholder image - replace with your actual hero image path
import heroImage from "../assets/hero.png";
// import headshot1 from "../assets/headshot1.jpeg";
// import headshot2 from "../assets/headshot2.jpeg";
// import user from "../assets/user.png";
import { Link } from "react-router";
// Import certificate images - adjust paths as needed
import incorporationCertificate from "../assets/IncorporationLetter.jpg"; // Image 1
import fbrCertificate from "../assets/FBR.jpg"; // Image 2

export default function Home() {
	document.title = "AES | Home";

	return (
		<div className="py-16 md:py-16">
			{/* Hero Section with Background Image */}
			<section className="relative h-96 md:h-screen max-h-[600px] w-full">
				{/* Background Image */}
				<div className="absolute inset-0 w-full h-full">
					<img
						src={heroImage}
						alt="Consulting team working on energy project blueprints"
						className="w-full h-full object-cover"
					/>
					{/* Dark Overlay */}
					{/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
				</div>

				{/* Hero Content */}
				<div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 text-center">
					<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
						Expert Consultancy for a Sustainable Energy Future
					</h1>
					<p className="text-lg md:text-2xl mb-8 max-w-2xl text-gray-100">
						Strategic Solutions For The Oil Gas & Mineral
					</p>
					<Link
						to="/consultingservices"
						className="px-8 py-3 bg-[#2694AC] text-white font-medium rounded-md hover:bg-[#2694AC] transition-colors text-lg"
					>
						Explore Our Expertise
					</Link>
				</div>
			</section>

			{/* Main Content Container */}
			<div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
				{/* Introduction Section */}
				<section className="py-12 md:py-16">
					<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
						Introduction
					</h2>
					<div className="bg-gray-50 rounded-lg shadow-sm px-6 md:px-10 py-8">
						<p className="text-gray-700 leading-relaxed text-lg">
							Welcome to
							<strong> Astral Energy Services Private Limited (AES)</strong> —
							your trusted consulting partner in the Oil Gas and Mineral. We
							offer strategic insights, technical expertise, and data-driven
							solutions to help clients optimize exploration, drilling, and
							resource management. With a team of seasoned professionals, we
							empower energy companies to make informed decisions and achieve
							sustainable growth.
						</p>
					</div>
				</section>

				{/* Key Consulting Areas */}
				<section className="py-10 mb-12">
					<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
						Key Consulting Areas
					</h2>

					<div className="grid md:grid-cols-3 gap-6 lg:gap-8">
						{/* Card 1 */}
						<div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
							<div className="bg-[#2694AC] h-2"></div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-800 mb-3">
									Seismic Data Consulting
								</h3>
								<p className="text-gray-600">
									Expert guidance on data acquisition, processing, and
									interpretation.
								</p>
							</div>
						</div>

						{/* Card 2 */}
						<div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
							<div className="bg-[#2694AC] h-2"></div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-800 mb-3">
									Mineral Exploration Service
								</h3>
								<p className="text-gray-600">
									Field Geology, Geophysical and Pre-Feasibility Studies.
								</p>
							</div>
						</div>

						{/* Card 3 */}
						<div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
							<div className="bg-[#2694AC] h-2"></div>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-800 mb-3">
									Geological Studies & Analysis
								</h3>
								<p className="text-gray-600">
									In-depth reservoir evaluation, geochemistry analysis, and
									feasibility studies.
								</p>
							</div>
						</div>
					</div>

					<div className="mt-8 text-center">
						<Link
							to="/consultingservices"
							className="inline-block px-6 py-3 bg-[#2694AC] text-white font-medium rounded-md hover:bg-[#2694AC] transition-colors"
						>
							Learn More About Our Services →
						</Link>
					</div>
				</section>

				{/* Testimonials Section */}
				{/* <section className="mb-12">
					<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
						Client Testimonials
					</h2>

					<div className="grid md:grid-cols-2 gap-8">
						Testimonial 1
						<div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-lg mx-auto transition-all duration-300 hover:shadow-xl">
							<div className="flex mb-6">
								<div className="flex-shrink-0 mr-4">
									<img
										className="w-12 h-12 bg-[#2694AC] rounded-full flex items-center justify-center text-white font-bold text-xl"
										src={headshot1}
									/>
								</div>
								<div>
									<p className="text-gray-800 font-semibold text-lg">
										Hamza Younas
									</p>
									<p className="text-gray-500 text-sm">
										CEO, TechVentures Inc.
									</p>
								</div>
							</div>

							<p className="text-gray-700 italic mb-6 text-xl leading-relaxed">
								"AES's strategic consulting helped us streamline operations and
								identify new exploration opportunities."
							</p>

							<div className="flex items-center">
								<div className="flex text-yellow-400">
									<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
								</div>
								<span className="text-gray-500 text-sm ml-2">5.0</span>
							</div>
						</div>

						Testimonial 2
						<div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 max-w-lg mx-auto transition-all duration-300 hover:shadow-xl">
							<div className="flex mb-6">
								<div className="flex-shrink-0 mr-4">
									<img
										className="w-12 h-12 bg-[#2694AC] rounded-full flex items-center justify-center text-white font-bold text-xl"
										src={headshot2}
									/>
								</div>
								<div>
									<p className="text-gray-800 font-semibold text-lg">
										Abdul Rehman
									</p>
									<p className="text-gray-500 text-sm">CEO, PZ Mir Inc.</p>
								</div>
							</div>

							<p className="text-gray-700 italic mb-6 text-xl leading-relaxed">
								"Their geochemical insights provided the clarity we needed to
								optimize our resource extraction strategy."
							</p>

							<div className="flex items-center">
								<div className="flex text-yellow-400">
									<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
									<svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
								</div>
								<span className="text-gray-500 text-sm ml-2">5.0</span>
							</div>
						</div>
					</div>
				</section> */}

				{/* Certificates Section - NEW */}
				<section className="py-10 mb-12">
					<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8 text-center">
						Our Certifications
					</h2>

					<div className="grid md:grid-cols-2 gap-8">
						{/* Incorporation Certificate */}
						<div className="bg-white rounded-lg shadow overflow-hidden">
							<h3 className="text-xl font-semibold text-gray-800 p-4 bg-gray-50 border-b">
								Certificate of Incorporation
							</h3>
							<div className="p-4">
								<img
									src={incorporationCertificate}
									alt="SECP Certificate of Incorporation for Astral Energy Services"
									className="w-full h-auto rounded"
								/>
							</div>
						</div>

						{/* FBR Certificate */}
						<div className="bg-white rounded-lg shadow overflow-hidden">
							<h3 className="text-xl font-semibold text-gray-800 p-4 bg-gray-50 border-b">
								Taxpayer Registration Certificate
							</h3>
							<div className="p-4">
								<img
									src={fbrCertificate}
									alt="FBR Taxpayer Registration Certificate for Astral Energy Services"
									className="w-full h-auto rounded"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				{/* <section className="py-12 bg-blue-600 text-white rounded-lg mb-12 px-6 md:px-10">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to optimize your energy operations?
            </h2>
            <p className="mb-6 text-blue-100 max-w-3xl mx-auto">
              Partner with AES to leverage our expertise in the oil, gas, and
              mineral industries. Let us help you make data-driven decisions for
              sustainable growth.
            </p>
            
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </a>
          </div>
        </section> */}
			</div>
		</div>
	);
}
