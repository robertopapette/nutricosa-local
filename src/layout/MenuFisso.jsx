// ✅ MenuFisso.jsx — versione responsive
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
  

  const voci = [
    { id: 1, icon: <Home />, label: "Home", path: "/" },
    { id: 2, icon: <Users />, label: "Chi siamo", path: "/chi-siamo" },
    { id: 3, icon: <UserCircle />, label: "Chi sei tu", path: "/chi-sei-tu" },
    { id: 4, icon: <HelpCircle />, label: "Aggiorna i tuoi dati", path: "/aggiorna-dati" },
    { id: 5, icon: <BarChart3 />, label: "CSU ", path: "/calcolatore" },
    { id: 6, icon: <Info />, label: "Info CSU", path: "/info-calcolatore" },
    { id: 7, icon: <BookOpen />, label: "Diete famose", path: "/diete-famose" },
    { id: 8, icon: <Utensils />, label: "Ricettario", path: "/ricettario" },
    { id: 9, icon: <Leaf />, label: "Principi nutrizione", path: "/principi-nutrizione" },
    { id: 10, icon: <Pill />, label: "Supplementi", path: "/supplementi" },
    { id: 11, icon: <Dumbbell />, label: "Attività fisica", path: "/attivita-fisica" },
    { id: 12, icon: <Target />, label: "Obiettivo", path: "/obiettivo" },
    { id: 13, icon: <Lightbulb />, label: "Consigli e suggerimenti", path: "/consigli" },
 
    { id: 14, icon: <BellRing />, label: "Notifiche", path: "/notifiche" },
    { id: 15, icon: <Settings />, label: "Impostazioni", path: "/impostazioni" },
    { id: 16, icon: <HeartHandshake />, label: "Donazione", path: "/donazione" },
    { id: 17, icon: <FileText />, label: "Fonti ufficiali", path: "/fonti-ufficiali" },
    { id: 18, icon: <Map />, label: "Mappa del sito", path: "/mappa-sito" },
  ];

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
      className="menu-responsive"
      style={{
        position: "fixed",
        top: "36px",
        left: 0,
        height: "calc(100vh - 56px)",
        width: theme.layout.larghezzaMenu,
        display: "flex",
        flexDirection: "column",
        boxShadow: aperto ? theme.ombra.neraDiffusa : "none",
        color: "white",
        transform: aperto ? "translateX(0)" : "translateX(-100%)",
        transition: theme.transizione,
        zIndex: 2500,
        borderTopLeftRadius: "8px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.08)",
          padding: "0.6rem",
          borderBottom: "1px solid rgba(255,255,255,0.15)",
        }}
      ></div>

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
            className="menu-voce"
            onMouseEnter={() => {
              setHoveredId(voce.id);
              clearTimeout(hoverTimer.current);
              hoverTimer.current = setTimeout(() => setPreviewId(voce.id), 0);
            }}
            onMouseLeave={() => {
              setHoveredId(null);
              clearTimeout(hoverTimer.current);
              setPreviewId(null);
            }}
            onClick={() => {
              navigate(voce.path, {
                state: { fromMenu: true },
              });
              setAperto(false);
              setPreviewId(null);
            }}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 16px",
              gap: "12px",
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

            <span className="menu-label" style={{ fontWeight: "500" }}>
              {voce.label}
            </span>
          </div>
        ))}
      </nav>
    </aside>
  );
}
