import React from "react";
import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Lipidi() {


  return (
    <PageContainer
      titolo="Lipidi"
      sottotitolo="Energia concentrata e regolazione ormonale"
    >

      <BottoneIndietro
         path="/principi"
         state={{ returnTo: "Lipidi" }}
         testo="Torna ai principi"
      />

        <p>
          I <strong>lipidi</strong>, spesso chiamati “grassi”, sono molto più di una
          semplice riserva energetica. Rappresentano una delle principali fonti di
          energia concentrata (9 kcal per grammo) e svolgono ruoli essenziali nel
          corpo: proteggono gli organi, regolano la temperatura corporea,
          costruiscono le membrane cellulari e partecipano alla produzione degli
          ormoni.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Non tutti i grassi sono uguali. I <strong>grassi insaturi</strong> (come
          quelli presenti in pesce, frutta secca, semi e olio d'oliva) sono
          considerati benefici per il sistema cardiovascolare e per la salute
          cellulare. I <strong>grassi saturi</strong>, pur avendo una funzione
          strutturale, vanno consumati con moderazione. I <strong>grassi trans</strong>,
          invece, sono da evitare perché aumentano il rischio di infiammazione e
          squilibri metabolici.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Fondamentali sono anche gli <strong>acidi grassi essenziali</strong>,
          come gli Omega-3 e Omega-6, che il corpo non può produrre da solo e che
          partecipano a processi come l'equilibrio infiammatorio, la funzione
          cerebrale e il corretto sviluppo delle cellule. Il loro bilanciamento è
          cruciale per mantenere uno stato di benessere duraturo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Comprendere quali grassi scegliere e in quali quantità permette di
          sostenere energia, salute ormonale, sistema nervoso e longevità.
          Nella filosofia <strong>Nutrition Spiral</strong>, i lipidi non sono un
          nemico: sono uno <em>strumento»,</em> da usare con consapevolezza e
          equilibrio per nutrire il corpo nel modo più intelligente.
        </p>
    </PageContainer>
  );
}
