import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Icon fix pentru marker implicit în Leaflet cu React
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/marker-icon-2x.png",
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
});

const center: [number, number] = [47.6625, 23.6924];

const MapSection = () => (
  <section className="py-16 bg-gray-50" id="locatie">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 section-fade">
        <div className="inline-flex items-center justify-center mb-4">
          <MapPin className="h-6 w-6 text-plumber-500 mr-2" />
          <h2 className="text-3xl font-bold text-gray-900">Locația Noastră</h2>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ne găsiți în Baia Sprie, județul Maramureș
        </p>
      </div>
      <Card className="overflow-hidden border-none shadow-xl section-fade delay-100">
        <div className="h-96 w-full">
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Locație InstalatorPro"
              src="https://www.google.com/maps?q=Strada+Gutinului+nr+5,+Baia+Sprie,+Maramureș,+România&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Card>
    </div>
  </section>
);

export default MapSection;
