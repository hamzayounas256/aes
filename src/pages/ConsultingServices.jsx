import React from "react";
import consultingImage from "../assets/consultingservices.jpg";
import seismicData from "../assets/seismic_data.jpg";
import drillingAdvisory from "../assets/drilling_advisory.jpg";
// import geologicalReservoir from "../assets/geological_reservoir.png";
import consult from "../assets/consult.jpg";
import fillCircle from "../assets/fillCircle.png";
// import emptyCircle from "../assets/emptyCircle.png";
import { Link } from "react-router";

export default function ConsultingServices() {
	document.title = "AES | Consulting Services";

	return (
		<div className="pt-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
			{/* Page Header */}
			<section className="py-16 md:py-48 relative">
				<div className="absolute inset-0 w-full h-full">
					<img
						src={consultingImage}
						alt="About Astral Energy Services"
						className="w-full h-full object-cover"
					/>
					{/* Add an overlay to ensure text is readable */}
					<div className="absolute inset-0 bg-black opacity-40"></div>
				</div>
				<div className="relative z-10 max-w-4xl mx-auto text-center">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
						Services
					</h1>
					<p className="text-lg md:text-xl text-white mb-8">
						Expert solutions tailored to the Oil, Gas and Mineral
						{/* , and mineral industries */}
					</p>
					<div className="h-1 w-32 bg-[#2694AC] mx-auto"></div>
				</div>
			</section>

			{/* Services Overview */}
			<section className="py-10">
				<div className="bg-gray-50 rounded-lg shadow-sm px-6 md:px-10 py-8">
					<p className="text-gray-700 leading-relaxed text-lg">
						AES offers a seasoned team of experts. We aim to collaborate closely
						with clients, offering superior field expertise and
						consultancy/Studies services. Our personnel have extensive
						experience in Consultancy/Studies roles across diverse projects for
						national and international oil and gas companies.
					</p>
				</div>
			</section>

			{/* Seismic Data Consulting */}
			<section className="mb-10">
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="lg:w-2/4 pl-4">
						<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
							Consultancy Services
						</h2>
						<div className="space-y-6">
							<div>
								<h3 className="text-xl font-medium text-[#2694AC] mb-3">
									Consultancy Services Include:
								</h3>
								<ul className="text-gray-700 space-y-2 pl-5">
									<li className="flex gap-2 items-center">
										<img className="w-2 h-2" src={fillCircle} /> 2D/3D Seismic
										Data Acquisition QC
									</li>
									<li className="flex gap-2 items-center">
										<img className="w-2 h-2" src={fillCircle} /> 2D/3D Seismic
										Data Processing QC
									</li>
									<li className="flex gap-2 items-center">
										<img className="w-2 h-2" src={fillCircle} />
										Gravity/Magnetic QC
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="lg:w-3/4">
						<img
							src={seismicData}
							alt="Seismic Data Consulting"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
				</div>
			</section>

			{/* Mineral Exploration Services*/}
			<section className="mb-10">
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="lg:w-3/4">
						<img
							src={consult}
							alt="Geological and Studies Services"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
					<div className="lg:w-2/4">
						<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
							Mineral Exploration Services
						</h2>
						<div className="text-gray-700 space-y-4">
							<h3 className="text-xl font-medium text-[#2694AC] mb-2">
								Mineral Services Include (CRIRSCO Code):
							</h3>

							<div className="pl-5">
								<p className="font-medium mb-1 flex gap-2 items-center">
									<img className="w-2 h-2" src={fillCircle} /> Field Geology
								</p>
								<p className="font-medium mb-1 flex gap-2 items-center">
									<img className="w-2 h-2" src={fillCircle} />
									Scoping Study
								</p>

								<p className="font-medium mb-1 flex gap-2 items-center">
									<img className="w-2 h-2" src={fillCircle} />
									Geophysical Study (Magnetic, IP, Resistivity)
								</p>
								<p className="font-medium mb-1 flex gap-2 items-center">
									<img className="w-2 h-2" src={fillCircle} />
									Core Cutting
								</p>
								<p className="font-medium mb-1 flex gap-2 items-center">
									<img className="w-2 h-2" src={fillCircle} />
									Pre-Feasibility Study
								</p>
								<p className="font-medium mb-1 flex gap-2 items-center">
									<img className="w-2 h-2" src={fillCircle} />
									Reserve Estimation and Certification
								</p>
								<p className="font-medium mb-1 flex gap-2 items-center">
									<img className="w-2 h-2" src={fillCircle} />
									Bankable documents
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Drilling Advisory */}
			<section className="py-6 mb-10">
				<div className="flex flex-col lg:flex-row gap-4">
					<div className="lg:w-2/4 lg:pl-20 pl-4">
						<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
							Drilling Services
						</h2>
						<div>
							<h3 className="text-xl font-medium text-[#2694AC] mb-2">
								Drilling Services Include:
							</h3>
							<ul className="text-gray-700 space-y-1 pl-2">
								<li className="flex gap-2 items-center">
									<img className="w-2 h-2" src={fillCircle} /> Wells Site
									Geologist
								</li>
								<li className="flex gap-2 items-center">
									<img className="w-2 h-2" src={fillCircle} /> Company Man
								</li>
								<li className="flex gap-2 items-center">
									<img className="w-2 h-2" src={fillCircle} /> Mud Engineer
								</li>
							</ul>
						</div>
					</div>
					<div className="lg:w-3/4">
						<img
							src={drillingAdvisory}
							alt="Drilling Services"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12 bg-[#2694AC] text-white rounded-lg mb-12 px-6 md:px-10">
				<div className="text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						Ready to optimize your energy operations?
					</h2>
					<p className="mb-6 text-[#2694AC] max-w-3xl mx-auto">
						Contact our team to discuss how our services can address your
						specific challenges and help you achieve your business objectives.
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<Link
							to="/contact"
							className="inline-block px-6 py-3 bg-white text-[#2694AC] font-medium rounded-md hover:bg-gray-100 transition-colors"
						>
							Request a Consultation
						</Link>
						<Link
							to="/researchinsight"
							className="inline-block px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-[#2694AC] transition-colors"
						>
							View All Case Studies
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
