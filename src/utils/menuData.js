// ================================
// 📁 frontend/src/utils/menuData.js
// Struttura completa menù Nutrity2-ProBase
// ================================

import {
  Home,
  Users,
  User,
  BarChart3,
  Info,
  Book,
  Salad,
  Leaf,
  Dumbbell,
  Pill,
  ClipboardList,
  Target,
  Wallet,
  HelpCircle,
  Star,
  Settings,
  Map,
  Bell,
} from "lucide-react";

export const menuData = [
  { id: 1, label: "Home", icon: Home, path: "/" },

  {
    id: 2,
    label: "Chi siamo",
    icon: Users,
    path: "/chi-siamo",
    sub: [
      { label: "Missione", path: "/chi-siamo#missione" },
      { label: "Valori", path: "/chi-siamo#valori" },
      { label: "Evoluzione", path: "/chi-siamo#evoluzione" },
    ],
  },

  {
    id: 3,
    label: "Chi sei tu",
    icon: User,
    path: "/chi-sei-tu",
    sub: [
      { label: "Misure corporee", path: "/chi-sei-tu#misure" },
      { label: "Calcoli", path: "/chi-sei-tu#calcoli" },
      { label: "Archivio", path: "/chi-sei-tu#archivio" },
    ],
  },

  {
    id: 4,
    label: "Calcolatore",
    icon: BarChart3,
    path: "/calcolatore",
    sub: [
      { label: "Impostazioni", path: "/calcolatore#impostazioni" },
      { label: "Grafici", path: "/calcolatore#grafici" },
      { label: "Storico piatti", path: "/calcolatore#storico" },
    ],
  },

  {
    id: 5,
    label: "Notifiche e motivazione",
    icon: Bell,
    path: "/notifiche",
    sub: [
      { label: "Impostazioni notifiche", path: "/notifiche#impostazioni" },
      { label: "Suggerimenti", path: "/notifiche#suggerimenti" },
      { label: "Storico", path: "/notifiche#storico" },
    ],
  },

  { id: 6, label: "Informazioni", icon: Info, path: "/info-calcolatore" },

  {
    id: 7,
    label: "Diete famose",
    icon: Book,
    path: "/diete",
    sub: [
      { label: "Vegetariana", path: "/diete#vegetariana" },
      { label: "Vegana", path: "/diete#vegana" },
      { label: "Chetogenica", path: "/diete#chetogenica" },
      { label: "Mediterranea", path: "/diete#mediterranea" },
      { label: "Gruppo sanguigno", path: "/diete#gruppo-sanguigno" },
    ],
  },

  { id: 8, label: "Ricettario", icon: Salad, path: "/ricettario" },

  { id: 9, label: "Principi della nutrizione", icon: Leaf, path: "/principi" },

  {
    id: 10,
    label: "Attività fisica",
    icon: Dumbbell,
    path: "/attivita-fisica",
    sub: [
      { label: "Esercizi muscolari", path: "/attivita-fisica#muscolari" },
      { label: "Attività aerobica", path: "/attivita-fisica#aerobica" },
    ],
  },

  { id: 11, label: "Supplementazione", icon: Pill, path: "/supplementazione" },

  { id: 12, label: "Tabella allenamento", icon: ClipboardList, path: "/tabella-allenamento" },

  { id: 13, label: "Obiettivo", icon: Target, path: "/obiettivo" },

  { id: 14, label: "Donazione", icon: Wallet, path: "/donazione" },

  { id: 15, label: "Aiuto", icon: HelpCircle, path: "/aiuto" },

  { id: 16, label: "Versione Pro", icon: Star, path: "/pro" },

  {
    id: 17,
    label: "Impostazioni",
    icon: Settings,
    path: "/impostazioni",
    sub: [
      { label: "Audio", path: "/impostazioni#audio" },
      { label: "Sfondo", path: "/impostazioni#sfondo" },
      { label: "Notifiche", path: "/impostazioni#notifiche" },
      { label: "Legenda", path: "/impostazioni#legenda" },
    ],
  },

  { id: 18, label: "Mappa del sito", icon: Map, path: "/mappa" },
];
