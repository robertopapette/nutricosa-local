import React from "react";
import PageContainer from "../../../components/PageContainer";
import BottoneIndietro from "../../../components/BottoneIndietro";

export default function Masticazione() {
  return (
    <PageContainer titolo="Masticazione" sottotitolo="La prima fase della digestione">
      <BottoneIndietro />

      <div style={stileBox}>
        <p>Contenuti in sviluppo per la sezione Masticazione.</p>
      </div>
    </PageContainer>
  );
}

const stileBox = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "1.5rem",
  background: "rgba(255,255,255,0.9)",
  borderRadius: "12px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  color: "#222",
  lineHeight: 1.7,
};
