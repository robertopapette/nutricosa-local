import React from "react";
import PageContainer from "../components/PageContainer";

export default function Notifiche() {
  return (
    <PageContainer
      titolo="Notifiche"
      sottotitolo="Storico messaggi e preferenze utente"
    >
      <p style={{ textAlign: "center" }}>
        Visualizza le notifiche più recenti e gestisci le tue preferenze di avviso.
      </p>
    </PageContainer>
  );
}
