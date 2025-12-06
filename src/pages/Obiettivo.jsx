import React from "react";
import PageContainer from "../components/PageContainer";
import { theme } from "../theme";

export default function Obiettivo() {
  return (
    <PageContainer
      titolo="🎯 Obiettivo"
      sottotitolo="Il tuo percorso verso l’equilibrio consapevole"
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "2rem auto",
          padding: "1.5rem",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          color: "#222",
          lineHeight: 1.7,
          textAlign: "center",
        }}
      >
        <p>
          In <strong>NutriCoSa</strong> – <em>Nutrizione Consapevole Salutare</em>,
          l’obiettivo non è la perfezione, ma la crescita personale continua.
          Ogni scelta, ogni passo e ogni piccolo miglioramento contribuiscono
          al tuo equilibrio fisico e mentale.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Il nostro percorso unisce conoscenza scientifica, ascolto di sé e
          rispetto per il proprio corpo.  
          Non esistono risultati immediati: esistono abitudini che, nel tempo,
          trasformano la tua vita.
        </p>

        <h3
          style={{
            fontSize: "1.4rem",
            fontWeight: "600",
            marginTop: "2rem",
            color: theme.colori.secondario,
          }}
        >
          “Ogni passo che fai oggi è un investimento nel tuo domani.”
        </h3>

        <p
          style={{
            fontStyle: "italic",
            marginTop: "1.2rem",
            fontSize: "1rem",
            color: "#444",
          }}
        >
          Cammina con costanza, nutri la mente e il corpo, e ritroverai la tua
          armonia.
        </p>
      </div>
    </PageContainer>
  );
}
