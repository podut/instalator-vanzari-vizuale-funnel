import React from 'react';
import { Settings, Shield } from 'lucide-react';
import { Button } from './ui/button';

interface CookieSettingsLinkProps {
  className?: string;
  variant?: 'footer' | 'header';
}

const CookieSettingsLink: React.FC<CookieSettingsLinkProps> = ({ 
  className = '',
  variant = 'footer'
}) => {
  const openCookieSettings = () => {
    // Clear cookie consent to show banner again
    localStorage.removeItem('cookieConsent');
    // Reload page to trigger banner
    window.location.reload();
  };

  if (variant === 'footer') {
    return (
      <button
        onClick={openCookieSettings}
        className={`text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 ${className}`}
      >
        <Shield className="h-4 w-4" />
        Setări Cookie-uri
      </button>
    );
  }

  return (
    <Button
      onClick={openCookieSettings}
      variant="outline"
      size="sm"
      className={`text-sm ${className}`}
    >
      <Settings className="h-4 w-4 mr-2" />
      Cookie-uri
    </Button>
  );
};

export default CookieSettingsLink;
