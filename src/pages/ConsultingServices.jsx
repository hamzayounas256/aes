import React from "react";
// Import placeholder images - replace with your actual image paths
// import consultingservice1 from "../assets/consultingservice1.png";
// import consultingservice2 from "../assets/consultingservice2.png";
// import consultingservice3 from "../assets/consultingservice3.png";
import drillingAdvisory from "../assets/drilling_advisory.jpg";
import geologicalReservoir from "../assets/geological_reservoir.png";
import seismicData from "../assets/seismic_data.jpg";
import consultingImage from "../assets/consultingservices.jpg";
import { Link } from "react-router";
// import drillingImage from "../assets/drilling-advisory.jpg";
// import geologicalImage from "../assets/geological-studies.jpg";

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
						Our Consulting Services
					</h1>
					<p className="text-lg md:text-xl text-white mb-8">
						Expert solutions tailored to the oil, gas, and mineral industries
					</p>
					<div className="h-1 w-32 bg-blue-600 mx-auto"></div>
				</div>
			</section>

			{/* Services Overview */}
			<section className="py-10 mb-12">
				<div className="bg-gray-50 rounded-lg shadow-sm px-6 md:px-10 py-8">
					<p className="text-gray-700 leading-relaxed text-lg">
						At Astral Energy Services, we provide specialized consulting across
						key areas of the energy sector. Our team of experts delivers
						data-driven insights, strategic recommendations, and technical
						expertise to help our clients optimize their operations and achieve
						sustainable growth.
					</p>
				</div>
			</section>

			{/* Seismic Data Consulting */}
			<section className="py-10 mb-16">
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="lg:w-2/5">
						<img
							src={seismicData}
							alt="Seismic Data Consulting"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
					<div className="lg:w-3/5">
						<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
							Seismic Data Consulting
						</h2>
						<div className="space-y-6">
							<div>
								<h3 className="text-xl font-medium text-blue-600 mb-3">
									Data Acquisition & Processing
								</h3>
								<p className="text-gray-700">
									Our experts provide comprehensive guidance on 2D/3D seismic
									data acquisition planning, field operations oversight, and
									processing quality control. We ensure that your seismic
									programs deliver high-quality data that meets your exploration
									objectives.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium text-blue-600 mb-3">
									Interpretation Strategies
								</h3>
								<p className="text-gray-700">
									We develop customized interpretation workflows and
									methodologies tailored to your geological setting. Our
									approaches integrate structural and stratigraphic analyses to
									identify prospective zones and reduce exploration uncertainty.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium text-blue-600 mb-3">
									Risk Assessment
								</h3>
								<p className="text-gray-700">
									Our risk assessment services evaluate geological, technical,
									and operational factors that might impact exploration success.
									We provide detailed recommendations to mitigate risks and
									optimize resource allocation for exploration projects.
								</p>
							</div>
						</div>

						{/* Case Study Box */}
						{/* <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6">
							<h4 className="text-lg font-semibold text-gray-800 mb-2">
								Case Study: Gulf Basin Exploration
							</h4>
							<p className="text-gray-700 mb-4">
								AES provided comprehensive seismic interpretation for a
								challenging offshore prospect, resulting in a 40% reduction in
								exploration uncertainty and successful discovery of hydrocarbons
								in a previously overlooked formation.
							</p>
							<p className="text-blue-700 font-medium">
								Impact: $12M in cost savings and 30% increase in recoverable
								reserves estimates.
							</p>
						</div> */}
					</div>
				</div>
			</section>

			{/* Drilling Advisory */}
			<section className="py-10 mb-16">
				<div className="flex flex-col lg:flex-row-reverse gap-8">
					<div className="lg:w-2/5">
						<img
							src={drillingAdvisory}
							alt="Drilling Advisory Services"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
					<div className="lg:w-3/5">
						<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
							Drilling Advisory
						</h2>
						<div className="space-y-6">
							<div>
								<h3 className="text-xl font-medium text-blue-600 mb-3">
									Strategic Planning
								</h3>
								<p className="text-gray-700">
									Our drilling experts develop comprehensive strategies for
									drilling operations, from well site evaluations to mud system
									optimization. We analyze formation characteristics, pressure
									regimes, and technical requirements to design efficient
									drilling programs.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium text-blue-600 mb-3">
									Operational Efficiency
								</h3>
								<p className="text-gray-700">
									We identify opportunities to enhance drilling performance
									through advanced techniques, equipment selection, and
									procedural optimization. Our recommendations focus on reducing
									non-productive time while maintaining the highest safety
									standards.
								</p>
							</div>

							<div>
								<h3 className="text-xl font-medium text-blue-600 mb-3">
									Regulatory Compliance
								</h3>
								<p className="text-gray-700">
									Our compliance consulting ensures adherence to local and
									international drilling regulations. We provide guidance on
									permitting requirements, environmental standards, and safety
									protocols to mitigate legal and operational risks.
								</p>
							</div>
						</div>

						{/* Case Study Box */}
						{/* <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6">
							<h4 className="text-lg font-semibold text-gray-800 mb-2">
								Case Study: Complex Formation Drilling
							</h4>
							<p className="text-gray-700 mb-4">
								AES advised on a challenging HPHT well through multiple unstable
								formations, implementing custom mud formulations and casing
								design that prevented common complications.
							</p>
							<p className="text-blue-700 font-medium">
								Impact: 15 days reduction in drilling time and zero safety
								incidents across the project.
							</p>
						</div> */}
					</div>
				</div>
			</section>

			{/* Geological Studies */}
			<section className="py-10 mb-16">
				<div className="flex flex-col lg:flex-row gap-8">
					<div className="lg:w-2/5">
						<img
							src={geologicalReservoir}
							alt="Geological and Reservoir Studies"
							className="w-full h-auto rounded-lg shadow-md"
						/>
					</div>
					<div className="lg:w-3/5">
						<h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
							Geological Studies
						</h2>
						<div className="text-gray-700 space-y-4">
							<h3 className="text-xl font-medium text-blue-600 mb-2">
								Studies Services Include:
							</h3>

							<div className="pl-5">
								<p className="font-medium mb-1">• Field Geology</p>

								<p className="font-medium mb-1">
									• Mineral Exploration (CRIRSCO Code)
								</p>
								<div className="pl-6 space-y-1">
									<p>a. Scoping Study</p>
									<p>b. Field Geology</p>
									<p>c. Geophysical Study (Magnetic, IP, Resistivity)</p>
									<p>d. Core Cutting</p>
									<p>e. Pre-Feasibility Study</p>
									<p>f. Reserve Estimation and Certification</p>
									<p>g. Bankable documents</p>
								</div>

								<p className="font-medium mt-3 mb-1">
									• Structural geology, Structural forward modeling,
									Restoration, and petroleum systems modeling
								</p>

								<p className="font-medium mt-3 mb-1">
									• Geochemistry/Basin Modeling
								</p>
								<div className="pl-6 space-y-1">
									<p>
										a. Geochemistry Assessment of Asphaltene and prediction of
										its distribution in Oil and Gas Reservoirs
									</p>
									<p>b. Unconventional and Conventional Resource Evaluation</p>
									<p>
										c. Assessment of leaked annulus fluids and genetic
										correlation to their source reservoirs
									</p>
									<p>
										d. Monitoring and assessment of CO2 and Water breakthrough
										in WAG Projects
									</p>
									<p>e. Geochemistry Based methods in Exploration</p>
									<p>
										f. Assessment of oil and gas field vertical and lateral
										compartments using fluid geochemistry
									</p>
									<p>
										g. Core extracted fluids, oil, gas and water and hydrocarbon
										resource potential evaluation
									</p>
									<p>
										h. Understanding hydrocarbon charge history, basin modeling
										and basin analysis using fluid inclusion studies
									</p>
									<p>
										i. Finding additional value from produced formation waters
										in your wellshow geochemistry can help
									</p>
									<p>
										j. Gas composition, isotope geochemistry and its application
										in reservoir studies
									</p>
									<p>
										k. Geochemistry based assessment of H2S in reservoirs and
										its distribution prediction
									</p>
									<p>
										l. Geochemistry can help to select best sites and
										surveillance for underground carbon storage
									</p>
									<p>
										m. Biomarkers and their application in exploration and
										production
									</p>
									<p>
										n. Geochemistry labs, instruments, equipment and data
										analytics
									</p>
									<p>
										o. Assessment of controls on reservoir property distribution
										and prediction
									</p>
									<p>
										p. Exploration and production portfolio assessment and its
										evaluation
									</p>
								</div>
							</div>
						</div>

						{/* Case Study Box */}
						{/* <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-6">
							<h4 className="text-lg font-semibold text-gray-800 mb-2">
								Case Study: Mature Field Revitalization
							</h4>
							<p className="text-gray-700 mb-4">
								AES conducted a comprehensive reservoir study for a declining
								field, identifying bypassed pay zones and recommending targeted
								infill drilling and enhanced recovery techniques.
							</p>
							<p className="text-blue-700 font-medium">
								Impact: Extended field life by 12 years and increased
								recoverable reserves by 18 million barrels.
							</p>
						</div> */}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12 bg-blue-600 text-white rounded-lg mb-12 px-6 md:px-10">
				<div className="text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						Ready to optimize your energy operations?
					</h2>
					<p className="mb-6 text-blue-100 max-w-3xl mx-auto">
						Contact our team to discuss how our consulting services can address
						your specific challenges and help you achieve your business
						objectives.
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-4">
						<Link
							to="/contact"
							className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
						>
							Request a Consultation
						</Link>
						<Link
							to="/researchinsight"
							className="inline-block px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
						>
							View All Case Studies
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
