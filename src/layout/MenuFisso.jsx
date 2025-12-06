// ✅ MenuFisso.jsx — versione aggiornata con "Aggiorna i tuoi dati"
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  Users,
  UserCircle,
  HelpCircle,
  BarChart3,
  Info,
  BookOpen,
  Utensils,
  Leaf,
  Pill,
  Dumbbell,
  Target,
  Lightbulb,
  Compass,
  BellRing,
  Settings,
  HeartHandshake,
  FileText,
  Map,
} from "lucide-react";
import { theme } from "../theme";

export default function MenuFisso({ aperto, setAperto, setPreviewId, bottoneMenuRef }) {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);
  const menuRef = useRef(null);
  const hoverTimer = useRef(null);

  // 📋 Tutte le voci del menù in ordine definitivo
  const voci = [
    { id: 1, icon: <Home />, label: "Home", path: "/" },
    { id: 2, icon: <Users />, label: "Chi siamo", path: "/chi-siamo" },
    { id: 3, icon: <UserCircle />, label: "Chi sei tu", path: "/chi-sei-tu" },
    // 🔹 Sostituita la voce "Aiuto" con "Aggiorna i tuoi dati"
    { id: 4, icon: <HelpCircle />, label: "Aggiorna i tuoi dati", path: "/aggiorna-dati" },

    { id: 5, icon: <BarChart3 />, label: "Calcolatore", path: "/calcolatore" },
    { id: 6, icon: <Info />, label: "Info calcolatore", path: "/info-calcolatore" },

    { id: 7, icon: <BookOpen />, label: "Diete famose", path: "/diete-famose" },
    { id: 8, icon: <Utensils />, label: "Ricettario", path: "/ricettario" },

    { id: 9, icon: <Leaf />, label: "Principi nutrizione", path: "/principi-nutrizione" },
    { id: 10, icon: <Pill />, label: "Supplementi", path: "/supplementi" },
    { id: 11, icon: <Dumbbell />, label: "Attività fisica", path: "/attivita-fisica" },
    { id: 12, icon: <Target />, label: "Obiettivo", path: "/obiettivo" },
    { id: 13, icon: <Lightbulb />, label: "Consigli e suggerimenti", path: "/consigli" },

    { id: 14, icon: <Compass />, label: "Legenda icone", path: "/legenda-icone" },
    { id: 15, icon: <BellRing />, label: "Notifiche", path: "/notifiche" },
    { id: 16, icon: <Settings />, label: "Impostazioni", path: "/impostazioni" },
    { id: 17, icon: <HeartHandshake />, label: "Donazione", path: "/donazione" },
    { id: 18, icon: <FileText />, label: "Fonti ufficiali", path: "/fonti-ufficiali" },
    { id: 19, icon: <Map />, label: "Mappa del sito", path: "/mappa-sito" },
  ];

  // 🔹 Chiude il menù se si clicca fuori (ma non sul bottone menù)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !(bottoneMenuRef?.current && bottoneMenuRef.current.contains(event.target))
      ) {
        setAperto(false);
        setPreviewId(null);
      }
    };
    if (aperto) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [aperto, setAperto, bottoneMenuRef, setPreviewId]);

  return (
    <aside
      ref={menuRef}
      style={{
        position: "fixed",
        top: "36px",
        left: 0,
        height: "calc(100vh - 56px)",
        width: theme.layout.larghezzaMenu,
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(180deg, #000000 0%, #064e3b 90%)",
        boxShadow: aperto ? theme.ombra.neraDiffusa : "none",
        color: "white",
        transform: aperto ? "translateX(0)" : "translateX(-100%)",
        transition: theme.transizione,
        zIndex: 2500,
        borderTopLeftRadius: "8px",
        overflow: "hidden",
      }}
    >
      {/* 🔹 Barra estetica superiore */}
      <div
        style={{
          background: "rgba(255,255,255,0.08)",
          padding: "0.6rem",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
        }}
      ></div>

      {/* 🔹 Elenco voci menù */}
      <nav
        style={{
          flex: 1,
          padding: "0.4rem 0",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
        }}
      >
        {voci.map((voce) => (
          <div
            key={voce.id}
            onMouseEnter={() => {
              setHoveredId(voce.id);
              clearTimeout(hoverTimer.current);
              hoverTimer.current = setTimeout(() => setPreviewId(voce.id), 250);
            }}
            onMouseLeave={() => {
              setHoveredId(null);
              clearTimeout(hoverTimer.current);
              setPreviewId(null);
            }}
            onClick={() => {
              navigate(voce.path);
              setAperto(false);
              setPreviewId(null);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 16px",
              cursor: "pointer",
              borderLeft:
                hoveredId === voce.id
                  ? `4px solid ${theme.colori.accento}`
                  : "4px solid transparent",
              background:
                hoveredId === voce.id
                  ? "rgba(250,204,21,0.15)"
                  : "transparent",
              color: hoveredId === voce.id ? theme.colori.accento : "white",
              textShadow:
                hoveredId === voce.id
                  ? "0 0 6px rgba(250,204,21,0.5)"
                  : "none",
              transition: "all 0.25s ease",
            }}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              {voce.icon}
            </span>
            <span
              style={{
                fontWeight: "500",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {voce.label}
            </span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
