import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { useHashNavigation } from "@/hooks/use-hash-navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollToSection } = useHashNavigation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
    return () => {
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isMobileMenuOpen]);

  // Swipe handlers for mobile menu
  const swipeHandlers = useSwipeable({
    onSwipedRight: () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    },
    trackMouse: false, // Disable mouse tracking
    delta: 10, // Minimum swipe distance
    swipeDuration: 500, // Maximum swipe duration
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className={`font-bold text-2xl ${isScrolled ? "text-plumber-700" : "text-white"}`}>
              Instalator<span className="text-plumber-500">Pro</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className={`${isScrolled ? "text-gray-700" : "text-white"}`}>
              <ul className="flex space-x-6">
                <li>
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="hover:text-plumber-500 transition-colors cursor-pointer"
                  >
                    Servicii
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('process')} 
                    className="hover:text-plumber-500 transition-colors cursor-pointer"
                  >
                    Cum funcționează
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimonials')} 
                    className="hover:text-plumber-500 transition-colors cursor-pointer"
                  >
                    Testimoniale
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="hover:text-plumber-500 transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>

            <Button 
              className={`flex items-center ${
                isScrolled 
                  ? "bg-plumber-500 hover:bg-plumber-600 text-white" 
                  : "bg-white hover:bg-gray-100 text-plumber-700"
              }`}
              onClick={() => window.location.href = 'tel:0757695950'}
            >
              <Phone className="mr-2 h-4 w-4" />
              <span>0757 695 950</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden relative z-[101] -mr-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`mobile-menu-button p-3 rounded-md active:bg-gray-100/20 transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="relative w-6 h-6">
                <span 
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 top-3' : 'top-1'
                  }`}
                />
                <span 
                  className={`absolute block w-6 h-0.5 bg-current top-3 transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 top-3' : 'top-5'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          {...swipeHandlers}
          className={`mobile-menu md:hidden fixed inset-x-0 top-[4.5rem] bg-white shadow-lg transition-all duration-300 ease-in-out touch-pan-y z-[99] ${
            isMobileMenuOpen 
              ? "opacity-100 visible" 
              : "opacity-0 invisible pointer-events-none"
          }`}
          style={{ 
            maxHeight: 'calc(100vh - 4.5rem)',
            touchAction: 'pan-y pinch-zoom',
            position: 'fixed',
            left: 0,
            right: 0,
            transform: isMobileMenuOpen ? 'none' : 'translateY(-100%)',
            willChange: 'transform, opacity, visibility'
          }}
        >
          <div className="w-full h-1 bg-gray-200 mb-2">
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto"></div>
          </div>
          <nav className="px-4 py-4 overflow-y-auto">
            <ul className="space-y-1">
              {[
                { section: "services", label: "Servicii" },
                { section: "process", label: "Cum funcționează" },
                { section: "testimonials", label: "Testimoniale" },
                { section: "contact", label: "Contact" }
              ].map((item) => (
                <li key={item.section}>
                  <button 
                    className="block w-full text-left text-gray-700 hover:text-plumber-500 active:bg-gray-50 transition-colors py-3 px-4 rounded-lg"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      scrollToSection(item.section);
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 px-4">
                <Button 
                  className="w-full bg-plumber-500 hover:bg-plumber-600 active:bg-plumber-700 text-white py-3"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = 'tel:0757695950';
                  }}
                >
                  <Phone className="mr-2 h-4 w-4" />
                  <span>0757 695 950</span>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
