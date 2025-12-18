import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";

export default function ControlloMotilita() {
  const navigate = useNavigate();

/*
const tornaIndietro = () => {
  navigate("/principi", {
    state: { returnTo: "controllo motilita" },
  });
};
*/
  const tornaIndietro = () => {
    navigate("/principi/digestione", { 
      state: { returnTo: "Controllo motilita" }, 
   });
  };

  return (
    <PageContainer
      titolo="Controllo della motilità"
      sottotitolo="Il coordinamento dei movimenti dell’apparato digerente"
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
          La motilità gastrointestinale è l’insieme dei movimenti muscolari che
          permettono al cibo di avanzare lungo l’apparato digerente. È regolata da
          un complesso sistema di coordinazione che coinvolge il sistema nervoso
          enterico, ormoni digestivi e segnali provenienti dal sistema nervoso
          centrale.
        </p>

        <p>
          Una motilità ben regolata garantisce tempi di transito adeguati,
          mescolamento efficiente e corretto assorbimento dei nutrienti. Alterazioni
          della motilità possono portare a disturbi come reflusso, rallentamento
          digestivo, crampi o transito accelerato. Il suo equilibrio è fondamentale
          per una digestione armoniosa.
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
