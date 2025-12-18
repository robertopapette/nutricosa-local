import React from "react";

import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function GruppoSanguigno() {


  return (
    <PageContainer
      titolo="🧬 Dieta del Gruppo Sanguigno"
      sottotitolo="Un approccio che lega alimentazione e identità biologica"
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
                state={{ returnTo: "Dieta Gruppo sanguigno" }}
                testo="Torna a Diete famose"
              />

        <p style={{ marginTop: "1.5rem" }}>
          La <strong>Dieta del Gruppo Sanguigno</strong> propone un collegamento
          diretto tra alimentazione e gruppo sanguigno, suggerendo che ogni
          individuo dovrebbe nutrirsi in modo coerente con la propria identità
          biologica. Questo approccio ha guadagnato popolarità per la sua
          apparente semplicità e per l’idea di una nutrizione “personalizzata”
          basata su un dato oggettivo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          La logica alla base di questo modello è che il gruppo sanguigno
          rappresenti un indicatore delle caratteristiche evolutive e
          metaboliche di una persona, influenzando il modo in cui l’organismo
          reagisce a determinati alimenti. Da questa premessa derivano
          raccomandazioni alimentari differenti per ciascun gruppo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Dal punto di vista scientifico, le evidenze a supporto di un legame
          diretto tra gruppo sanguigno e risposta nutrizionale sono limitate e
          non conclusive. Le reazioni individuali agli alimenti risultano essere
          influenzate da un insieme molto più ampio di fattori, come genetica,
          microbiota, stile di vita e contesto metabolico.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Nonostante ciò, alcune persone riferiscono benefici soggettivi nel
          seguire questo approccio. In molti casi, tali effetti possono essere
          spiegati dal miglioramento generale della qualità delle scelte
          alimentari, dalla maggiore attenzione al cibo e dalla riduzione di
          prodotti industriali, piuttosto che dal gruppo sanguigno in sé.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Il rischio principale di questo modello emerge quando viene applicato
          in modo rigido o dogmatico, attribuendo al gruppo sanguigno un ruolo
          determinante che può portare a esclusioni inutili o a una
          semplificazione eccessiva della complessità biologica umana.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, la Dieta del Gruppo Sanguigno
          viene letta come un <strong>tentativo di personalizzazione</strong>,
          interessante sul piano concettuale ma da affrontare con spirito
          critico. La nutrizione realmente efficace nasce dall’integrazione di
          dati individuali, ascolto del corpo e conoscenza scientifica, non da
          una singola variabile isolata.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Comprendere questo approccio significa distinguere tra il desiderio
          legittimo di una nutrizione su misura e la necessità di basi solide.
          La personalizzazione autentica è un processo complesso, che va oltre
          le etichette e richiede consapevolezza, adattamento e responsabilità.
        </p>
      </div>
    </PageContainer>
  );
}
