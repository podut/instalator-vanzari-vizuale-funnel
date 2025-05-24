import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
						Galerie Proiecte
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
						Explorează portofoliul nostru de lucrări și proiecte
						finalizate
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
							size="sm"
							className={`${
								filter === category ||
								(category === "Toate" && !filter)
									? "bg-plumber-500 hover:bg-plumber-600"
									: "text-gray-700 hover:text-plumber-600"
							} text-sm sm:text-base`}
							onClick={() =>
								setFilter(
									category === "Toate" ? null : category
								)
							}
						>
							{category}
						</Button>
					))}
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 section-fade delay-200">
					{filteredItems.map((item, idx) => (
						<Card
							key={item.filename}
							className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none shadow-md h-full flex flex-col"
						>
							<div className="relative overflow-hidden rounded-lg aspect-square group">
								<img
									className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
									src={item.filename}
									alt={item.title}
									loading="lazy"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
									<p className="text-white text-lg font-medium">
										{item.title}
									</p>
								</div>
							</div>
							<div className="p-4 flex-grow">
								<h3 className="text-base sm:text-lg font-medium text-gray-900">
									{item.title}
								</h3>
							</div>
						</Card>
					))}
				</div>
				{localImages.length > 12 && (
					<div className="text-center mt-8 sm:mt-10">
						<Button
							variant="outline"
							className="border-plumber-500 text-plumber-500 hover:bg-plumber-50 px-6 sm:px-8"
						>
							Vezi mai multe proiecte
						</Button>
					</div>
				)}
			</div>
		</section>
	);
};

export default GallerySection;