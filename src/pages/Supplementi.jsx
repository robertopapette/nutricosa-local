import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PageContainer from "../components/PageContainer";


export default function Supplementi() {
  const navigate = useNavigate();
  const location = useLocation();
  const bottoniRef = useRef({});

  const sezioni = [
    { emoji: "🥩", nome: "Proteici", path: "/supplementi/proteici" },
    { emoji: "⚡", nome: "Energetici", path: "/supplementi/energetici" },
    { emoji: "🔥", nome: "Dimagrimento", path: "/supplementi/dimagrimento" },
    { emoji: "💪", nome: "Massa muscolare", path: "/supplementi/massa" },
    { emoji: "🌿", nome: "Naturali e legali", path: "/supplementi/naturali-legali" },
    { emoji: "🚫", nome: "Ormonali e dopanti", path: "/supplementi/ormonali-dopanti" },
  ];

  /* 🔁 ascolta le figlie */
  useEffect(() => {
    const target = location.state?.returnTo;

    if (target && bottoniRef.current[target]) {
      bottoniRef.current[target].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [location.state]);

  return (
    <PageContainer
      titolo="Test 💊 Supplementi"
      sottotitolo="Conoscere prima di assumere"
    >
      <div style={{ padding: "1rem" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto 2rem auto",
            padding: "1.5rem",
            background: "rgba(255,255,255,0.9)",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            color: "#222",
            lineHeight: 1.7,
          }}
      >  

        <p>
          Il termine <strong>supplemento</strong> indica tutto ciò che viene
          aggiunto all’alimentazione con l’obiettivo di supportare specifiche
          funzioni dell’organismo. Nel tempo, questo concetto è stato spesso
          semplificato o distorto, trasformando strumenti potenzialmente utili
          in promesse di risultati rapidi.
        </p>

        <p style={{ marginTop: "1rem" }}>
          I supplementi non sostituiscono il cibo, non correggono abitudini
          scorrette e non creano risultati in assenza di basi solide.
          Possono però avere un ruolo mirato in contesti specifici: aumentato
          fabbisogno, attività fisica intensa, recupero, carenze documentate
          o particolari fasi della vita.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Comprendere <strong>quando hanno senso</strong>, <strong>come agiscono</strong>
          e <strong>quali sono i loro limiti</strong> è fondamentale per evitare
          errori comuni, sprechi economici e squilibri metabolici.
          La consapevolezza nasce dalla conoscenza del proprio corpo, non
          dall’accumulo di prodotti.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, i supplementi vengono trattati
          come strumenti di supporto, non come scorciatoie. Il loro valore emerge
          solo quando sono inseriti in un contesto corretto fatto di
          alimentazione equilibrata, movimento consapevole e rispetto dei
          tempi fisiologici.
        </p>

        <p style={{ marginTop: "1rem" }}>
          La vera forza non nasce dall’assumere di più, ma dal
          <strong> capire meglio</strong>.
        </p>
      </div>

        {/* 🔘 BOTTONI */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: "0.7rem",
          }}
        >
          {sezioni.map((s) => (
            <button
              key={s.nome}
              ref={(el) => (bottoniRef.current[s.nome] = el)}
              onClick={() => navigate(s.path)}
              style={{
                background: "rgba(255,255,255,0.8)",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "0.9rem",
                textAlign: "left",
                cursor: "pointer",
                fontSize: "0.95rem",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(34,197,94,0.15)";
                e.currentTarget.style.borderColor = "#16a34a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.8)";
                e.currentTarget.style.borderColor = "#ccc";
              }}
            >
             {s.nome}
           </button>
         ))}
        </div>
      </div>
      </PageContainer>
  );
}

