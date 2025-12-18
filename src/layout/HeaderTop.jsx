// 🌿 HeaderTop.jsx — versione con pulsanti e titolo responsive
import { Menu, Music4 } from "lucide-react";
import { theme } from "../theme";

export default function HeaderTop({
  aperto,
  setAperto,
  titolo,
  mostraAudio,
  toggleAudio,
  bottoneMenuRef,
}) {
  const effettoGlow = (el, attivo) => {
    if (!el) return;
    el.style.boxShadow = attivo
      ? "0 0 6px rgba(38, 255, 56, 0.4), 0 0 12px rgba(250,204,21,0.25)"
      : "none";
    el.style.filter = attivo ? "brightness(1.15)" : "none";
  };

  const stilePulsante = {
    background: "rgba(255,255,255,0.15)",
    border: "1px solid rgba(255,255,255,0.3)",
    height: "36px",
    minWidth: "80px",
    borderRadius: "8px",
    cursor: "pointer",
    color: theme.colori.accento,
    fontSize: "0.85rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 10px",
    transition: theme.transizione,
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "56px",
        backgroundColor: theme.colori.secondario,
        color: theme.colori.testoChiaro,
        borderBottom: "2px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 1.2rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >

      {/* 🍔 Pulsante menù */}
      <button
        className="header-btn"
        ref={bottoneMenuRef}
        onClick={() => {
          const nuovoStato = !aperto;
          setAperto(nuovoStato);

          // 🔥 Reset scroll del menù ogni volta che lo apri
          if (!aperto) {
            setTimeout(() => {
              const nav = document.querySelector("aside nav");
              if (nav) nav.scrollTop = 0;   // 💚 Questo è il reset VERO
            }, 0);
          }
        }}
        onMouseEnter={(e) => effettoGlow(e.currentTarget, true)}
        onMouseLeave={(e) => effettoGlow(e.currentTarget, false)}
        style={{
          ...stilePulsante,
          width: "auto",
          justifyContent: "flex-start",
          gap: "8px",
        }}
      >
        <Menu size={20} />
        <span style={{ fontWeight: "bold" }}>Menù</span>
      </button>

      {/* 🌿 Titolo */}
      <h1
        className="header-title"
        style={{
          fontWeight: "bold",
          color: theme.colori.accento,
          fontSize: "1.125rem",
          whiteSpace: "nowrap",
          userSelect: "none",
          textShadow: "0 1px 3px rgba(0,0,0,0.3)",
          flex: 1,
          textAlign: "center",
          margin: "0 1rem",
        }}
      >
        {window.innerWidth < 480 ? "N.Spiral" : titolo || "Nutrition Spiral"}
      </h1>

      {/* 🔘 Pulsanti destri */}
      <div className="header-right">


        <button
          className="header-btn"
          onMouseEnter={(e) => effettoGlow(e.currentTarget, true)}
          onMouseLeave={(e) => effettoGlow(e.currentTarget, false)}
          style={stilePulsante}
        >
          Login
        </button>

        <button
          className="header-btn"
          onClick={toggleAudio}
          onMouseEnter={(e) => effettoGlow(e.currentTarget, true)}
          onMouseLeave={(e) => effettoGlow(e.currentTarget, false)}
          style={{
            ...stilePulsante,
            color: mostraAudio ? "#facc15" : theme.colori.accento,
            minWidth: "70px",
            gap: "6px",
          }}
        >
          <Music4 size={18} />
        </button>
      </div>
    </header>
  );
}
