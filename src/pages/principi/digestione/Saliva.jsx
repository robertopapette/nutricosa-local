import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";

export default function Saliva() {
  const navigate = useNavigate();

/*
const tornaIndietro = () => {
  navigate("/principi", {
    state: { returnTo: "Saliva" },
  });
};
*/
  const tornaIndietro = () => {
    navigate("/principi/digestione", { 
      state: { returnTo: "Saliva" }, 
   });
  };

  return (
    <PageContainer titolo="Saliva" sottotitolo="Il fluido che dà inizio alla digestione">
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
          La saliva è un fluido prodotto dalle ghiandole salivari e svolge un ruolo
          essenziale nella digestione. Oltre a lubrificare il cibo per facilitarne
          la deglutizione, contiene enzimi — come l’amilasi salivare — che avviano
          la scomposizione chimica dei carboidrati complessi.
        </p>

        <p>
          La saliva ha anche funzioni protettive: neutralizza gli acidi, difende da
          batteri e microrganismi, mantiene il cavo orale idratato e preserva lo
          smalto dentale. Una secrezione salivare adeguata migliora la digeribilità
          e contribuisce alla salute generale dell’apparato digestivo.
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
