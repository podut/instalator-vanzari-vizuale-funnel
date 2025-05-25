import React, { useState, useEffect } from 'react';
import { X, Settings, Check, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
declare const gtag: (...args: any[]) => void;

interface CookieSettings {
  fundamental: boolean;
  functionality: boolean;
  analytics: boolean;
  advertising: boolean;
}

const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    fundamental: true, // Always true, can't be disabled
    functionality: false,
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after 1 second delay
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load saved settings
      const savedSettings = JSON.parse(cookieConsent);
      setSettings(savedSettings);
    }
  }, []);

  const saveSettings = (newSettings: CookieSettings) => {
    localStorage.setItem('cookieConsent', JSON.stringify(newSettings));
    setSettings(newSettings);
    setShowBanner(false);
    setShowSettings(false);
    
    // Apply cookie settings (integrate with Google Analytics, etc.)
    applyCookieSettings(newSettings);
  };

  const applyCookieSettings = (settings: CookieSettings) => {
    // Enable/disable Google Analytics
    if (settings.analytics) {
      // Enable GA
      if (typeof gtag !== 'undefined') {
        gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      }
    } else {
      // Disable GA
      if (typeof gtag !== 'undefined') {
        gtag('consent', 'update', {
          'analytics_storage': 'denied'
        });
      }
    }

    // Handle other cookie types...
  };

  const acceptAll = () => {
    const allAccepted = {
      fundamental: true,
      functionality: true,
      analytics: true,
      advertising: true,
    };
    saveSettings(allAccepted);
  };

  const rejectAll = () => {
    const onlyEssential = {
      fundamental: true,
      functionality: false,
      analytics: false,
      advertising: false,
    };
    saveSettings(onlyEssential);
  };

  const toggleSetting = (key: keyof CookieSettings) => {
    if (key === 'fundamental') return; // Can't disable fundamental cookies
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-blue-600 shadow-2xl z-50 p-4 md:p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Setări de confidențialitate
                </h3>
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                Folosim cookie-uri pentru a îmbunătăți experiența dvs. pe site-ul nostru. 
                Puteți să alegeți ce tipuri de cookie-uri să fie autorizate. Aceste setări 
                pot fi schimbate oricând din paginile noastre.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <Button
                onClick={acceptAll}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
              >
                <Check className="h-4 w-4 mr-2" />
                Acceptă toate
              </Button>
              
              <Button
                onClick={rejectAll}
                variant="outline"
                className="border-gray-300 hover:bg-gray-50 px-6 py-2"
              >
                Doar esențiale
              </Button>

              <Dialog open={showSettings} onOpenChange={setShowSettings}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-gray-300 hover:bg-gray-50 px-6 py-2">
                    <Settings className="h-4 w-4 mr-2" />
                    Personalizează
                  </Button>
                </DialogTrigger>
                
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">
                      Setări detaliate de confidențialitate
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-6 mt-4">
                    {/* Fundamental Cookies */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">Cookie-uri fundamentale</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Necesare pentru funcționarea corectă a site-ului
                          </p>
                        </div>
                        <Switch
                          checked={settings.fundamental}
                          disabled={true}
                          className="opacity-50"
                        />
                      </div>
                      <div className="text-xs text-gray-500 pl-4 space-y-1">
                        <p>✓ Ține minte setările permisiunilor de cookie</p>
                        <p>✓ Permite sesiunile de cookie</p>
                        <p>✓ Autentifică logarea în contul de utilizator</p>
                        <p>✓ Ține minte limba selectată</p>
                      </div>
                    </div>

                    <Separator />

                    {/* Functionality Cookies */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">Cookie-uri de funcționalitate</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Îmbunătățesc experiența utilizatorului
                          </p>
                        </div>
                        <Switch
                          checked={settings.functionality}
                          onCheckedChange={() => toggleSetting('functionality')}
                        />
                      </div>
                      <div className="text-xs text-gray-500 pl-4 space-y-1">
                        <p>• Ține minte setările de social media</p>
                        <p>• Ține minte țara și regiunea selectată</p>
                        <p>• Personalizează interfața site-ului</p>
                      </div>
                    </div>

                    <Separator />

                    {/* Analytics Cookies */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">Cookie-uri de analiză</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Ne ajută să îmbunătățim site-ul
                          </p>
                        </div>
                        <Switch
                          checked={settings.analytics}
                          onCheckedChange={() => toggleSetting('analytics')}
                        />
                      </div>
                      <div className="text-xs text-gray-500 pl-4 space-y-1">
                        <p>• Ține evidența paginilor vizitate</p>
                        <p>• Monitorizează timpul petrecut pe pagină</p>
                        <p>• Analizează comportamentul utilizatorilor</p>
                        <p>• Îmbunătățește calitatea serviciilor</p>
                      </div>
                    </div>

                    <Separator />

                    {/* Advertising Cookies */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">Cookie-uri de publicitate</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Pentru afișarea de reclame relevante
                          </p>
                        </div>
                        <Switch
                          checked={settings.advertising}
                          onCheckedChange={() => toggleSetting('advertising')}
                        />
                      </div>
                      <div className="text-xs text-gray-500 pl-4 space-y-1">
                        <p>• Personalizează reclamele afișate</p>
                        <p>• Urmărește eficiența campaniilor</p>
                        <p>• Targetează audiența relevantă</p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-6">
                      <Button
                        onClick={() => saveSettings(settings)}
                        className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                      >
                        Salvează și închide
                      </Button>
                      
                      <Button
                        onClick={acceptAll}
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        Acceptă toate
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Button
                onClick={() => setShowBanner(false)}
                variant="ghost"
                size="sm"
                className="ml-2"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
