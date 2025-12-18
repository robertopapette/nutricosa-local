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
          In <strong>Nutrition Spiral</strong>, l’obiettivo non è inseguire la
          perfezione, ma costruire nel tempo un equilibrio reale e personale.
          Ogni scelta quotidiana, anche la più piccola, contribuisce a definire
          il tuo percorso di benessere.
        </p>

        <p style={{ marginTop: "1rem" }}>
        Questo progetto nasce per accompagnarti nella comprensione del tuo
        corpo e delle tue abitudini, unendo conoscenza scientifica, ascolto di
        sé e rispetto dei propri tempi.
        <br />
        Non esistono scorciatoie: esistono direzioni consapevoli.
        </p>

        <h3
          style={{
            fontSize: "1.4rem",
            fontWeight: "600",
            marginTop: "2rem",
            color: theme.colori.secondario,
          }}
       >
        “L’equilibrio non si raggiunge, si coltiva.”
       </h3>

        <p
        style={{
          fontStyle: "italic",
          marginTop: "1.2rem",
          fontSize: "1rem",
          color: "#444",
        }}
       >
         Procedi con calma, osserva, adatta e cresci: ogni passo fatto con
         consapevolezza ha valore.
        </p>
      </div>
    </PageContainer>
  );
}
