import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
	{
		icon: "💧",
		title: "Instalații sanitare",
		description:
			"Montaj și reparații pentru toate tipurile de instalații sanitare: țevi, robineți, baterii, etc.",
		features: [
			"Montaj instalații apă rece/caldă",
			"Reparații rapide",
			"Detectare și reparare scurgeri",
			"Înlocuire țevi și baterii",
		],
		color: "blue",
	},
	{
		icon: "🔥",
		title: "Centrale termice",
		description:
			"Instalare profesională de centrale termice, sisteme de încălzire și mentenanță periodică.",
		features: [
			"Instalare centrale termice",
			"Montaj calorifere",
			"Întreținere periodică",
			"Sisteme eficiente energetic",
		],
		color: "orange",
	},
	{
		icon: "🧹",
		title: "Desfundare canalizare",
		description:
			"Soluții rapide pentru desfundarea țevilor și canalelor înfundate, cu echipamente profesionale.",
		features: [
			"Intervenții de urgență",
			"Echipament profesional",
			"Camere video pentru inspecție",
			"Soluții permanente",
		],
		color: "green",
	},
];

const colorVariants = {
	blue: {
		light: "bg-blue-50",
		medium: "bg-blue-100",
		border: "border-blue-200",
		icon: "bg-blue-100 text-blue-600",
		dark: "text-blue-600",
	},
	green: {
		light: "bg-green-50",
		medium: "bg-green-100",
		border: "border-green-200",
		icon: "bg-green-100 text-green-600",
		dark: "text-green-600",
	},
	orange: {
		light: "bg-orange-50",
		medium: "bg-orange-100",
		border: "border-orange-200",
		icon: "bg-orange-100 text-orange-600",
		dark: "text-orange-600",
	},
};

const ServicesSection = () => {
	const scrollToContact = () => {
		const contactSection = document.querySelector("#contact");
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	const scrollToServices = () => {
		const servicesSection = document.querySelector("#services");
		if (servicesSection) {
			servicesSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			className="py-16 sm:py-20 md:py-24 bg-white"
			id="services"
			style={{ backgroundColor: "white" }}
		>
			<div
				className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
				style={{ backgroundColor: "white" }}
			>
				<div
					className="text-center mb-12 sm:mb-16 section-fade"
					style={{ backgroundColor: "white" }}
				>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
						Serviciile Noastre
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
						Oferim o gamă completă de servicii profesionale pentru toate nevoile
						dvs. de instalații
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
					{services.map((service, index) => {
						const colorClasses = colorVariants[service.color as keyof typeof colorVariants];

						return (
							<Card
								key={service.title}
								className={`border-2 ${colorClasses.border} shadow-md hover:shadow-xl transition-all duration-300 section-fade delay-${index * 100} card-hover overflow-hidden h-full flex flex-col bg-white`}
								style={{ backgroundColor: "white" }}
							>
								<div
									className={`h-2 w-full ${
										service.color === "blue"
											? "bg-plumber-500"
											: service.color === "orange"
											? "bg-orange-500"
											: "bg-green-500"
									}`}
								></div>
								<CardHeader className={`pb-0 flex-grow`}>
									<div className="flex items-center gap-4 mb-4">
										<div
											className={`w-12 h-12 flex items-center justify-center text-2xl rounded-lg ${colorClasses.icon} flex-shrink-0`}
										>
											{service.icon}
										</div>
										<CardTitle className="text-xl sm:text-2xl font-bold text-gray-800">
											{service.title}
										</CardTitle>
									</div>
									<CardDescription className="text-base sm:text-lg text-gray-600">
										{service.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="flex-grow">
									<ul className="space-y-3 mt-4 mb-6">
										{service.features.map((feature) => (
											<li key={feature} className="flex items-start">
												<CheckCircle
													className={`h-5 w-5 ${
														service.color === "blue"
															? "text-plumber-500"
															: service.color === "orange"
															? "text-orange-500"
															: "text-green-500"
													} mr-2 flex-shrink-0 mt-1`}
												/>
												<span className="text-sm sm:text-base text-gray-700">
													{feature}
												</span>
											</li>
										))}
									</ul>

									<Button
										variant="outline"
										className={`w-full mt-auto border ${
											service.color === "blue"
												? "border-plumber-500 text-plumber-500 hover:bg-plumber-50"
												: service.color === "orange"
												? "border-orange-500 text-orange-500 hover:bg-orange-50"
												: "border-green-500 text-green-500 hover:bg-green-50"
										}`}
										onClick={scrollToContact}
									>
										Află mai multe
									</Button>
								</CardContent>
							</Card>
						);
					})}
				</div>

				<div className="text-center mt-10 sm:mt-12 section-fade delay-300">
					<Button
						size="lg"
						className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 mr-4"
						asChild
					>
						<a href="#galerie">Vezi Proiectele Noastre</a>
					</Button>
					<Button
						size="lg"
						variant="outline"
						className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
						asChild
					>
						<a href="#contact">Contactează-ne Acum</a>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default ServicesSection;
