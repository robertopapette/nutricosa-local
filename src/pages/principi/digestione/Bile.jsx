import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";

export default function Bile() {
  const navigate = useNavigate();

/*
const tornaIndietro = () => {
  navigate("/principi", {
    state: { returnTo: "Bile" },
  });
};
*/
  const tornaIndietro = () => {
    navigate("/principi/digestione", { 
      state: { returnTo: "Bile" }, 
   });
  };

  return (
    <PageContainer titolo="Bile" sottotitolo="L’emulsionante naturale dei grassi">


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
          La bile è un fluido prodotto dal fegato e immagazzinato nella
          cistifellea. Non contiene enzimi digestivi, ma svolge un ruolo
          indispensabile: emulsionare i grassi alimentari, cioè suddividerli in
          minuscole goccioline per aumentare la superficie di contatto con la
          lipasi pancreatica.
        </p>

        <p>
          Grazie alla bile, la digestione dei lipidi diventa molto più efficiente.
          Inoltre, la bile favorisce l'assorbimento delle vitamine liposolubili
          (A, D, E, K) e contribuisce all'eliminazione di sostanze di scarto, come
          bilirubina e colesterolo. Il corretto flusso biliare è essenziale per una
          digestione equilibrata e per il benessere epatobiliare.
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
