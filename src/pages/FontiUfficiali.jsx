import React from "react";
import PageContainer from "../components/PageContainer";

export default function FontiUfficiali() {
  return (
    <PageContainer
      titolo="Fonti ufficiali"
      sottotitolo="Riferimenti scientifici e database di verifica"
    >
      <p style={{ textAlign: "center" }}>
        USDA • CREA • WHO • EFSA  
        Tutte le informazioni nutrizionali sono basate su fonti ufficiali e aggiornate.
      </p>
    </PageContainer>
  );
}
