import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";

export default function MovimentiStomaco() {
  const navigate = useNavigate();

/*
const tornaIndietro = () => {
  navigate("/principi", {
    state: { returnTo: "Movimenti stomaco" },
  });
};
*/
  const tornaIndietro = () => {
    navigate("/principi/digestione", { 
      state: { returnTo: "Movimenti stomaco" }, 
   });
  };

  return (
    <PageContainer
      titolo="Movimenti dello stomaco"
      sottotitolo="Mescolamento, triturazione e avanzamento del bolo"
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
          I movimenti dello stomaco, chiamati movimenti peristaltici e di
          mescolamento, hanno il compito di trasformare il bolo alimentare in
          chimo, una sostanza semiliquida più facile da digerire. Queste
          contrazioni ritmiche frantumano il cibo e lo mescolano con il succo
          gastrico, permettendo agli enzimi di agire in modo uniforme.
        </p>

        <p>
          Lo stomaco regola inoltre lo svuotamento verso l’intestino tenue tramite
          il piloro, che si apre gradualmente per evitare un passaggio troppo
          rapido del chimo. Una motilità gastrica equilibrata è essenziale per una
          digestione fluida, prevenendo stagnazioni o svuotamenti prematuri.
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
