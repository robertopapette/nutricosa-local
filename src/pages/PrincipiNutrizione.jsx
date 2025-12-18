import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PageContainer from "../components/PageContainer";


export default function PrincipiNutrizione() {
  const navigate = useNavigate();
  const location = useLocation();
  const bottoniRef = useRef({});

  const sezioni = [
    { nome: "Proteine", path: "/principi/proteine" },
    { nome: "Glucidi", path: "/principi/glucidi" },
    { nome: "Lipidi", path: "/principi/lipidi" },
    { nome: "Vitamine", path: "/principi/vitamine" },
    { nome: "Minerali", path: "/principi/minerali" },
    { nome: "Acqua", path: "/principi/acqua" },
    { nome: "Digestione", path: "/principi/digestione" },
    { nome: "Alcool (calorie fantasma)", path: "/principi/alcool" },
    { nome: "Dolci", path: "/principi/dolci" },
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
      titolo="I principi della nutrizione consapevole"
      sottotitolo="Le basi per comprendere come il cibo dialoga con il corpo"
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
            La nutrizione non è semplicemente l’atto di mangiare, ma un processo
            complesso attraverso il quale l’organismo interagisce con ciò che
            introduciamo, trasformandolo in energia, struttura ed equilibrio.
          </p>

          <p style={{ marginTop: "1rem" }}>
            Ogni nutriente svolge una funzione precisa: alcuni forniscono energia,
            altri costruiscono e riparano i tessuti, altri ancora regolano
            reazioni vitali. Comprendere questi principi significa fare scelte
            più consapevoli, ascoltando il corpo e rispettandone i bisogni reali.
          </p>

          <p style={{ marginTop: "1rem" }}>
            In <strong>Nutrition Spiral</strong>, questi concetti non sono regole rigide,
            ma strumenti di comprensione: una base solida su cui costruire
            benessere, equilibrio e autonomia nelle scelte alimentari.
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
