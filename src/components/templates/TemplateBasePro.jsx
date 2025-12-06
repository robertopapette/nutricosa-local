// 🌿 TemplateBasePro.jsx — versione base stabile
// 📍 Template grafico per tutte le pagine “Pro” (es. Diete, Principi, ecc.)

import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { theme } from "../../theme";

export default function TemplateBasePro({
  titolo = "Titolo Sezione",
  sottotitolo = "",
  paginaMadre = "",
  sezioni = [],
}) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "80px 1.5rem 2rem",
        maxWidth: "900px",
        margin: "0 auto",
        color: theme.colori.testoChiaro,
        fontFamily: theme.font.primario,
        lineHeight: 1.6,
      }}
    >
      {/* 🔙 Pulsante torna indietro */}
      <button
        onClick={() => navigate(-1)}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 0 8px rgba(255,255,255,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "none";
        }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "transparent",
          color: theme.colori.accento,
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "8px",
          padding: "6px 12px",
          cursor: "pointer",
          transition: "all 0.25s ease",
          marginBottom: "1.5rem",
        }}
      >
        <ArrowLeft size={20} />
        <span style={{ fontSize: "0.9rem" }}>
          {paginaMadre ? `Torna a ${paginaMadre}` : "Indietro"}
        </span>
      </button>

      {/* 🧭 Titolo e sottotitolo */}
      <h1
        style={{
          fontSize: "1.8rem",
          color: theme.colori.accento,
          fontWeight: "bold",
          marginBottom: "0.5rem",
          textAlign: "center",
          textShadow: "0 1px 4px rgba(0,0,0,0.3)",
        }}
      >
        {titolo}
      </h1>

      {sottotitolo && (
        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.8)",
            marginBottom: "2rem",
            fontStyle: "italic",
          }}
        >
          {sottotitolo}
        </p>
      )}

      {/* 📑 Contenuti */}
      <div
        style={{
          background: "rgba(0,0,0,0.35)",
          padding: "1.5rem",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        {sezioni.length > 0 ? (
          sezioni.map((sez, idx) => (
            <div key={idx} style={{ marginBottom: "1.5rem" }}>
              <h2
                style={{
                  fontSize: "1.2rem",
                  color: theme.colori.accento,
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                  paddingBottom: "4px",
                  marginBottom: "0.5rem",
                }}
              >
                {sez.titolo}
              </h2>
              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.9)",
                  fontSize: "0.95rem",
                  whiteSpace: "pre-line",
                }}
              >
                {sez.testo}
              </p>
            </div>
          ))
        ) : (
          <p style={{ color: "#aaa" }}>Nessun contenuto disponibile.</p>
        )}
      </div>
    </div>
  );
}
