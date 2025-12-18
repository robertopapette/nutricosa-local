import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { theme } from "../theme";

/**
 * 🔙 BottoneIndietro1
 * Versione robusta per layout con scroll interno (main#page-scroll)
 * Mantiene la posizione di scroll tornando indietro.
 */
export default function BottoneIndietro1({ testo = "Torna a Diete famose", colore }) {
  const navigate = useNavigate();

  const handleBack = () => {
    const container = document.getElementById("page-scroll");
    const scrollY = container ? container.scrollTop : 0;

    // salva posizione
    sessionStorage.setItem("restoreScrollMain", scrollY);

    // torna indietro nella history
    navigate(-1);

    // ripristino robusto (attende layout stabile)
    let attempts = 0;
    const restore = () => {
      const c = document.getElementById("page-scroll");
      const saved = sessionStorage.getItem("restoreScrollMain");

      if (c && saved !== null && c.scrollHeight > c.clientHeight) {
        c.scrollTop = parseInt(saved, 10);
        sessionStorage.removeItem("restoreScrollMain");
        return;
      }

      if (attempts < 15) {
        attempts++;
        requestAnimationFrame(restore);
      }
    };

    requestAnimationFrame(restore);
  };

  return (
    <button
      onClick={handleBack}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        background: "none",
        border: "none",
        color: colore || theme.colori?.accento || "#064e3b",
        cursor: "pointer",
        fontSize: "0.95rem",
        fontWeight: "500",
        marginBottom: "1rem",
        padding: "4px 0",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
    >
      <ArrowLeft size={18} /> {testo}
    </button>
  );
}
