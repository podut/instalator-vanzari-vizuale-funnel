import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import ResponsiveImage from "@/components/ui/responsive-image";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOfferRequest = () => {
    // Scroll to contact section and optionally open a form or trigger a modal
    scrollToContact();
    // You can add additional logic here, like opening a form or modal
  };

  return (
    <div className="relative bg-gradient-to-br from-plumber-700 via-plumber-800 to-plumber-900 text-white min-h-[calc(100vh-4rem)] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="section-fade text-center md:text-left">
            <span className="inline-block bg-plumber-500/90 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-4 shadow-lg">
              Servicii profesionale
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
              Instalator Pro – Servicii Profesionale de Instalații Sanitare în Baia Mare
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white max-w-lg mx-auto md:mx-0 font-light">
              Servicii rapide și de încredere pentru toate nevoile dvs. de instalații sanitare în Baia Mare și județul Maramureș.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-plumber-500 via-plumber-600 to-plumber-700 hover:from-plumber-600 hover:to-plumber-800 active:from-plumber-700 active:to-plumber-900 text-white font-semibold text-base sm:text-lg px-8 sm:px-10 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-full scale-100 hover:scale-105 focus-visible:ring-4 focus-visible:ring-plumber-300 focus-visible:ring-offset-2"
                onClick={handleOfferRequest}
              >
                <span className="flex items-center gap-2">
                  Cere ofertă gratuită
                  <ArrowRight className="ml-2 h-5 w-5 animate-pulse group-hover:animate-none" />
                </span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 hover:bg-white/20 active:bg-white/30 text-white font-medium text-base sm:text-lg px-6 sm:px-8 shadow-lg hover:shadow-xl transition-all duration-300 rounded-full border-2 border-white focus-visible:ring-4 focus-visible:ring-white/40 focus-visible:ring-offset-2 outline-none"
                onClick={scrollToContact}
              >
                Contactează-ne
              </Button>
            </div>
            <div className="mt-8 inline-flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className={`w-8 h-8 rounded-full border-2 border-white/80 bg-plumber-${300 + i*100} shadow-lg`}
                  />
                ))}
              </div>
              <span className="ml-4 text-white">
                <span className="font-bold text-white">Mulți</span> clienți mulțumiți
              </span>
            </div>
          </div>
          
          {/* Hero Image + Card Contact Responsive */}
          <div className="flex flex-col md:flex-row items-center md:items-end gap-0 md:gap-0 section-fade delay-200">
            <div className="relative w-full max-w-2xl mx-auto lg:mx-0 order-2 md:order-1">
              <ResponsiveImage
                className="rounded-2xl shadow-2xl w-full h-auto object-cover mt-6 sm:mt-0 transition-all duration-500 ease-in-out md:max-h-[480px] md:min-h-[320px] max-h-[320px] min-h-[180px]"
                src="/butelie si centrala.jpeg"
                alt="Instalator profesionist la lucru"
                width={800}
                height={480}
                priority={true}
              />
              {/* Card contact: mereu in partea de jos a imaginii, latime max 320px, padding responsive */}
              <div
                className="absolute bottom-4 right-4 w-[90%] max-w-xs md:max-w-sm bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 z-10 md:w-auto md:right-4 md:bottom-4"
                style={{ minWidth: '220px' }}
              >
                <div className="bg-plumber-50 p-2 rounded-lg">
                  <Phone className="h-6 w-6 text-plumber-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Sunați acum</p>
                  <a
                    href="tel:0757695950"
                    className="text-lg font-bold text-plumber-600 hover:text-plumber-700 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = 'tel:0757695950';
                    }}
                  >
                    0757 695 950
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;
