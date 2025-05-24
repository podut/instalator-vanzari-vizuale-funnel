
import { Card, CardContent } from "@/components/ui/card";
import { Clock } from "lucide-react";

const WorkHoursSection = () => {
  const schedule = [
    { day: "Luni", hours: "08:00 - 18:00" },
    { day: "Marți", hours: "08:00 - 18:00" },
    { day: "Miercuri", hours: "08:00 - 18:00" },
    { day: "Joi", hours: "08:00 - 18:00" },
    { day: "Vineri", hours: "08:00 - 18:00" },
    { day: "Sâmbătă", hours: "09:00 - 14:00" },
    { day: "Duminică", hours: "Închis" },
  ];

  return (
    <section className="py-16 bg-gray-50" id="program">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 section-fade">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Program de Lucru</h2>
          <p className="text-xl text-gray-600">
            Suntem disponibili pentru a vă ajuta în următoarele intervale orare
          </p>
        </div>
        
        <Card className="shadow-lg border-none overflow-hidden section-fade delay-100">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-plumber-600 text-white p-8 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <Clock className="h-8 w-8 mr-3" />
                  <h3 className="text-2xl font-bold">Orarul Nostru</h3>
                </div>
                <p className="text-plumber-100 mb-6">
                  Echipa noastră este disponibilă în intervalele orare de mai jos. Pentru situații de urgență, vă rugăm să ne contactați telefonic.
                </p>
                <div className="bg-plumber-700 p-4 rounded-lg">
                  <div className="flex items-center text-plumber-100">
                    <div className="h-2 w-2 bg-green-400 rounded-full mr-2"></div>
                    <span>Disponibil 24/7 pentru urgențe</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8 bg-white">
                <ul className="divide-y divide-gray-200">
                  {schedule.map((item) => (
                    <li key={item.day} className="py-3 flex justify-between items-center">
                      <span className="font-medium text-gray-900">{item.day}</span>
                      <span className={`${item.hours === "Închis" ? "text-red-500" : "text-gray-600"}`}>
                        {item.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default WorkHoursSection;
