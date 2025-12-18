import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";

export default function SecrezioneColon() {
  const navigate = useNavigate();

/*
const tornaIndietro = () => {
  navigate("/principi", {
    state: { returnTo: "Secrezione colon" },
  });
};
*/
  const tornaIndietro = () => {
    navigate("/principi/digestione", { 
      state: { returnTo: "Secrezione colon" }, 
   });
  };

  return (
    <PageContainer
      titolo="Secrezione del colon"
      sottotitolo="Protezione, lubrificazione e equilibrio dell’ambiente interno"
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
          La secrezione del colon è composta principalmente da muco, una sostanza
          vischiosa che lubrifica il contenuto intestinale e protegge la parete
          interna da attriti e irritazioni. Questo muco facilita il transito delle
          feci e contribuisce al mantenimento dell’integrità della mucosa.
        </p>

        <p>
          Il colon ha anche un ruolo chiave nella regolazione dell’equilibrio idrico:
          assorbe acqua e sali minerali, determinando la consistenza finale delle
          feci. Una produzione alterata di muco o un assorbimento anomalo possono
          causare disturbi come stitichezza, diarrea o irritazione della mucosa.
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
