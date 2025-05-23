import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

declare global {
  interface Window {
    initMap: () => void;
    google: typeof google;
  }
}

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Load Google Maps script dynamically
    const loadGoogleMapsScript = () => {
      const existingScript = document.getElementById("google-maps-script");
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=&callback=initMap`;
        script.id = "google-maps-script";
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        
        // Initialize map once script is loaded
        window.initMap = initMap;
      }
    };
    
    const initMap = () => {
      if (mapRef.current && window.google) {
        // Coordonate pentru Strada Gutinului nr 5, Baia Sprie, Romania
        const locationCoords = { lat: 47.6625, lng: 23.6924 };
        
        // Create the map
        const map = new window.google.maps.Map(mapRef.current, {
          center: locationCoords,
          zoom: 17, // Mărit zoom-ul pentru o vizualizare mai detaliată
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }]
            }
          ]
        });
        
        // Create a marker with custom icon
        new window.google.maps.Marker({
          position: locationCoords,
          map: map,
          title: "Instalații Sanitare Pro",
          animation: window.google.maps.Animation.DROP,
          icon: {
            url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            scaledSize: new window.google.maps.Size(40, 40)
          }
        });

        // Add info window
        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 8px;">
              <h3 style="margin: 0 0 8px 0; font-weight: bold;">Instalații Sanitare Pro</h3>
              <p style="margin: 0;">Strada Gutinului nr 5, Baia Sprie, Maramureș, România</p>
            </div>
          `
        });

        // Add click listener to marker
        const marker = new window.google.maps.Marker({
          position: locationCoords,
          map: map,
          title: "Instalații Sanitare Pro",
          animation: window.google.maps.Animation.DROP,
          icon: {
            url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
            scaledSize: new window.google.maps.Size(40, 40)
          }
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      }
    };
    
    loadGoogleMapsScript();
    
    return () => {
      // Cleanup if needed
      window.initMap = undefined as any;
    };
  }, []);

  return (
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
          <div className="h-96" ref={mapRef}>
            <div className="h-full w-full flex items-center justify-center bg-gray-100">
              <div className="text-gray-400 text-center p-4">
                <MapPin className="h-8 w-8 mx-auto mb-2" />
                <p>Harta se încarcă...</p>
                <p className="text-sm">Strada Gutinului nr 5, Baia Sprie, Maramureș, România</p>
              </div>
            </div>
          </div>
        </Card>
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function initMap() {
                // This function will be called when the Google Maps script loads
                // The actual implementation is in the useEffect hook
              }
            `
          }}
        />
      </div>
    </section>
  );
};

export default MapSection;
