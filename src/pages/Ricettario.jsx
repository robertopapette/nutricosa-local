import React from "react";
import PageContainer from "../components/PageContainer";
import { theme } from "../theme";

export default function Ricettario() {
  return (
    <PageContainer titolo="🥗 Ricettario">
      <div
        style={{
          width: "100%",
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem 1rem",
          boxSizing: "border-box",
          backgroundColor: "#f7f5f2", // stesso sfondo della Home
          color: "#1c1c1c",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            textAlign: "center",
            padding: "2rem",
            borderRadius: "0",
            boxShadow: "none",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: theme.colori.accento, // coerente col tema
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            Ricettario
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.7",
              marginBottom: "1.5rem",
              maxWidth: "800px",
              margin: "0 auto",
              color: "#2c2c2c",
            }}
          >
            Ricette bilanciate e nutrienti, con attenzione a intolleranze,
            qualità e combinazioni ottimali tra alimenti.  
            A breve potrai filtrare e salvare le tue preferite.
          </p>

          <h3
            style={{
              fontSize: "1.3rem",
              fontWeight: "600",
              marginTop: "2rem",
              color: theme.colori.secondario,
            }}
          >
            “Il piacere del cibo consapevole.”
          </h3>

          <p
            style={{
              fontStyle: "italic",
              marginTop: "1.2rem",
              fontSize: "1rem",
              color: "#444",
            }}
          >
            Ogni piatto racconta una scelta, ogni scelta costruisce il tuo
            benessere.
          </p>

          <div
            style={{
              marginTop: "3rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(0,0,0,0.1)",
              color: "#555",
              fontSize: "0.9rem",
            }}
          >
            <p>
              ⚠️ <strong>Nota:</strong> Tutte le ricette sono pensate per
              l’educazione alimentare e non sostituiscono il parere del medico
              o del nutrizionista.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
