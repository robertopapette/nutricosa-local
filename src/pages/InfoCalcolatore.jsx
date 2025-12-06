import React from "react";
import PageContainer from "../components/PageContainer";
import { theme } from "../theme";

export default function InfoCalcolatore() {
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
            ℹ️ Informazioni sul calcolatore
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
            Questa sezione spiega le logiche, i parametri e le formule che
            alimentano il calcolatore di <strong>NutriCoSa</strong> –{" "}
            <em>Nutrizione Consapevole Salutare</em>.  
            Scoprirai come vengono calcolati i fabbisogni energetici, la
            distribuzione dei macronutrienti e l’impatto che ogni alimento
            esercita sull’equilibrio del tuo organismo.
          </p>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: "1.7",
              marginTop: "1rem",
              color: "#2c2c2c",
            }}
          >
            L’obiettivo di <strong>NutriCoSa</strong> è fornirti strumenti chiari,
            trasparenti e scientificamente fondati per interpretare i numeri del
            tuo corpo e tradurli in azioni quotidiane più consapevoli.
          </p>

          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginTop: "2rem",
              color: theme.colori.secondario,
            }}
          >
            “Comprendere i numeri per migliorare la qualità della vita.”
          </h2>

          <p
            style={{
              fontStyle: "italic",
              marginTop: "1.2rem",
              fontSize: "1rem",
              color: "#444",
            }}
          >
            La conoscenza è potere, soprattutto quando nasce dall’ascolto del
            proprio corpo.
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
              ⚠️ <strong>Nota:</strong> Le informazioni presenti sono a scopo
              educativo e divulgativo. Non sostituiscono in alcun modo il parere
              di medici, nutrizionisti o altri professionisti della salute.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
