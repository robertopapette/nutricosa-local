import React from "react";
import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Premessa() {
  return (
    <PageContainer titolo="Premessa" sottotitolo="Introduzione ai principi della nutrizione consapevole">
      {/* 🔙 Bottone indietro */}
      <BottoneIndietro
        path="/principi-nutrizione"
        testo="Torna indietro"
      />
      <div
        style={{
          maxWidth: "900px",
          margin: "2rem auto",
          padding: "1.5rem",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          color: "#222",
          lineHeight: 1.7,
        }}
      >
        <p>
          Questa sezione introduce i concetti fondamentali che guideranno tutto
          il percorso della nutrizione consapevole. Lo scopo è fornire una base
          di conoscenza semplice ma scientificamente corretta, per comprendere
          come ogni alimento influenzi il corpo e la mente.
        </p>

        <p style={{ marginTop: "1rem" }}>
          La nutrizione non è solo una questione di calorie, ma di equilibrio
          biochimico, qualità dei nutrienti e ascolto dei propri bisogni. In
          queste pagine scoprirai come rendere ogni scelta alimentare parte di
          un percorso di salute duraturo.
        </p>
      </div>
    </PageContainer>
  );
}
