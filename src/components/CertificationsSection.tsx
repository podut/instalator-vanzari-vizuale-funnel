
import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Autorizație ANRE",
      description: "Autorizație pentru instalații sanitare și termice",
      icon: <Award className="h-8 w-8 text-amber-500" />,
    },
    {
      title: "Certificare Profesională",
      description: "Personal calificat în domeniul instalațiilor",
      icon: <CheckCircle className="h-8 w-8 text-green-500" />,
    },
    {
      title: "Specializare Tehnică",
      description: "Specializare în sisteme moderne de instalații",
      icon: <Award className="h-8 w-8 text-blue-500" />,
    },
  ];

  return (
    <section className="py-16 bg-white" id="certificari">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 section-fade">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificări și Autorizații</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Serviciile noastre sunt garantate de certificări profesionale
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title} 
              className="border border-gray-200 hover:border-plumber-200 hover:shadow-lg transition-all duration-300 section-fade delay-100"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-gray-50 rounded-full">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-600 max-w-3xl mx-auto section-fade delay-200">
          <p>
            Toate lucrările sunt executate cu respectarea normelor în vigoare și a standardelor de calitate.
            Oferim garanție pentru toate serviciile noastre.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
