import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ResponsiveImage from "@/components/ui/responsive-image";

const localImages = [
	{
		filename: "/chiuveta cu robinet.jpeg",
		title: "Chiuvetă cu robinet montată",
		category: "Instalare",
	},
	{
		filename: "/butelie si centrala.jpeg",
		title: "Butelie și centrală montate",
		category: "Instalare",
	},
	{
		filename: "/calorifer  pe perete.jpeg",
		title: "Calorifer pe perete",
		category: "Instalare",
	},
	{
		filename: "/calorifer.jpeg",
		title: "Calorifer nou instalat",
		category: "Instalare",
	},
	{
		filename: "/Centrala bereta deschisa.jpeg",
		title: "Centrală beretă deschisă",
		category: "Instalare",
	},
	{
		filename: "/curatare calirifer cu motopompa.jpeg",
		title: "Curățare calorifer cu motopompă",
		category: "Reparații",
	},
	{
		filename: "/filtru tevi cupru.jpeg",
		title: "Filtru pe țevi de cupru",
		category: "Instalare",
	},
	{
		filename: "/tevi centrala lucrare.jpeg",
		title: "Țevi centrală lucrare finalizată",
		category: "Instalare",
	},
	{
		filename: "/tevi cu compresor.jpeg",
		title: "Țevi curățate cu compresor",
		category: "Reparații",
	},
	{
		filename: "/tevi de sub chiuveta.jpeg",
		title: "Țevi sub chiuvetă montate",
		category: "Instalare",
	},
	{
		filename: "/Tevi centrala intrare iesire.jpeg",
		title: "Țevi centrală intrare/ieșire",
		category: "Instalare",
	},
	{
		filename: "/butelice cu centrala 2.jpeg",
		title: "Butelii cu centrală (2)",
		category: "Instalare",
	},
];

const GallerySection = () => {
	const [filter, setFilter] = useState<string | null>(null);
	const categories = ["Toate", "Instalare", "Reparații", "Urgențe"];
	const filteredItems =
		filter && filter !== "Toate"
			? localImages.filter((item) => item.category === filter)
			: localImages;

	return (
		<section
			className="py-16 sm:py-20 md:py-24 bg-white"
			id="galerie"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10 sm:mb-12 section-fade">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
						Galerie Proiecte Instalații Sanitare Profesionale
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
						Explorează portofoliul nostru de lucrări și servicii de instalator profesionist. 
						Proiecte de instalații sanitare și termice realizate de experți.
					</p>
				</div>

				<div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 section-fade delay-100">
					{categories.map((category) => (
						<Button
							key={category}
							variant={
								filter === category ||
								(category === "Toate" && !filter)
									? "default"
									: "outline"
							}
							className="rounded-full text-xs sm:text-sm px-3 py-1 sm:px-4 sm:py-2"
							onClick={() => setFilter(category === "Toate" ? null : category)}
						>
							{category}
						</Button>
					))}
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 section-fade delay-200">
					{filteredItems.map((item, index) => (
						<Card
							key={index}
							className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out group"
						>
							<div className="relative aspect-square w-full overflow-hidden">
								<ResponsiveImage
									src={item.filename}
									alt={item.title}
									className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
								/>
							</div>
							<div className="p-3 sm:p-4">
								<h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 truncate">
									{item.title}
								</h3>
								<p className="text-xs sm:text-sm text-gray-500">
									{item.category}
								</p>
							</div>
						</Card>
					))}
				</div>

				<div className="text-center mt-10 sm:mt-12 section-fade delay-300">
					<Button
						size="lg"
						className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
						asChild
					>
						<a href="#contact">
							Solicită o ofertă personalizată pentru proiectul tău
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default GallerySection;