import React from "react";
import { useNavigate } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";

export default function BatteriIntestinali() {
  const navigate = useNavigate();

/*
const tornaIndietro = () => {
  navigate("/principi", {
    state: { returnTo: "BatteriIntestinali" },
  });
};
*/
  const tornaIndietro = () => {
    navigate("/principi/digestione", { 
      state: { returnTo: "Batteri intestinali" }, 
   });
  };

  return (
    <PageContainer
      titolo="Batteri intestinali"
      sottotitolo="Un ecosistema fondamentale per la salute"
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
          I batteri intestinali, insieme ad altri microrganismi, formano il microbiota:
          una comunità essenziale per la digestione, il metabolismo e le difese
          immunitarie. Nel colon, questi microrganismi fermentano le fibre non
          digeribili, producendo acidi grassi a corta catena utili per la salute
          dell’intestino.
        </p>

        <p>
          Il microbiota contribuisce alla sintesi di vitamine (come K e gruppo B),
          protegge la mucosa intestinale, limita la proliferazione di batteri
          patogeni ed esercita un ruolo chiave nelle risposte immunitarie.
          L’equilibrio del microbiota è influenzato da dieta, stress, farmaci e
          attività fisica, ed è un pilastro della salute generale.
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
