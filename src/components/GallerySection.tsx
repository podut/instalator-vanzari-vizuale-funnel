import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GallerySection = () => {
  // Placeholder gallery items - replace with actual images when available
  const galleryItems = [
    { 
      id: 1, 
      imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
      title: "Instalare baie completă",
      category: "Instalare"
    },
    { 
      id: 2, 
      imageUrl: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
      title: "Reparație chiuvetă",
      category: "Reparații"
    },
    { 
      id: 3, 
      imageUrl: "https://images.unsplash.com/photo-1532383282353-a400b707e9ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
      title: "Montaj centrală termică",
      category: "Instalare"
    },
    { 
      id: 4, 
      imageUrl: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
      title: "Reparații țevi",
      category: "Reparații"
    },
    { 
      id: 5, 
      imageUrl: "https://images.unsplash.com/photo-1567496662086-3cdb26d2a25d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", 
      title: "Instalare sistem încălzire",
      category: "Instalare"
    },
    { 
      id: 6, 
      imageUrl: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
      title: "Desfundare canalizare",
      category: "Urgențe"
    },
  ];

  const [filter, setFilter] = useState<string | null>(null);
  
  const categories = ["Toate", "Instalare", "Reparații", "Urgențe"];
  
  const filteredItems = filter && filter !== "Toate" 
    ? galleryItems.filter(item => item.category === filter)
    : galleryItems;

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white" id="galerie">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 section-fade">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Galerie Proiecte</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explorează portofoliul nostru de lucrări și proiecte finalizate
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 section-fade delay-100">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category || (category === "Toate" && !filter) ? "default" : "outline"}
              size="sm"
              className={`${
                filter === category || (category === "Toate" && !filter) 
                  ? "bg-plumber-500 hover:bg-plumber-600" 
                  : "text-gray-700 hover:text-plumber-600"
              } text-sm sm:text-base`}
              onClick={() => setFilter(category === "Toate" ? null : category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 section-fade delay-200">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none shadow-md h-full flex flex-col"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square group">
                <img
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  src="/fisiere imagini etc/WhatsApp Image 2025-05-13 at 16.25.18 (2).jpeg"
                  alt="Reparație chiuvetă"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-lg font-medium">Reparație chiuvetă</p>
                </div>
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-base sm:text-lg font-medium text-gray-900">{item.title}</h3>
              </div>
            </Card>
          ))}
        </div>
        
        {galleryItems.length > 6 && (
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
