import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { theme } from "../theme";

/**
 * 🔙 BottoneIndietro
 * Versione intelligente — se non riceve un path, torna alla pagina precedente.
 *
 * Props:
 * - path: (string) percorso specifico (opzionale)
 * - testo: (string) testo visualizzato accanto alla freccia
 * - colore: (string) colore opzionale (default: verde scuro del tema)
 */
export default function BottoneIndietro({ path = null, testo = "Torna indietro", colore }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
    } else {
      navigate(-1); // 🔙 torna alla pagina precedente
    }
  };

  return (
    <button
      onClick={handleClick}
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
