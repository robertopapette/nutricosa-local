import React from "react";
import PageContainer from "../components/PageContainer";
import { theme } from "../theme";

export default function Consigli() {
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
            boxShadow: "none",
          }}
        >
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "1rem",
              color: theme.colori.accento,
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
            }}
          >
            💡 Consigli e suggerimenti
          </h1>

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
            In <strong>NutriCoSa</strong> –{" "}
            <em>Nutrizione Consapevole Salutare</em> – ogni consiglio è pensato
            per accompagnarti nel tuo percorso di crescita personale.  
            Qui troverai presto spunti pratici, riflessioni motivazionali e
            suggerimenti semplici per migliorare le tue abitudini alimentari,
            fisiche e mentali.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.7",
              marginTop: "1rem",
              color: "#2c2c2c",
            }}
          >
            L’obiettivo è ispirarti ogni giorno a piccoli cambiamenti sostenibili,
            perché il vero progresso nasce dalla costanza e dall’ascolto di sé.
          </p>

          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginTop: "2rem",
              color: theme.colori.secondario,
            }}
          >
            “Ogni piccolo passo è un grande passo verso il cambiamento.”
          </h2>

          <p
            style={{
              fontStyle: "italic",
              marginTop: "1.2rem",
              fontSize: "1rem",
              color: "#444",
            }}
          >
            La motivazione è la scintilla che accende il percorso della
            consapevolezza e dell’equilibrio.
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
              ⚠️ <strong>Nota:</strong> I contenuti presenti in questa sezione
              hanno esclusivamente scopo informativo e non sostituiscono il
              parere di un medico o di un nutrizionista qualificato.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
