import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";

export default function Masticazione() {
  const navigate = useNavigate();
/*
const tornaIndietro = () => {
  navigate("/principi", {
    state: { returnTo: "Masticazione" },
  });
};
*/
  const tornaIndietro = () => {
    navigate("/principi/digestione", { 
      state: { returnTo: "Masticazione" }, 
   });
  };

  return (
    <PageContainer
      titolo="Masticazione"
      sottotitolo="La prima fase del processo digestivo"
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
          La masticazione rappresenta il primo passo della digestione ed è la fase
          in cui il cibo viene frammentato meccanicamente dai denti e mescolato
          alla saliva. Questo processo riduce le dimensioni dei bocconi e aumenta
          la superficie di contatto, facilitando l’azione degli enzimi digestivi.
        </p>

        <p>
          Durante la masticazione, la saliva svolge un ruolo fondamentale iniziando
          la scomposizione dei carboidrati grazie all’amilasi salivare. Una buona
          masticazione migliora l’assorbimento dei nutrienti, riduce il carico
          digestivo e favorisce un senso di sazietà più stabile e profondo.
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
