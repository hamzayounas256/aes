import React from "react";
import consultingImage from "../assets/mineralExplorationServices.png";
// import seismicData from "../assets/seismic_data.jpg";
// import drillingAdvisory from "../assets/drilling_advisory.jpg";
// import geologicalReservoir from "../assets/geological_reservoir.png";
import mes1 from "../assets/mes1.jpg";
import mes2 from "../assets/mes2.jpg";
import mes3 from "../assets/mes3.jpg";
import mes4 from "../assets/mes4.jpg";
import fillCircle from "../assets/fillCircle.png";
import emptyCircle from "../assets/emptyCircle.png";
import { Link } from "react-router";

export default function MineralExplorationServices() {
	document.title = "AES | Mineral Exploration Services";

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
						Mineral Exploration Services
					</h1>
					<p className="text-lg md:text-xl text-white mb-8">
						Expert solutions tailored to the Minerals
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
						national and international Mineral Exploration companies.
					</p>
				</div>
			</section>

			{/* Mineral Exploration Services*/}
			<section className="mb-10">
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="lg:w-2/4">
						<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
							Geological and Geophysical Surveys for Mineral deposits (CRIRSCO,
							JORC, NI-43-101 Guidelines)
						</h2>
						<div className="text-gray-700 space-y-4">
							{/* <h3 className="text-xl font-medium text-[#2694AC] mb-2">
					Mineral Services Include (CRIRSCO Code):
				</h3> */}

							<div className="pl-5 text-lg">
								<p className="font-medium mb-1 flex gap-2 items-center">
									<img className="w-2 h-2" src={fillCircle} /> Desk Top Study
								</p>
								<p className="font-medium mb-1 flex gap-2 items-center">
									<img className="w-2 h-2" src={fillCircle} />
									Scouting of the Lease Area
								</p>

								<p className="font-medium mb-1 flex gap-2 items-center">
									<img className="w-2 h-2" src={fillCircle} />
									Geological Survey
								</p>
								<p className="flex gap-3 items-center">
									<img className="ms-2 w-2 h-2" src={emptyCircle} />{" "}
									Lithological Mapping
								</p>
								<p className="flex gap-3 items-center">
									<img className="ms-2 w-2 h-2" src={emptyCircle} /> Structural
									Mapping
								</p>
								<p className="flex gap-3 items-center">
									<img className="ms-2 w-2 h-2" src={emptyCircle} /> Geochemical
									Sampling
								</p>
								<p className="flex gap-3 items-center">
									<img className="ms-2 w-2 h-2" src={emptyCircle} />
									Mineralogical Studies
								</p>
								<p className="font-medium mb-1 flex gap-2 items-center">
									<img className="w-2 h-2" src={fillCircle} />
									Remote Sensing Surveys (Satellite, Drone or aerial data) study
								</p>
								<p className="flex gap-3 items-center">
									<img className="ms-2 w-2 h-2" src={emptyCircle} />{" "}
									Multispectral and Hyperspectral Imaging
								</p>
								<p className="flex gap-3 items-center">
									<img className="ms-2 w-2 h-2" src={emptyCircle} /> LiDAR
									(Light Detection and Ranging)
								</p>
								<p className="font-medium mb-1 flex gap-2 items-center">
									<img className="w-2 h-2" src={fillCircle} />
									Geophysical Surveys
								</p>
								<p className="flex gap-3 items-center">
									<img className="ms-2 w-2 h-2" src={emptyCircle} />
									Magnetic Survey
								</p>
								<p className="flex gap-3 items-center">
									<img className="ms-2 w-2 h-2" src={emptyCircle} /> Gravity
									Survey
								</p>
								<p className="flex gap-3 items-center">
									<img className="ms-2 w-2 h-2" src={emptyCircle} />
									Electromagnetic (EM) Survey
								</p>
								<p className="flex gap-3 items-center">
									<img className="ms-2 w-2 h-2" src={emptyCircle} /> Induced
									Polarization (IP) Survey
								</p>
								<p className="flex gap-3 items-center">
									<img className="ms-2 w-2 h-2" src={emptyCircle} /> Seismic
									Reflection/Refraction
								</p>
								<p className="font-medium mb-1 flex gap-2 items-center">
									<img className="w-2 h-2" src={fillCircle} />
									Drilling and Sampling
								</p>
								<p className="flex gap-3 items-center">
									<img className="ms-2 w-2 h-2" src={emptyCircle} />
									Core Drilling
								</p>
								<p className="flex gap-3 items-center">
									<img className="ms-2 w-2 h-2" src={emptyCircle} />
									Trenching and Pitting
								</p>
								<p className="font-medium mb-1 flex gap-2 items-center">
									<img className="w-2 h-2" src={fillCircle} />
									Environmental and Structural Considerations
								</p>
								<p className="font-medium mb-1 flex gap-2 items-center">
									<img className="w-2 h-2" src={fillCircle} />
									Recommended Approach
								</p>
								<p className="flex gap-3 items-center">
									<img className="ms-2 w-2 h-2" src={emptyCircle} />
									Initial Phase
								</p>
								<p className="flex gap-3 items-center">
									<img className="ms-2 w-2 h-2" src={emptyCircle} />
									Second Phase
								</p>
								<p className="flex gap-3 items-center">
									<img className="ms-2 w-2 h-2" src={emptyCircle} />
									Final Phase
								</p>
								<p className="flex gap-3 items-center">
									<img className="ms-2 w-2 h-2" src={emptyCircle} />
									Gantt Chart
								</p>
								<p className="flex gap-3 items-center">
									<img className="ms-2 w-2 h-2" src={emptyCircle} />
									Certification by M/s Canadian Experts/Pakistani Experts
								</p>
							</div>
						</div>
					</div>
					<div className="lg:w-1/3">
						{/* 4 Images arranged vertically */}
						<div className="space-y-4">
							<img
								src={mes1}
								alt="Geological and Studies Services"
								className="w-full h-48 object-cover rounded-lg shadow-md"
							/>
							<img
								src={mes2}
								alt="Geological Survey Equipment"
								className="w-full h-48 object-cover rounded-lg shadow-md"
							/>
							<img
								src={mes3}
								alt="Mineral Exploration"
								className="w-full h-48 object-cover rounded-lg shadow-md"
							/>
							<img
								src={mes4}
								alt="Geophysical Surveys"
								className="w-full h-48 object-cover rounded-lg shadow-md"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* <section className="py-10 mb-16">
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="lg:w-2/4">
						<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
							Geological Studies Services
						</h2>
						<div className="text-gray-700 space-y-4">
							<h3 className="text-xl font-medium text-[#2694AC] mb-2">
								Studies Services Include:
							</h3>

							<div className="mt-5 pl-5">
								<p className="font-medium mb-1 flex gap-3 items-center">
									<img className="w-2 h-2" src={fillCircle} /> Structural
									geology, Structural forward modeling, Restoration, and
									petroleum systems modeling
								</p>

								<p className="font-medium mb-1 flex gap-3 items-center">
									<img className="w-2 h-2" src={fillCircle} />{" "}
									Geochemistry/Basin Modeling
								</p>
								<div className="pl-6 space-y-1">
									<p className="flex gap-3 items-center">
										<img className="w-2 h-2" src={emptyCircle} /> Geochemistry
										Assessment of Asphaltene and prediction of its distribution
										in Oil and Gas Reservoirs
									</p>
									<p className="flex gap-3 items-center">
										<img className="w-2 h-2" src={emptyCircle} /> Unconventional
										and Conventional Resource Evaluation
									</p>
									<p className="flex gap-3 items-center">
										<img className="w-2 h-2" src={emptyCircle} /> Assessment of
										leaked annulus fluids and genetic correlation to their
										source reservoirs
									</p>
									<p className="flex gap-3 items-center">
										<img className="w-2 h-2" src={emptyCircle} /> Monitoring and
										assessment of CO2 and Water breakthrough in WAG Projects
									</p>
									<p className="flex gap-3 items-center">
										<img className="w-2 h-2" src={emptyCircle} /> Geochemistry
										Based methods in Exploration
									</p>
									<p className="flex gap-3 items-center">
										<img className="w-2 h-2" src={emptyCircle} /> Assessment of
										oil and gas field vertical and lateral compartments using
										fluid geochemistry
									</p>
									<p className="flex gap-3 items-center">
										<img className="w-2 h-2" src={emptyCircle} /> Core extracted
										fluids, oil, gas and water and hydrocarbon resource
										potential evaluation
									</p>
									<p className="flex gap-3 items-center">
										<img className="w-2 h-2" src={emptyCircle} /> Understanding
										hydrocarbon charge history, basin modeling and basin
										analysis using fluid inclusion studies
									</p>
									<p className="flex gap-3 items-center">
										<img className="w-2 h-2" src={emptyCircle} /> Finding
										additional value from produced formation waters in your
										wells-how geochemistry can help
									</p>
									<p className="flex gap-3 items-center">
										<img className="w-2 h-2" src={emptyCircle} /> Gas
										composition, isotope geochemistry and its application in
										reservoir studies
									</p>
									<p className="flex gap-3 items-center">
										<img className="w-2 h-2" src={emptyCircle} /> Geochemistry
										based assessment of H2S in reservoirs and its distribution
										prediction
									</p>
									<p className="flex gap-3 items-center">
										<img className="w-2 h-2" src={emptyCircle} /> Geochemistry
										can help to select best sites and surveillance for
										underground carbon storage
									</p>
									<p className="flex gap-3 items-center">
										<img className="w-2 h-2" src={emptyCircle} /> Biomarkers and
										their application in exploration and production
									</p>
									<p className="flex gap-3 items-center">
										<img className="w-2 h-2" src={emptyCircle} /> Geochemistry
										labs, instruments, equipment and data analytics
									</p>
									<p className="flex gap-3 items-center">
										<img className="w-2 h-2" src={emptyCircle} /> Assessment of
										controls on reservoir property distribution and prediction
									</p>
									<p className="flex gap-3 items-center">
										<img className="w-2 h-2" src={emptyCircle} /> Exploration
										and production portfolio assessment and its evaluation
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="lg:w-2/4">
						<img
							src={geologicalReservoir}
							alt="Geological and Studies Services"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
				</div>
			</section> */}

			{/* CTA Section */}
			<section className="py-12 bg-[#2694AC] text-white rounded-lg mb-12 px-6 md:px-10">
				<div className="text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						Ready to optimize your energy operations?
					</h2>
					<p className="mb-6 text-white max-w-3xl mx-auto">
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
