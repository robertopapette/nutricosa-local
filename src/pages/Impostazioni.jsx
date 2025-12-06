import React from "react";
import PageContainer from "../components/PageContainer";

export default function Impostazioni() {
  return (
    <PageContainer
      titolo="Impostazioni"
      sottotitolo="Gestisci preferenze, privacy e accessibilità"
    >
      <p style={{ textAlign: "center" }}>
        Qui potrai regolare le impostazioni del sito, la lingua, la privacy e i suoni ambientali.
      </p>
    </PageContainer>
  );
}
