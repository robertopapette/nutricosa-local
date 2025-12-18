import React from "react";

import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Flexitariana() {


  return (
    <PageContainer
      titolo="🌱 Dieta Flexitariana"
      sottotitolo="Un approccio alimentare flessibile, orientato alla consapevolezza"
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
                state={{ returnTo: "Dieta Flexitariana" }}
                testo="Torna a Diete famose"
              />

        <p style={{ marginTop: "1.5rem" }}>
          La <strong>Dieta Flexitariana</strong> nasce come risposta alla
          crescente esigenza di conciliare scelte alimentari più vegetali con
          la flessibilità richiesta dalla vita quotidiana. Non si basa su
          esclusioni rigide, ma su una riduzione consapevole del consumo di
          alimenti di origine animale.
        </p>

        <p style={{ marginTop: "1rem" }}>
          La logica centrale di questo approccio è la <strong>priorità</strong>:
          gli alimenti vegetali costituiscono la base dell’alimentazione,
          mentre carne e pesce vengono consumati in modo occasionale e
          intenzionale. L’attenzione si sposta dalla quantità alla qualità e
          al contesto delle scelte.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Questo modello alimentare permette di integrare i benefici di una
          dieta prevalentemente vegetale senza richiedere un cambiamento
          radicale o immediato. Proprio per questo motivo, risulta spesso
          sostenibile nel lungo periodo e facilmente adattabile a diverse
          situazioni sociali e culturali.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Tuttavia, la flessibilità non deve essere confusa con assenza di
          criterio. Senza consapevolezza, l’approccio flexitariano rischia di
          diventare una semplice etichetta, priva di reale impatto sulla
          qualità dell’alimentazione.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Quando applicata con attenzione, la Dieta Flexitariana invita a
          riscoprire il valore della varietà, della stagionalità e della
          moderazione. L’obiettivo non è eliminare, ma <strong>riequilibrare</strong>
          il rapporto con il cibo, riducendo eccessi e automatismi.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, la Dieta Flexitariana viene letta
          come un <strong>approccio adattivo</strong>, che valorizza la capacità
          di scegliere in modo intenzionale, senza rigidità né imposizioni.
          Il suo valore emerge quando la flessibilità diventa uno strumento di
          equilibrio e non una giustificazione alla disattenzione.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Comprendere questo modello significa riconoscere che il cambiamento
          alimentare duraturo non nasce dagli estremi, ma dalla capacità di
          costruire abitudini coerenti, realistiche e sostenibili nel tempo.
        </p>
      </div>
    </PageContainer>
  );
}
