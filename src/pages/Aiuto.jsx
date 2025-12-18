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
          Come rilevare le misure manualmente 
        </h2>
        <p>
          - Usa un metro da sarta.
          - Effettua sempre la misura nello stesso punto (es. circonferenza addome: zona ombelico).
          - I muscoli vanno lasciati rilassati.
          - Non serve estrema precisione: la cosa importante è la costanza.
          - Le misurazioni aiutano a monitorare i progressi e la % di massa grassa.

        </p>

        <p style={{ marginTop: "1rem" }}>
          Suggerimento: prendi le misure al mattino, a digiuno, sempre nelle stesse condizioni.
        </p>
          
        <p style={{ marginTop: "1rem" }}>
          Ogni volta che salvi un aggiornamento, i tuoi progressi vengono registrati nel profilo attivo, così
          potrai monitorare il tuo percorso nel tempo attraverso lo storico e, presto, anche con un grafico dedicato. 📊
        </p>
      </div>
    </PageContainer>
  );
}
