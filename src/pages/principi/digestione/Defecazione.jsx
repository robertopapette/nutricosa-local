import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";

export default function Defecazione() {
  const navigate = useNavigate();

/*
const tornaIndietro = () => {
  navigate("/principi", {
    state: { returnTo: "Defecazione" },
  });
};
*/
  const tornaIndietro = () => {
    navigate("/principi/digestione", { 
      state: { returnTo: "Defecazione" }, 
   });
  };

  return (
    <PageContainer
      titolo="Defecazione"
      sottotitolo="L’atto finale dell’eliminazione delle scorie"
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
          La defecazione è il processo attraverso cui l’organismo elimina le
          sostanze di scarto residue dalla digestione. Questo atto è controllato da
          meccanismi involontari e volontari: il riempimento del retto attiva il
          riflesso della defecazione, mentre gli sfinteri anali permettono di
          gestire il momento dell’espulsione.
        </p>

        <p>
          Una regolare funzione intestinale dipende da fattori come motilità,
          idratazione, presenza di fibre alimentari e buona salute del microbiota.
          Alterazioni di questo processo possono manifestarsi come stitichezza,
          evacuazione incompleta o urgenza intestinale.
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
