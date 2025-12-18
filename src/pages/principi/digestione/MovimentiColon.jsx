import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";

export default function MovimentiColon() {
  const navigate = useNavigate();

/*
const tornaIndietro = () => {
  navigate("/principi", {
    state: { returnTo: "Movimenti colon" },
  });
};
*/
  const tornaIndietro = () => {
    navigate("/principi/digestione", { 
      state: { returnTo: "Movimenti colon" }, 
   });
  };

  return (
    <PageContainer
      titolo="Movimenti del colon"
      sottotitolo="Assorbimento dell’acqua e avanzamento del contenuto fecale"
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
          I movimenti del colon sono fondamentali per la formazione e lo
          spostamento delle feci. Il colon effettua contrazioni lente e ritmiche,
          dette movimenti di rimescolamento, che permettono l’assorbimento di acqua
          ed elettroliti. Questo processo contribuisce a rendere il contenuto
          intestinale sempre più compatto.
        </p>

        <p>
          Oltre ai movimenti lenti, esistono le contrazioni propulsive, chiamate
          movimenti di massa, che avanzano grandi porzioni di contenuto fecale verso
          il retto. Il corretto equilibrio di questi movimenti garantisce regolarità
          intestinale e prevenzione di stasi o transito eccessivamente rapido.
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
