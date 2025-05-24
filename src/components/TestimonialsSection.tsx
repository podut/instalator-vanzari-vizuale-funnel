
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Alexandru Popescu",
    role: "Proprietar apartament",
    quote: "Am avut o scurgere de apă în baie și echipa a intervenit în mai puțin de o oră. Serviciu rapid și de calitate!",
    rating: 5,
  },
  {
    name: "Maria Ionescu",
    role: "Administrator bloc",
    quote: "Colaborăm de peste 2 ani pentru întreținerea instalațiilor din bloc. Sunt profesioniști și rezolvă rapid orice problemă.",
    rating: 5,
  },
  {
    name: "Gheorghe Popa",
    role: "Dezvoltator imobiliar",
    quote: "Am lucrat împreună la mai multe proiecte. Echipa lor este profesionistă și respectă întotdeauna termenele.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ce spun clienții noștri</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Satisfacția clienților este prioritatea noastră numărul unu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="border-none shadow-lg section-fade delay-200">
              <CardContent className="p-8">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      {i < testimonial.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <p className="italic text-gray-600 mb-6">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
