import { useState } from "react";
import {
  Home,
  Info,
  User,
  BarChart3,
  Book,
  Salad,
  Dumbbell,
  FileText,
  Lightbulb,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MenuFisso({ aperto, setAperto, setHoverLabel }) {
  const navigate = useNavigate();
  const [livello, setLivello] = useState(0);
  const [sottomenù, setSottomenù] = useState(null);

  const voci = [
    { id: 1, icon: <Home />, label: "Home", path: "/" },
    { id: 2, icon: <Info />, label: "Chi siamo", path: "/chi-siamo" },
    { id: 3, icon: <User />, label: "Chi sei tu", path: "/chi-sei-tu" },
    {
      id: 4,
      icon: <BarChart3 />,
      label: "Calcolatore",
      path: "/calcolatore",
      sub: [
        { label: "Diete famose", path: "/diete-famose" },
        { label: "Ricettario", path: "/ricettario" },
      ],
    },
    {
      id: 5,
      icon: <Salad />,
      label: "Principi nutrizione",
      path: "/principi-nutrizione",
      sub: [
        { label: "Attività fisica", path: "/attivita-fisica" },
        { label: "Corpo umano", path: "/corpo-umano" },
      ],
    },
    { id: 6, icon: <Lightbulb />, label: "Obiettivo", path: "/obiettivo" },
    { id: 7, icon: <FileText />, label: "Fonti ufficiali", path: "/fonti-ufficiali" },
  ];

  const handleClick = (voce, e) => {
    e.preventDefault();
    if (voce.sub && voce.sub.length > 0) {
      setSottomenù(voce.sub);
      setLivello(1);
    } else {
      navigate(voce.path);
      setAperto(false);
      setSottomenù(null);
      setLivello(0);
    }
  };

  const tornaIndietro = () => {
    setLivello(0);
    setSottomenù(null);
  };

  return (
    <>
      {aperto && (
        <aside
          className="menu-panel"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "14rem",
            display: "flex",
            flexDirection: "column",
            background: "linear-gradient(180deg, #000000 0%, #064e3b 100%)",
            color: "white",
            borderRight: "2px solid rgba(0,0,0,0.3)",
            boxShadow: "4px 0 15px rgba(0,0,0,0.4)",
            zIndex: 2000,
            transform: aperto ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.35s ease-in-out",
          }}
        >
          {/* Barra superiore */}
          <div
            className="flex items-center justify-between p-3 border-b border-black shadow-md"
            style={{
              background: "rgba(255,255,255,0.08)",
              borderBottom: "2px solid rgba(255,255,255,0.2)",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: "1.1rem",
                letterSpacing: "0.5px",
                width: "100%",
              }}
            >
              Menù
            </h2>
          </div>

          {/* Contenuto */}
          <div
            className="relative flex-1 overflow-hidden"
            style={{
              overflowY: "auto",
              WebkitOverflowScrolling: "touch",
              scrollBehavior: "smooth",
              transform: `translateX(-${livello * 100}%)`,
              transition: "transform 0.3s ease",
            }}
          >
            {/* LIVELLO 0 */}
            <nav
              className="absolute top-0 left-0 w-full h-full p-2"
              style={{ scrollbarWidth: "thin" }}
            >
              {voci.map((voce) => (
                <div
                  key={voce.id}
                  className="menu-item flex items-center justify-between px-3 py-2 rounded cursor-pointer transition-all"
                  style={{
                    marginBottom: "2px",
                    color: "white",
                    fontSize: "0.95rem",
                  }}
                  onClick={(e) => handleClick(voce, e)}
                  onMouseEnter={() => setHoverLabel(voce.label)}
                  onMouseLeave={() => setHoverLabel("")}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-5">{voce.icon}</span>
                    <span>{voce.label}</span>
                  </div>
                  {voce.sub && voce.sub.length > 0 && <ChevronRight size={18} />}
                </div>
              ))}
            </nav>

            {/* LIVELLO 1 */}
            {livello > 0 && sottomenù && (
              <div
                className="absolute top-0 left-full w-full h-full"
                style={{
                  background: "linear-gradient(180deg, #000000 0%, #064e3b 100%)",
                }}
              >
                <div
                  className="flex items-center gap-2 px-3 py-3 text-yellow-400 hover:text-white cursor-pointer"
                  onClick={tornaIndietro}
                >
                  <ChevronLeft /> <span>Indietro</span>
                </div>
                <ul className="p-2">
                  {sottomenù.map((item, i) => (
                    <li
                      key={i}
                      className="px-3 py-2 rounded cursor-pointer"
                      style={{ transition: "all 0.2s ease" }}
                      onMouseEnter={() => setHoverLabel(item.label)}
                      onMouseLeave={() => setHoverLabel("")}
                      onClick={() => {
                        navigate(item.path);
                        setAperto(false);
                      }}
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </aside>
      )}
    </>
  );
}
