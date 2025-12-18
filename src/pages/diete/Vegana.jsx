import React from "react";

import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Vegana() {

  return (
    <PageContainer
      titolo="🌱 Dieta Vegana"
      sottotitolo="Una scelta alimentare che unisce etica, ambiente e nutrizione"
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
                state={{ returnTo: "Dieta Vegana" }}
                testo="Torna a Diete famose"
              />

        <p style={{ marginTop: "1.5rem" }}>
          La <strong>Dieta Vegana</strong> è un approccio alimentare che esclude
          tutti gli alimenti di origine animale, basandosi esclusivamente su
          cibi di origine vegetale. Più che una semplice strategia nutrizionale,
          rappresenta spesso una scelta etica, ambientale o filosofica che
          influenza il rapporto con il cibo e con il mondo circostante.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Dal punto di vista nutrizionale, questo modello si fonda su legumi,
          cereali, frutta, verdura, semi e frutta secca, offrendo un’ampia
          varietà di alimenti ricchi di fibre, fitonutrienti e micronutrienti.
          La logica centrale non è la restrizione calorica, ma la selezione
          consapevole delle fonti alimentari.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In molti contesti, una dieta vegana ben pianificata può risultare
          adeguata e sostenibile, soprattutto quando accompagnata da attenzione
          alla varietà e alla qualità degli alimenti. Tuttavia, l’eliminazione
          completa delle fonti animali richiede una maggiore consapevolezza
          nutrizionale per evitare carenze o squilibri.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Alcuni nutrienti, normalmente presenti in forma più facilmente
          biodisponibile negli alimenti animali, necessitano di particolare
          attenzione in un’alimentazione esclusivamente vegetale. Per questo
          motivo, l’informazione e la pianificazione diventano elementi centrali
          di questo approccio.
        </p>

        <p style={{ marginTop: "1rem" }}>
          È importante distinguere tra una dieta vegana basata su alimenti
          integrali e una versione più industriale o altamente processata.
          L’assenza di prodotti animali, da sola, non garantisce automaticamente
          equilibrio o benessere.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, la Dieta Vegana viene letta come
          un <strong>modello alimentare consapevole</strong>, che può offrire
          benefici se affrontato con conoscenza, adattamento individuale e
          rispetto delle esigenze fisiologiche. Il valore di questa scelta
          emerge quando etica, nutrizione e sostenibilità trovano un punto di
          equilibrio.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Comprendere questo approccio significa andare oltre le etichette e
          riconoscere che ogni scelta alimentare efficace nasce dall’incontro
          tra convinzioni personali, informazione corretta e ascolto del
          proprio corpo.
        </p>
      </div>
    </PageContainer>
  );
}
