import React from "react";
import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Energetici() {
  return (
    <PageContainer
      titolo="⚡ Supplementi Energetici"
      sottotitolo="Supporto temporaneo alla disponibilità energetica"
    >

        <BottoneIndietro
                path="/supplementi"
                state={{ returnTo: "Energetici" }}
                testo="Torna a Diete famose"
              />

        <p style={{ marginTop: "1.5rem" }}>
          I <strong>supplementi energetici</strong> comprendono tutte quelle
          sostanze utilizzate con l’obiettivo di aumentare, sostenere o rendere
          più rapidamente disponibile l’energia durante specifiche attività
          fisiche o mentali. Il loro utilizzo è particolarmente diffuso in ambito
          sportivo, ma spesso viene frainteso o generalizzato.
        </p>

        <p style={{ marginTop: "1rem" }}>
          L’energia non nasce dai supplementi, ma dal corretto funzionamento del
          metabolismo e dall’equilibrio tra alimentazione, riposo e attività.
          Gli energetici possono intervenire come supporto temporaneo in
          situazioni di aumentato dispendio, allenamenti intensi, competizioni o
          periodi di affaticamento, ma non sostituiscono una base nutrizionale
          adeguata.
        </p>

        <p style={{ marginTop: "1rem" }}>
          È importante comprendere che stimolare l’energia non significa crearla
          dal nulla. Un utilizzo eccessivo o non consapevole può mascherare
          segnali di stanchezza, sovraccarico o recupero insufficiente. Per
          questo motivo, la valutazione del contesto è fondamentale prima di
          ricorrere a questo tipo di supplementi.
        </p>

        <p style={{ marginTop: "1rem" }}>
          I supplementi energetici possono avere senso solo quando inseriti in
          una strategia più ampia che tenga conto delle reali necessità
          individuali, del tipo di attività svolta e dello stato generale
          dell’organismo. Usarli come scorciatoia porta spesso a risultati
          temporanei e a un peggioramento dell’equilibrio complessivo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, gli energetici vengono letti come
          strumenti di supporto mirato, non come soluzioni universali. La vera
          energia nasce da un corpo nutrito correttamente, allenato con
          intelligenza e rispettato nei suoi tempi di recupero.
        </p>
    </PageContainer>
  );
}
