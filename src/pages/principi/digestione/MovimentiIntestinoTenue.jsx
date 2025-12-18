import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";

export default function MovimentiIntestinoTenue() {
  const navigate = useNavigate();

/*
const tornaIndietro = () => {
  navigate("/principi", {
    state: { returnTo: "Movimenti intestino tenue" },
  });
};
*/
  const tornaIndietro = () => {
    navigate("/principi/digestione", { 
      state: { returnTo: "Movimenti intestino tenue" }, 
   });
  };

  return (
    <PageContainer
      titolo="Movimenti dell’intestino tenue"
      sottotitolo="Propulsione, mescolamento e assorbimento"
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
          L’intestino tenue svolge un ruolo fondamentale nella digestione e
          nell’assorbimento dei nutrienti. I suoi movimenti, detti
          segmentazioni e peristalsi, hanno due funzioni principali:
          mescolare il chimo con enzimi e bile, e farlo avanzare lungo il
          tratto intestinale.
        </p>

        <p>
          Le segmentazioni frammentano il contenuto intestinale, migliorando il
          contatto con i villi responsabili dell’assorbimento. La peristalsi,
          invece, produce un movimento direzionale che spinge il chimo verso il
          colon. Un equilibrio armonioso tra questi movimenti garantisce digeribilità,
          corretto assorbimento e tempi di transito regolari.
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
