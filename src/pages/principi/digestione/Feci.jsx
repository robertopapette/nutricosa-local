import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";

export default function Feci() {
  const navigate = useNavigate();

/*
const tornaIndietro = () => {
  navigate("/principi", {
    state: { returnTo: "Feci" },
  });
};
*/
  const tornaIndietro = () => {
    navigate("/principi/digestione", { 
      state: { returnTo: "Feci" }, 
   });
  };

  return (
    <PageContainer
      titolo="Feci"
      sottotitolo="Il risultato finale del processo digestivo"
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
          Le feci rappresentano il prodotto finale della digestione e sono composte
          da acqua, fibre non digerite, batteri, cellule epiteliali e residui dei
          processi metabolici. La loro consistenza, colore e forma riflettono lo
          stato di salute dell’apparato gastrointestinale e dell’alimentazione.
        </p>

        <p>
          La quantità e qualità delle feci dipendono da idratazione, assunzione di
          fibre, motilità del colon e equilibrio del microbiota. Analizzare le feci
          fornisce indicazioni utili su digestione, assorbimento e salute
          intestinale. Una regolarità fisiologica è un segnale importante di
          benessere generale.
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
