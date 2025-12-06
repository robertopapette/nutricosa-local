import React from "react";
import PageContainer from "../components/PageContainer";

export default function Donazione() {
  return (
    <PageContainer
      titolo="Sostieni il progetto"
      sottotitolo="Il tuo contributo aiuta a mantenere viva la conoscenza libera"
    >
      <p style={{ textAlign: "center" }}>
        Grazie di cuore per ogni gesto di supporto 🌿  
        Le donazioni permettono di mantenere il progetto accessibile e in crescita.
      </p>
    </PageContainer>
  );
}
