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
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
              color: theme.colori.accento,
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            NutriCoSa
          </h1>
          <h2
            style={{
              fontSize: "1.1rem",
              color: theme.colori.secondario,
              marginBottom: "1.5rem",
              letterSpacing: "0.5px",
            }}
          >
            Nutrizione Consapevole Salutare
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
            Benvenuto in <strong>NutriCoSa</strong>, il progetto che unisce scienza,
            esperienza e consapevolezza per aiutarti a vivere in modo più sano,
            equilibrato e felice.  
            Qui impari ad ascoltare il tuo corpo, a comprendere il valore
            del cibo e a migliorare ogni giorno attraverso scelte consapevoli.
          </p>

          <h3
            style={{
              fontSize: "1.4rem",
              fontWeight: "600",
              marginTop: "2rem",
              color: theme.colori.secondario,
            }}
          >
            “Trasforma ciò che mangi in energia, equilibrio e consapevolezza.”
          </h3>

          <p
            style={{
              fontStyle: "italic",
              marginTop: "1.2rem",
              fontSize: "1rem",
              color: "#444",
            }}
          >
            La vera nutrizione non inizia nel piatto, ma nella mente.
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
              sito hanno esclusivamente scopo divulgativo e non sostituiscono
              il consulto di medici, dietologi o altri professionisti della salute.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
