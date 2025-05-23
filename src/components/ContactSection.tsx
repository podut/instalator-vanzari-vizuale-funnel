import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  name: z.string().min(3, { message: "Numele trebuie să aibă minim 3 caractere" }),
  email: z.string().email({ message: "Adresa de email nu este validă" }),
  phone: z.string().min(10, { message: "Numărul de telefon nu este valid" }),
  message: z.string().min(10, { message: "Mesajul trebuie să aibă minim 10 caractere" }),
  serviceType: z.enum(["instalare", "reparatie", "urgenta", "consultanta", "altele"], {
    required_error: "Vă rugăm să selectați un tip de serviciu",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
      // Opțional: focus pe primul câmp
      const firstInput = formRef.current.querySelector('input');
      if (firstInput) {
        firstInput.focus();
      }
    }
  };

  const handleCall = () => {
    window.location.href = 'tel:0757695950';
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      serviceType: "altele",
    },
  });

  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mesaj trimis cu succes!",
        description: "Te vom contacta în cel mai scurt timp.",
        variant: "success",
        action: (
          <div className="h-8 w-8 bg-green-500 rounded-full flex items-center justify-center">
            <CheckCircle className="h-5 w-5 text-white" />
          </div>
        ),
      });
      form.reset();
    }, 1500);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contactează-ne</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ai nevoie de ajutor sau vrei să primești o ofertă? Completează formularul și te vom contacta în cel mai scurt timp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button 
              size="lg" 
              className="bg-plumber-500 hover:bg-plumber-600 text-white"
              onClick={scrollToForm}
            >
              Cere ofertă gratuită
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-plumber-700 hover:bg-gray-100 border border-plumber-200"
              onClick={handleCall}
            >
              <Phone className="mr-2 h-5 w-5" />
              Sună acum: 0757 695 950
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="section-fade">
            <Form {...form}>
              <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-gray-700">Nume complet</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Numele dvs." 
                          className="w-full" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-gray-700">Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="exemplu@gmail.com" 
                            className="w-full" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-medium text-gray-700">Telefon</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="07XX XXX XXX" 
                            className="w-full" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-gray-700">Tip serviciu</FormLabel>
                      <FormControl>
                        <select 
                          className="w-full border border-gray-300 rounded-md p-2 text-base"
                          {...field}
                        >
                          <option value="instalare">Instalare</option>
                          <option value="reparatie">Reparație</option>
                          <option value="urgenta">Urgență</option>
                          <option value="consultanta">Consultanță</option>
                          <option value="altele">Altele</option>
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-medium text-gray-700">Mesaj</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Descrieți problema sau serviciul de care aveți nevoie"
                          rows={5}
                          className="w-full"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-plumber-500 hover:bg-plumber-600 text-lg font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Se trimite...
                    </span>
                  ) : "Trimite mesaj"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="section-fade delay-200">
            <Card className="border-none shadow-lg h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Informații de contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-plumber-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-plumber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Telefon</p>
                      <a href="tel:0757695950" className="text-plumber-500 hover:underline text-lg">0757 695 950</a>
                      <p className="text-gray-500 mt-1 text-sm">Disponibil în timpul programului de lucru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-plumber-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-plumber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:podutzpavel_93@yahoo.com" className="text-plumber-500 hover:underline text-lg">podutzpavel_93@yahoo.com</a>
                      <p className="text-gray-500 mt-1 text-sm">Răspundem în maxim 24 de ore</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-plumber-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-plumber-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Adresă</p>
                      <p className="text-gray-600 text-lg">Strada Gutinului nr 5, Baia Sprie, Maramureș, România</p>
                      <p className="text-gray-500 mt-1 text-sm">Luni - Vineri: 08:00 - 18:00</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Zone acoperite:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-50 rounded px-3 py-2 text-center">Baia Sprie</div>
                    <div className="bg-gray-50 rounded px-3 py-2 text-center">Județul Maramureș</div>
                  </div>
                </div>
                
                <div className="mt-8 bg-plumber-50 p-4 rounded-lg border border-plumber-100">
                  <p className="font-medium text-plumber-700">Program de lucru:</p>
                  <p className="text-plumber-600">Luni - Vineri: 08:00 - 18:00</p>
                  <p className="text-plumber-600">Sâmbătă: 09:00 - 14:00</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
