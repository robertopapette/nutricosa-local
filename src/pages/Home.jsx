import React from "react";
import PageContainer from "../components/PageContainer";
import { theme } from "../theme";

export default function Home() {
  return (
    <PageContainer>
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
          backgroundColor: "#f7f5f2",
          color: "#1c1c1c",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            textAlign: "center",
            padding: "2rem",
            borderRadius: 0,
            boxShadow: "none",
          }}
        >
          <h1
            className="responsive-title"
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: theme.colori.accento,
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            Nutrition Spiral
          </h1>
          <h2
            className="responsive-subtitle"
            style={{
              fontSize: "1.1rem",
              color: theme.colori.secondario,
              marginBottom: "1.5rem",
              letterSpacing: "0.5px",
            }}
          >
            La Spirale della nutrizione
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
            Benvenuto in <strong>Nutrition Spiral</strong>, un progetto dedicato alla
            comprensione profonda della nutrizione come percorso di equilibrio,
            consapevolezza e adattamento personale.
          </p>

          <p>
            Qui il cibo non è visto come una regola rigida o una soluzione rapida,
            ma come parte di un sistema più ampio che coinvolge corpo, mente,
            movimento e stile di vita.
          </p>

          <p>
            Nutrition Spiral nasce per aiutarti a osservare, comprendere e migliorare
            le tue scelte quotidiane, valorizzando la conoscenza scientifica senza
            perdere il contatto con l’esperienza reale e individuale.
          </p>

          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: "600",
              marginTop: "2rem",
              color: theme.colori.secondario,
            }}
          >
            “La nutrizione è un percorso, non una scorciatoia.”
          </h3>

          <p
            style={{
              fontStyle: "italic",
              marginTop: "1.2rem",
              fontSize: "1rem",
              color: "#444",
            }}
          >
            La vera consapevolezza nasce quando impari ad ascoltare il tuo corpo,
            leggere i segnali e intervenire con equilibrio, nel tempo.
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
              ⚠️ <strong>Disclaimer medico:</strong> Le informazioni presenti in questo
              sito hanno esclusivamente scopo divulgativo e non sostituiscono il
              consulto di medici, nutrizionisti o altri professionisti della salute.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
