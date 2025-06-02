import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CallToAction = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-plumber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ai nevoie de un instalator profesionist?
          </h2>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            Contactează-ne acum pentru o evaluare gratuită și o ofertă personalizată pentru nevoile tale.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-plumber-700 hover:bg-gray-100"
              onClick={() => window.location.href = 'tel:0757695950'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Sună acum: 0757 695 950
            </Button>
            <Button 
              size="lg" 
              className="bg-plumber-700 hover:bg-plumber-800 text-white border border-white/20"
              onClick={scrollToContact}
            >
              Cere ofertă gratuită
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
