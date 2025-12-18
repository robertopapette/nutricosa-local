import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";

export default function SuccoPancreatico() {
  const navigate = useNavigate();

/*
const tornaIndietro = () => {
  navigate("/principi", {
    state: { returnTo: "Succo pancreatico" },
  });
};
*/
  const tornaIndietro = () => {
    navigate("/principi/digestione", { 
      state: { returnTo: "Succo pancreatico" }, 
   });
  };

  return (
    <PageContainer
      titolo="Succo pancreatico"
      sottotitolo="Gli enzimi che completano la digestione"
    >
      <button
        onClick={tornaIndietro}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "none",
          border: "none",
          color: "#000000ff",
          cursor: "pointer",
          fontSize: "0.95rem",
          fontWeight: "500",
          marginBottom: "1rem",
          padding: "4px 0",
        }}
      >
        ← Torna indietro
      </button>

      <div style={stileBox}>
        <p>
          Il succo pancreatico è un liquido ricco di enzimi prodotti dal pancreas
          e riversati nell’intestino tenue. Contiene tre categorie principali di
          enzimi: amilasi per la digestione dei carboidrati, lipasi per la
          scomposizione dei grassi e proteasi (come tripsina e chimotripsina) per
          la digestione delle proteine.
        </p>

        <p>
          Questo succo è fondamentale perché completa gran parte della digestione
          chimica, riducendo i nutrienti in molecole semplici assorbibili. La sua
          secrezione è regolata dagli ormoni intestinali e si attiva subito dopo il
          passaggio del chimo acido dallo stomaco. Un pancreas efficiente è
          indispensabile per un assorbimento ottimale dei nutrienti.
        </p>
      </div>
    </PageContainer>
  );
}

const stileBox = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "1.5rem",
  background: "rgba(255,255,255,0.9)",
  borderRadius: "12px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  color: "#222",
  lineHeight: 1.7,
};
