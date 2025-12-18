import React from "react";
import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Dimagrimento() {


  return (
    <PageContainer
      titolo="🔥 Supplementi per il Dimagrimento"
      sottotitolo="Supporto consapevole alla gestione del peso corporeo"
    >
        <BottoneIndietro
                path="/supplementi"
                state={{ returnTo: "Dimagrimento" }}
                testo="Torna a Diete famose"
              />

        <p style={{ marginTop: "1.5rem" }}>
          I <strong>supplementi per il dimagrimento</strong> comprendono una vasta
          gamma di prodotti spesso associati alla promessa di una perdita di
          peso rapida e senza sforzo. Proprio per questo motivo rappresentano una
          delle categorie che richiede maggiore attenzione e consapevolezza.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Il dimagrimento è un processo complesso che coinvolge il bilancio
          energetico, il metabolismo, la regolazione ormonale, il movimento e il
          comportamento alimentare. Nessun supplemento è in grado di sostituire
          questi fattori fondamentali né di produrre risultati duraturi in loro
          assenza.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In alcuni contesti specifici, determinati supplementi possono offrire
          un supporto indiretto: favorire la gestione dell’appetito, sostenere
          l’energia durante l’attività fisica o accompagnare fasi di cambiamento
          delle abitudini. Il loro ruolo resta comunque <strong>secondario</strong>
          e limitato nel tempo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          L’errore più comune è affidarsi a questi prodotti come soluzione
          principale. Questo approccio porta spesso a risultati temporanei, a
          frustrazione e a una perdita di fiducia nel proprio corpo. La
          trasformazione reale avviene quando si lavora sulle basi e si procede
          con gradualità.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, i supplementi per il dimagrimento
          vengono trattati come strumenti di accompagnamento, non come
          scorciatoie. La riduzione del peso corporeo sostenibile nasce dalla
          comprensione del proprio metabolismo, da scelte alimentari
          consapevoli, dal movimento regolare e dal rispetto dei tempi del
          corpo.
        </p>
    </PageContainer>
  );
}
