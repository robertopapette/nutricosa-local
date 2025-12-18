import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";

export default function SuccoIntestinale() {
  const navigate = useNavigate();

/*
const tornaIndietro = () => {
  navigate("/principi", {
    state: { returnTo: "Succo intestinale" },
  });
};
*/
  const tornaIndietro = () => {
    navigate("/principi/digestione", { 
      state: { returnTo: "Succo intestinale" }, 
   });
  };

  return (
    <PageContainer titolo="Succo intestinale" sottotitolo="L’ultimo passo della digestione enzimatica">

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
          Il succo intestinale è prodotto dalle ghiandole della mucosa
          dell’intestino tenue e contiene una varietà di enzimi che completano la
          digestione di carboidrati, proteine e lipidi. Questo fluido lavora in
          sinergia con il succo pancreatico e con la bile, terminando la
          scomposizione dei nutrienti in forme semplici assorbibili dai villi
          intestinali.
        </p>

        <p>
          Oltre agli enzimi, il succo intestinale contiene muco e bicarbonato,
          utili a proteggere la mucosa e neutralizzare l’acidità residua del chimo.
          Una produzione adeguata di questo succo è essenziale per un assorbimento
          efficiente e per la salute della parete intestinale.
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
