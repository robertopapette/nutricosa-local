import React from "react";
import PageContainer from "../components/PageContainer";
import { theme } from "../theme";
import { useNavigate } from "react-router-dom";
import dieteData from "../data/diete.json"; // ✅ import automatico

export default function DieteFamose() {
  const navigate = useNavigate();

  // 🔹 Generazione dinamica di nome e path
  const diete = dieteData.map((nome) => ({
    nome: `Dieta ${nome}`,
    path: `/dieta/${nome.toLowerCase().replace(/\s+/g, "-")}`,
  }));

  return (
    <PageContainer
      titolo="🥗 Diete famose"
      sottotitolo="Scopri le principali strategie alimentari riconosciute"
    >
      <div
        style={{
          maxWidth: 900,
          margin: "2rem auto",
          padding: "1.5rem",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          color: "#222",
          lineHeight: 1.7,
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: 700,
            color: theme.colori.accento,
            marginBottom: "1rem",
          }}
        >
          Diete famose
        </h2>

        <p>
          Clicca sul nome della dieta per leggere la descrizione completa.  
          Ogni piano alimentare è descritto in modo chiaro, con principi,
          vantaggi e possibili criticità.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "0.75rem",
            margin: "1rem 0",
          }}
        >
          {diete.map((dieta) => (
            <button
              key={dieta.path}
              onClick={() => navigate(dieta.path)}
              style={{
                background: "rgba(0,0,0,0.05)",
                border: `1px solid ${theme.colori.accento}`,
                borderRadius: "8px",
                padding: "0.7rem 1rem",
                cursor: "pointer",
                fontWeight: 500,
                color: "#222",
                textAlign: "left",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(250,204,21,0.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(0,0,0,0.05)")
              }
            >
              {dieta.nome}
            </button>
          ))}
        </div>

        <p style={{ marginTop: "1.2rem", fontStyle: "italic", color: "#333" }}>
          ⚠️ Le informazioni riportate hanno scopo divulgativo e non sostituiscono
          il parere di un medico o di un nutrizionista.
        </p>
      </div>
    </PageContainer>
  );
}
