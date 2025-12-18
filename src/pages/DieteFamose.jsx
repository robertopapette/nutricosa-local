import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PageContainer from "../components/PageContainer";


export default function DieteFamose() {
  const navigate = useNavigate();
  const location = useLocation();
  const bottoniRef = useRef({});

  const sezioni = [
    { nome: "Dieta Mediterranea", path: "/dieta/mediterranea" },
    { nome: "Dieta Chetogenica", path: "/dieta/chetogenica" },
    { nome: "Dieta Vegetariana", path: "/dieta/vegetariana" },
    { nome: "Dieta Vegana", path: "/dieta/vegana" },
    { nome: "Dieta Dukan", path: "/dieta/dukan" },
    { nome: "Dieta Atkins" , path: "/dieta/atkins" },
    { nome: "Dieta Flexitariana", path: "/dieta/flexitariana" },
    { nome: "Dieta DASH", path: "/dieta/dash" },
    { nome: "Dieta MIND", path: "/dieta/mind" },
    { nome: "Dieta Digiuno intermittente ", path: "/dieta/digiuno-intermittente" },
    { nome: "Dieta LowFODMAP", path: "/dieta/low-fodmap" },
    { nome: "Dieta Paleo", path: "/dieta/paleo" },
    { nome: "Dieta Gruppo sanguigno", path: "/dieta/gruppo-sanguigno" },
    { nome: "Dieta Zona", path: "/dieta/zona" },    
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
      titolo="Le principali diete famose"
      sottotitolo="Comprendere gli approcci alimentari prima di seguirli"
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
          Le cosiddette <strong>diete famose</strong> rappresentano approcci
          alimentari nati in contesti storici, culturali, scientifici e talvolta
          clinici differenti. Ognuna di esse risponde a una logica precisa:
          distribuzione dei macronutrienti, selezione degli alimenti, gestione
          dei tempi di assunzione o esclusione di specifiche categorie.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Nel tempo, molte di queste diete sono state semplificate,
          reinterpretate o trasformate in mode, spesso applicate fuori dal loro
          contesto originario. Seguire un modello alimentare senza comprenderne
          i principi può portare a risultati temporanei, frustrazione o
          squilibri, soprattutto quando viene adottato come soluzione
          universale.
        </p>

        <p style={{ marginTop: "1rem" }}>
          È importante ricordare che{" "}
          <strong>nessuna dieta è valida per tutti</strong>. Ogni organismo
          risponde in modo diverso in base a genetica, stile di vita, livello di
          attività fisica, età e stato di salute. Ciò che funziona per una
          persona può risultare inefficace o inadatto per un’altra.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, le diete non vengono presentate come
          soluzioni rigide o definitive, ma come{" "}
          <strong>modelli di riferimento</strong>. Comprenderne la struttura
          aiuta a sviluppare spirito critico, consapevolezza e capacità di
          adattamento, elementi fondamentali per costruire un rapporto
          equilibrato e duraturo con l’alimentazione.
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
