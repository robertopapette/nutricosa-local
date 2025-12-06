import React from "react";
import PageContainer from "../components/PageContainer";
import BottoneIndietro from "../components/BottoneIndietro";

export default function Aiuto() {
  return (
    <PageContainer
      titolo="🆘 Aiuto e guida"
      sottotitolo="Trova risposte e indicazioni rapide"
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "2rem auto",
          padding: "1.5rem",
          background: "#fff",
          border: "1px solid #000",
          borderRadius: "10px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
          color: "#222",
          lineHeight: 1.6,
        }}
      >
        {/* 🔹 Pulsante indietro — stile coerente con tutte le diete */}
        <BottoneIndietro path="/aggiorna-dati/inserisci" testo="Indietro" />

        <h2
          style={{
            fontSize: "1.3rem",
            fontWeight: "700",
            marginBottom: "1rem",
          }}
        >
          Come funziona questa sezione
        </h2>
        <p>
          In questa pagina troverai tutte le indicazioni per comprendere e utilizzare correttamente le funzioni
          disponibili nella sezione “Aggiorna i tuoi dati”.
          Potrai aggiornare il tuo peso, la circonferenza vita, coscia, braccio e la percentuale di massa grassa.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Ogni volta che salvi un aggiornamento, i tuoi progressi vengono registrati nel profilo attivo, così
          potrai monitorare il tuo percorso nel tempo attraverso lo storico e, presto, anche con un grafico dedicato. 📊
        </p>

        <p style={{ marginTop: "1rem" }}>
          Se hai dubbi o suggerimenti, contatta il supporto tecnico o lascia un feedback nella sezione “Consigli e
          suggerimenti”.
        </p>
      </div>
    </PageContainer>
  );
}
