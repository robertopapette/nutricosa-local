import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import { theme } from "../theme";

export default function PrincipiNutrizione() {
  const navigate = useNavigate();
  const [mostraDigestione, setMostraDigestione] = useState(false);

  const sezioni = [
    { nome: "Premessa", path: "/principi/premessa" },
    { nome: "Proteine", path: "/principi/proteine" },
    { nome: "Glucidi", path: "/principi/glucidi" },
    { nome: "Lipidi", path: "/principi/lipidi" },
    { nome: "Vitamine", path: "/principi/vitamine" },
    { nome: "Minerali", path: "/principi/minerali" },
    { nome: "Acqua", path: "/principi/acqua" },
    { nome: "Digestione", path: "digestione" }, // gestita a parte
    { nome: "Alcool (calorie fantasma)", path: "/principi/alcool" },
    { nome: "Dolci", path: "/principi/dolci" },
  ];

  const sottoDigestione = [
    "Masticazione",
    "Saliva",
    "Deglutizione",
    "Succo gastrico",
    "Movimenti stomaco",
    "Controllo motilita",
    "Succo pancreatico",
    "Bile",
    "Succo intestinale",
    "Movimenti intestino tenue",
    "Batteri intestinali",
    "Secrezione colon",
    "Movimenti colon",
    "Defecazione",
    "Feci",
  ];

  const handleClick = (s) => {
    if (s.path === "digestione") {
      setMostraDigestione(!mostraDigestione);
    } else {
      navigate(s.path);
    }
  };

  return (
    <PageContainer
      titolo="🥦 I principi della nutrizione consapevole"
      sottotitolo="Le basi scientifiche e pratiche di NutriCoSa – Nutrizione Consapevole Salutare"
    >
      <div
        style={{
          maxWidth: "950px",
          margin: "2rem auto",
          padding: "1.5rem",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "12px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          color: "#222",
          lineHeight: 1.7,
        }}
      >
        <h2
          style={{
            fontWeight: 700,
            marginBottom: "1rem",
            color: theme.colori.accento,
          }}
        >
          La filosofia NutriCoSa
        </h2>

        <p style={{ marginBottom: "1rem" }}>
          <strong>NutriCoSa</strong> – <em>Nutrizione Consapevole Salutare</em> – nasce
          con l’obiettivo di diffondere conoscenza e consapevolezza attraverso
          un approccio chiaro, scientifico e accessibile a tutti.
        </p>

        <p style={{ marginBottom: "1.5rem" }}>
          Comprendere il funzionamento del corpo e dei nutrienti significa
          imparare a nutrirsi con intelligenza, rispettando i propri ritmi
          biologici e le proprie necessità.  
          Ogni sezione di questa area ti accompagnerà passo dopo passo alla
          scoperta di ciò che rende l’alimentazione uno strumento di benessere
          e di equilibrio.
        </p>

        {/* === Griglia pulsanti principali === */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "0.8rem",
            marginTop: "1rem",
          }}
        >
          {sezioni.map((s) => (
            <button
              key={s.nome}
              onClick={() => handleClick(s)}
              style={{
                background: "rgba(0,0,0,0.05)",
                border: `1px solid ${theme.colori.accento}`,
                borderRadius: "8px",
                padding: "0.8rem 1rem",
                cursor: "pointer",
                fontWeight: 600,
                color: "#222",
                textAlign: "left",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "rgba(34,197,94,0.15)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = "rgba(0,0,0,0.05)")
              }
            >
              {s.nome}
            </button>
          ))}
        </div>

        {/* === Sotto-griglia Digestione === */}
        <div
          style={{
            overflow: "hidden",
            maxHeight: mostraDigestione ? "800px" : "0",
            transition: "max-height 0.5s ease",
            marginTop: mostraDigestione ? "1rem" : "0",
          }}
        >
          {mostraDigestione && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                gap: "0.6rem",
                marginTop: "0.5rem",
                paddingLeft: "1rem",
              }}
            >
              {sottoDigestione.map((sotto) => (
                <button
                  key={sotto}
                  onClick={() =>
                    navigate(
                      `/principi/digestione/${sotto
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                    )
                  }
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(0,0,0,0.2)",
                    borderRadius: "6px",
                    padding: "0.6rem",
                    textAlign: "left",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(201,180,0,0.15)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background =
                      "rgba(255,255,255,0.6)")
                  }
                >
                  {sotto}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* === Frase finale + disclaimer === */}
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <p style={{ fontWeight: 600, fontStyle: "italic" }}>
            “La conoscenza è il primo ingrediente della salute.”
          </p>
          <p
            style={{
              marginTop: "0.6rem",
              fontSize: "0.9rem",
              fontStyle: "italic",
              color: "#333",
            }}
          >
            ⚠️ Le informazioni presenti sono a scopo divulgativo e non sostituiscono
            il parere di un medico o di un nutrizionista qualificato.
          </p>
        </div>
      </div>
    </PageContainer>
  );
}
