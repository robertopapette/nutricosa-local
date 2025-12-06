import React from "react";
import PageContainer from "../components/PageContainer";

export default function MappaSito() {
  return (
    <PageContainer
      titolo="Mappa del sito"
      sottotitolo="Naviga facilmente tra tutte le sezioni"
    >
      <p style={{ textAlign: "center" }}>
        Qui troverai una panoramica completa delle sezioni del sito per accedere rapidamente a ogni contenuto.
      </p>
    </PageContainer>
  );
}
