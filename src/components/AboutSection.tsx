import React from "react";
import { Award, Home, Map, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Despre Instalații Sanitare Pro</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicii profesionale pentru toate nevoile dvs. de instalații sanitare
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 section-fade">
            <p className="text-lg text-gray-700">
              Suntem o echipă de profesioniști specializați în instalații sanitare, cu experiență vastă în domeniu. 
              Oferim o gamă completă de servicii pentru instalații sanitare, de la reparații simple până la 
              proiecte complexe pentru clienți rezidențiali și comerciali.
            </p>

            <div className="lg:hidden relative rounded-2xl overflow-hidden shadow-xl max-w-2xl mx-auto mb-8">
              <div className="aspect-video w-full">
                <video
                  src="/Video prezentare.mp4"
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/butelie si centrala.jpeg"
                  aria-label="Video prezentare servicii instalații sanitare"
                >
                  <track kind="captions" srcLang="ro" label="Română" default />
                  Browserul dvs. nu suportă tag-ul video.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none rounded-2xl"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-plumber-50 flex items-center justify-center mr-4 flex-shrink-0">
                  <Home className="h-5 w-5 text-plumber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Experiență și profesionalism</h3>
                  <p className="text-gray-600">
                    Cu ani de experiență în domeniu, echipa noastră garantează un serviciu de calitate și rezultate durabile.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-plumber-50 flex items-center justify-center mr-4 flex-shrink-0">
                  <Map className="h-5 w-5 text-plumber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Zonă de acoperire</h3>
                  <p className="text-gray-600">
                    Oferim servicii în întregul județ Maramureș, cu focus pe municipiul Baia Mare și împrejurimi.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-plumber-50 flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="h-5 w-5 text-plumber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Echipă dedicată</h3>
                  <p className="text-gray-600">
                    Tehnicienii noștri sunt calificați și actualizați permanent cu cele mai noi tehnici și tehnologii.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-plumber-50 flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="h-5 w-5 text-plumber-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Calitate garantată</h3>
                  <p className="text-gray-600">
                    Oferim garanție pentru toate lucrările noastre și folosim doar materiale de calitate superioară.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <Button 
                className="bg-plumber-500 hover:bg-plumber-600 text-white"
                onClick={scrollToServices}
              >
                Descoperă serviciile noastre
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block relative rounded-2xl overflow-hidden shadow-xl max-w-2xl mx-auto lg:mx-0">
            <div className="aspect-video w-full">
              <video 
                src="/Video prezentare.mp4"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                controls
                playsInline
                preload="metadata"
                poster="/butelie si centrala.jpeg"
                aria-label="Video prezentare servicii instalații sanitare"
              >
                <track kind="captions" srcLang="ro" label="Română" default />
                Browserul dvs. nu suportă tag-ul video.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
