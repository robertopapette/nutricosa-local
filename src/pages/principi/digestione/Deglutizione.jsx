import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";

export default function Deglutizione() {
  const navigate = useNavigate();

/*
const tornaIndietro = () => {
  navigate("/principi", {
    state: { returnTo: "Deglutizione" },
  });
};
*/
  const tornaIndietro = () => {
    navigate("/principi/digestione", { 
      state: { returnTo: "Deglutizione" }, 
   });
  };

  return (
    <PageContainer titolo="Deglutizione" sottotitolo="Il passaggio del cibo verso lo stomaco">
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
          La deglutizione è il processo che consente al cibo masticato, ora
          trasformato in bolo, di passare dalla bocca allo stomaco attraverso la
          faringe e l’esofago. È un movimento complesso che coinvolge più di trenta
          muscoli e si svolge in tre fasi coordinate: orale, faringea ed esofagea.
        </p>

        <p>
          Durante la deglutizione, la chiusura dell’epiglottide impedisce al cibo di
          entrare nelle vie respiratorie, dirigendolo invece verso l’esofago. Questa
          fase rappresenta il passaggio tra la digestione meccanica iniziale e le
          successive fasi chimiche che avverranno nello stomaco. Una deglutizione
          efficiente garantisce sicurezza, fluidità e continuità al processo
          digestivo.
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
