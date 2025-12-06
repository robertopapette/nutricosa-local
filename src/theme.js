// 🎨 theme.js — versione definitiva Nutrity Pro responsiva
// Gestisce automaticamente dimensioni header e menù per tutti i dispositivi

export const theme = {
  colori: {
    primario: "#f90e0eff", // nero base
    secondario: "#0c0d0dff", // 
    accento: "#facc15", // giallo oro
    sfondo: "rgba(255, 255, 255, 0.85)", // bianco traslucido
    sfondoSecondario: "rgba(7, 7, 7, 0.1)",
    testo: "#222222",
    testoChiaro: "#f9fafb",
    bordo: "rgba(0,0,0,0.15)",
  },

  bordo: {
    raggio: "12px",
  },

  ombra: {
    leggera: "0 2px 6px rgba(0, 0, 0, 0.1)",
    media: "0 4px 12px rgba(0, 0, 0, 0.25)",
    profonda: "0 6px 18px rgba(0, 0, 0, 0.35)",
    neraDiffusa: "0 6px 16px rgba(0,0,0,0.4)", // 🔹 ombra nera elegante
  },

  transizione: "all 0.4s ease", // 🔹 confermata velocità 0.4s

  font: {
    base: "'Segoe UI', sans-serif",
    titolo: "'Montserrat', sans-serif",
    dimensione: {
      base: "1rem",
      titolo: "1.5rem",
      piccolo: "0.875rem",
    },
  },

  layout: {
    larghezzaMenu: "220px", // 🔹 confermata larghezza menù
  },
};

// 🔧 Funzione dinamica responsive
// Calcola automaticamente l’altezza dell’HeaderTop in base a dispositivo e orientamento
export function getHeaderHeight() {
  if (typeof window === "undefined") return "56px";

  const width = window.innerWidth;
  const height = window.innerHeight;
  const isLandscape = width > height;

  // Logica adattiva:
  if (width < 500) {
    // Smartphone
    return isLandscape ? "52px" : "48px";
  } else if (width < 900) {
    // Tablet
    return isLandscape ? "60px" : "56px";
  } else {
    // Desktop
    return "64px";
  }
}
