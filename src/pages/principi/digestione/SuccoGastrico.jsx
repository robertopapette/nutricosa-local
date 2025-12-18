import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";

export default function SuccoGastrico() {
  const navigate = useNavigate();

/*
const tornaIndietro = () => {
  navigate("/principi", {
    state: { returnTo: "Succo gastrico" },
  });
};
*/
  const tornaIndietro = () => {
    navigate("/principi/digestione", { 
      state: { returnTo: "Succo gastrico" }, 
   });
  };

  return (
    <PageContainer titolo="Succo gastrico" sottotitolo="La digestione delle proteine inizia qui">

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
          Il succo gastrico è una miscela altamente acida prodotta dalle ghiandole
          dello stomaco, composta principalmente da acido cloridrico (HCl), pepsina
          e muco protettivo. La sua funzione principale è avviare la digestione
          delle proteine, trasformandole in catene più semplici grazie all’azione
          della pepsina.
        </p>

        <p>
          L’acidità del succo gastrico svolge anche un ruolo di difesa,
          neutralizzando la maggior parte dei microrganismi introdotti con il cibo.
          Il muco gastrico, invece, protegge le pareti dello stomaco dall’ambiente
          acido, prevenendo danni o ulcere. Una produzione equilibrata di succo
          gastrico è fondamentale per una digestione efficiente e sicura.
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
