import React from "react";
import PageContainer from "../components/PageContainer";
import { useNavigate } from "react-router-dom";
import { theme } from "../theme";

export default function Supplementi() {
  const navigate = useNavigate();

  // 🔹 Elenco gruppi principali
  const gruppi = [
    { emoji: "🥩", nome: "Proteici", path: "/supplementi/proteici" },
    { emoji: "⚡", nome: "Energetici", path: "/supplementi/energetici" },
    { emoji: "🔥", nome: "Dimagrimento", path: "/supplementi/dimagrimento" },
    { emoji: "💪", nome: "Massa muscolare", path: "/supplementi/massa" },
    { emoji: "🌿", nome: "Naturali e legali", path: "/supplementi/naturali-legali" },
    { emoji: "🚫", nome: "Ormonali e dopanti", path: "/supplementi/ormonali-dopanti" },
  ];

  return (
    <PageContainer
      titolo="💊 Supplementi"
      sottotitolo="Conoscere prima di assumere"
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "2rem auto",
          padding: "1.5rem",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "12px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          color: "#222",
          lineHeight: 1.7,
        }}
      >
        {/* 🔹 Testo introduttivo */}
        <p style={{ marginBottom: "1.5rem" }}>
          Il mondo dei supplementi è vasto e spesso confuso. Ogni prodotto promette risultati
          rapidi, ma la vera forza nasce dalla consapevolezza. In questa sezione troverai
          informazioni chiare, suddivise per categoria, per comprendere quando un integratore
          può essere utile — e quando, invece, è meglio evitarlo.  
          <br />
          <br />
          <strong>La conoscenza è la forma più pura di forza.</strong>
        </p>

        {/* 🔹 Griglia dei pulsanti */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          {gruppi.map((g) => (
            <button
              key={g.nome}
              onClick={() => navigate(g.path)}
              style={{
                background: "rgba(255,255,255,0.9)",
                border: `2px solid ${theme.colori.accento}`,
                borderRadius: "10px",
                padding: "1rem",
                fontSize: "1.1rem",
                fontWeight: "600",
                color: "#111",
                cursor: "pointer",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(90deg, #3bb143, #c8b400)";
                e.currentTarget.style.color = "#000";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.9)";
                e.currentTarget.style.color = "#111";
              }}
            >
              <span style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}>
                {g.emoji}
              </span>
              {g.nome}
            </button>
          ))}
        </div>

        {/* 🔹 Nota educativa finale */}
        <p
          style={{
            marginTop: "2.5rem",
            fontStyle: "italic",
            textAlign: "center",
            color: "#333",
          }}
        >
          “Ricorda: un corpo forte nasce da una mente informata.”
        </p>
      </div>
    </PageContainer>
  );
}
