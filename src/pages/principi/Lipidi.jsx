import React from "react";
import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Lipidi() {
  return (
    <PageContainer titolo="Proteine" sottotitolo="Il mattone fondamentale del corpo umano">
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
          Sezione introduttiva sulle proteine. Contenuti in sviluppo.
        </p>
      </div>
    </PageContainer>
  );
}
