import React from "react";

import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Paleo() {


  return (
    <PageContainer
      titolo="🦴 Dieta Paleo"
      sottotitolo="Un approccio che guarda alle origini per rileggere la nutrizione moderna"
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
                state={{ returnTo: "Dieta Paleo" }}
                testo="Torna a Diete famose"
              />

        <p style={{ marginTop: "1.5rem" }}>
          La <strong>Dieta Paleo</strong>, abbreviazione di “paleolitica”, si
          ispira all’idea di un’alimentazione simile a quella dei nostri antenati
          cacciatori-raccoglitori. Questo approccio nasce dal presupposto che il
          patrimonio genetico umano si sia sviluppato in un contesto alimentare
          molto diverso da quello moderno.
        </p>

        <p style={{ marginTop: "1rem" }}>
          La logica centrale della Paleo non è la conta dei nutrienti, ma la
          <strong>selezione degli alimenti</strong>. Vengono privilegiati cibi
          considerati “non trasformati”, come carne, pesce, uova, frutta,
          verdura, semi e frutta secca, mentre vengono esclusi alimenti
          introdotti più recentemente nella storia evolutiva, come cereali,
          legumi, latticini e prodotti industriali.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Questo modello propone una rilettura critica dell’alimentazione
          moderna, suggerendo che alcune problematiche metaboliche possano
          essere legate all’eccesso di trasformazione e alla distanza dalle
          condizioni nutrizionali originarie. In questo senso, la Paleo invita
          a riflettere sulla qualità degli alimenti e sul loro grado di
          lavorazione.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In alcuni contesti, questo approccio può portare a una maggiore
          attenzione alla provenienza del cibo, alla stagionalità e alla
          semplicità delle scelte alimentari. Tuttavia, l’esclusione di interi
          gruppi alimentari rende il modello non sempre facilmente adattabile
          alla vita moderna e alle diverse esigenze individuali.
        </p>

        <p style={{ marginTop: "1rem" }}>
          È importante ricordare che il mondo attuale è profondamente diverso
          da quello paleolitico: stile di vita, aspettativa di vita, attività
          fisica e contesto ambientale sono cambiati radicalmente. Applicare un
          modello antico senza adattarlo al presente può limitarne
          l’efficacia o la sostenibilità.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, la Dieta Paleo viene letta come
          un <strong>invito a semplificare</strong> e a interrogarsi sulla qualità
          del cibo, più che come un ritorno letterale al passato. Il suo valore
          emerge quando diventa uno strumento di consapevolezza, non una
          regola rigida.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Comprendere questo approccio significa coglierne il messaggio
          principale: l’alimentazione efficace nasce dall’equilibrio tra
          radici evolutive e realtà moderna, adattando i principi alle esigenze
          concrete della vita quotidiana.
        </p>
      </div>
    </PageContainer>
  );
}
