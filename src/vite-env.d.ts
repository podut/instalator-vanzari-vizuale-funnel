
/// <reference types="vite/client" />

// Declare Google Maps global types
declare global {
  interface Window {
    initMap: () => void;
    google: typeof import('googlemaps');
  }
}

// This empty export is necessary for the global augmentation to work
export {};
