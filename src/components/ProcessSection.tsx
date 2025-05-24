
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "1",
    title: "Contactează-ne",
    description: "Ne suni sau ne trimiți un mesaj descriind problema ta.",
  },
  {
    number: "2",
    title: "Evaluare gratuită",
    description: "Un specialist evaluează situația și îți propune soluții.",
  },
  {
    number: "3",
    title: "Ofertă transparentă",
    description: "Primești o ofertă clară, fără costuri ascunse.",
  },
  {
    number: "4",
    title: "Intervenție rapidă",
    description: "Echipa noastră rezolvă problema în cel mai scurt timp.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cum funcționează?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Procesul nostru simplu și eficient pentru rezolvarea oricărei probleme de instalații
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className={`section-fade delay-${index * 100}`}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-16 h-16 bg-plumber-500 flex items-center justify-center rounded-br-2xl">
                  <span className="text-white text-2xl font-bold">{step.number}</span>
                </div>
                <CardContent className="pt-16 pb-8 px-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
