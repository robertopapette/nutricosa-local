import React from "react";
import PageContainer from "../components/PageContainer";

export default function Abbonamenti() {
  return (
    <PageContainer
      titolo="Abbonamenti"
      sottotitolo="Confronta i piani Free, Plus e Pro"
    >
      <p style={{ textAlign: "center" }}>
        Qui potrai vedere i vantaggi di ogni versione e scegliere quella più adatta alle tue esigenze.
      </p>
    </PageContainer>
  );
}
