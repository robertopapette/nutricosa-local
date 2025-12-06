import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { theme } from "../theme";

/**
 * 🔙 BottoneIndietro1
 * Versione dedicata alle singole pagine delle DIETE.
 * Torna sempre alla pagina "/diete-famose".
 */
export default function BottoneIndietro1({ testo = "Indietro", colore }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/diete-famose")}
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
