import React from "react";
import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Massa() {
  return (
    <PageContainer titolo="💪 Supplementi per la Massa Muscolare" sottotitolo="Costruire forza e recupero">
      <div
        style={{
          maxWidth: "800px",
          margin: "2rem auto",
          padding: "1.5rem",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "12px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          color: "#222",
          lineHeight: 1.7,
        }}
      >
        <BottoneIndietro path="/supplementi" testo="Torna ai gruppi" />
        <p style={{ marginTop: "1rem" }}>
          Sezione in costruzione – presto disponibile.
        </p>
      </div>
    </PageContainer>
  );
}
