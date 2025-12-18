import React from "react";

import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function DigiunoIntermittente() {


  return (
    <PageContainer
      titolo="⏳ Digiuno Intermittente"
      sottotitolo="Un approccio che lavora sul tempo più che sugli alimenti"
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "2rem auto",
          padding: "1.5rem",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          color: "#222",
          lineHeight: 1.7,
        }}
      >
        {/* 🔙 Bottone indietro */}
        <BottoneIndietro
                path="/diete-famose"
                state={{ returnTo: "Dieta LowFODMAP" }}
                testo="Torna a Diete famose"
              />

        <p style={{ marginTop: "1.5rem" }}>
          Il <strong>Digiuno Intermittente</strong> non è una dieta nel senso
          classico del termine, ma un approccio alimentare basato sulla
          <strong>gestione del tempo</strong> in cui si mangia. Piuttosto che
          concentrarsi su cosa mangiare, questo modello lavora su quando
          introdurre il cibo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Questo approccio trae ispirazione da abitudini storiche e fisiologiche
          dell’essere umano, per il quale l’accesso continuo al cibo non è sempre
          stato la norma. Alternare periodi di alimentazione a periodi di
          digiuno permette all’organismo di attivare meccanismi metabolici
          differenti rispetto a quelli tipici della nutrizione costante.
        </p>

        <p style={{ marginTop: "1rem" }}>
          La logica centrale del digiuno intermittente è quella di offrire al
          corpo <strong>finestre temporali di recupero</strong>, durante le quali
          i processi digestivi si riducono e l’organismo può dedicare risorse ad
          altre funzioni di mantenimento e adattamento.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In alcuni contesti, questo approccio può aiutare a migliorare la
          consapevolezza alimentare, ridurre l’assunzione calorica non
          intenzionale e ristabilire una relazione più ordinata con i pasti.
          Tuttavia, non è automaticamente adatto a tutti e non rappresenta una
          soluzione universale.
        </p>

        <p style={{ marginTop: "1rem" }}>
          La risposta al digiuno intermittente varia notevolmente da persona a
          persona. Fattori come livello di attività fisica, stato di salute,
          qualità del sonno, stress e storia alimentare influenzano in modo
          determinante la sua sostenibilità e i suoi effetti.
        </p>

        <p style={{ marginTop: "1rem" }}>
          È importante evitare l’errore di considerare il digiuno come una
          compensazione a scelte alimentari disordinate. La qualità del cibo,
          l’equilibrio nutrizionale e il rispetto dei segnali corporei restano
          elementi centrali, indipendentemente dalla struttura temporale dei
          pasti.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, il Digiuno Intermittente viene
          letto come un <strong>strumento di organizzazione metabolica</strong>,
          utile solo se inserito in un contesto di equilibrio, ascolto del corpo
          e adattamento individuale. Il tempo può diventare un alleato, ma solo
          quando viene usato con consapevolezza.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Comprendere questo approccio significa riconoscere che nutrirsi non è
          solo una questione di quantità o qualità, ma anche di ritmo. Quando il
          ritmo è coerente con il corpo, l’alimentazione diventa più semplice e
          sostenibile.
        </p>
      </div>
    </PageContainer>
  );
}
