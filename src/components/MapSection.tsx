import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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
          <MapContainer
            center={center}
            zoom={17}
            style={{ height: "100%", width: "100%" }}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center}>
              <Popup>
                Instalații Sanitare Pro
                <br />
                Strada Gutinului nr 5, Baia Sprie
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </Card>
    </div>
  </section>
);

export default MapSection;
