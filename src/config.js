// ✅ config.js — configurazione globale per Nutrizione Consapevole

export const config = {
  // 🔹 Modalità utente
  // Cambia "PRO" in "FREE" per tornare al comportamento limitato
  userTier: "PRO", // valori possibili: "FREE" | "PRO"

  // 🔹 Limiti di profili
  maxProfilesFree: 1,
  maxProfilesPro: 15,

  // 🔹 Informazioni di versione
  version: "1.0.0",
  buildDate: "2025-10-16",

  // 🔹 Parametri globali opzionali (per futura espansione)
  features: {
    enableOfflineMode: true,
    enableProTesting: true, // permette test anche senza login reale
    showDebugInfo: false,
  },

  // 🔹 Colori chiave per il tema (richiamabili in tutto il progetto)
  palette: {
    free: "#6b7280", // grigio
    pro: "#facc15", // giallo oro
    accent: "#22c55e", // verde brillante
  },

  // 🔹 Configurazione futura API o endpoints (placeholders)
  api: {
    baseUrl: "http://localhost:5000/api",
    timeout: 10000,
  },
};
