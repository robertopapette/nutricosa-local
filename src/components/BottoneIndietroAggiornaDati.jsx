// 🔙 BottoneIndietroAggiornaDati.jsx
// Versione identica a BottoneIndietro1 ma con destinazione /aggiorna-dati

import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { theme } from "../theme";

export default function BottoneIndietroAggiornaDati() {
  const navigate = useNavigate();

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <button
        onClick={() => navigate("/aggiorna-dati")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "linear-gradient(90deg, #3bb143, #c8b400)",
          color: "#000",
          border: "2px solid #000",
          borderRadius: "10px",
          padding: "0.5rem 1.2rem",
          fontSize: "1rem",
          fontWeight: "700",
          cursor: "pointer",
          boxShadow: "0 3px 5px rgba(0,0,0,0.2)",
          transition: "all 0.2s ease-in-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = "brightness(1.08)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = "brightness(1)";
        }}
      >
        <ArrowLeft size={18} />
        Indietro
      </button>
    </div>
  );
}
