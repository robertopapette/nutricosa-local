import React from "react";

import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Zona() {

  return (
    <PageContainer
      titolo="⚖️ Dieta Zona"
      sottotitolo="Un approccio alimentare basato sull’equilibrio, non sugli estremi"
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
                state={{ returnTo: "Dieta Zona" }}
                testo="Torna a Diete famose"
              />

        <p style={{ marginTop: "1.5rem" }}>
          La <strong>Dieta Zona</strong> nasce negli anni ’90 dal lavoro del
          biochimico americano Barry Sears, con l’obiettivo di migliorare il
          controllo metabolico attraverso un equilibrio preciso tra
          macronutrienti. L’idea alla base non è la restrizione estrema, ma la
          regolazione delle risposte fisiologiche legate all’alimentazione.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Questo approccio parte da un presupposto chiaro: ciò che mangiamo non
          influisce solo sull’energia introdotta, ma anche sul modo in cui il
          nostro organismo risponde a livello metabolico e ormonale. Secondo la
          Dieta Zona, un corretto bilanciamento tra carboidrati, proteine e
          grassi in ogni pasto contribuirebbe a mantenere una condizione più
          stabile nel tempo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          La logica centrale della Zona non è l’eliminazione di specifici
          alimenti, ma la <strong>proporzione</strong>. Ogni pasto viene pensato
          come una combinazione armonica, volta a evitare eccessi che possano
          portare a sbalzi energetici o difficoltà di gestione della fame.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In alcuni contesti, questo approccio può risultare utile per chi
          ricerca maggiore regolarità nei pasti, una struttura chiara e una
          sensazione di controllo sull’alimentazione quotidiana. Tuttavia, la
          necessità di calcolare costantemente le proporzioni può trasformare
          l’ordine iniziale in un vincolo difficile da sostenere nel lungo
          periodo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          È importante ricordare che l’equilibrio metabolico non dipende
          esclusivamente da formule nutrizionali. Stile di vita, livello di
          attività fisica, qualità del sonno, stress e individualità biologica
          giocano un ruolo determinante. Applicare un modello standard senza
          adattarlo alla persona può ridurne l’efficacia o portare a
          frustrazione.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, la Dieta Zona viene interpretata
          come un <strong>modello concettuale</strong>, non come una regola
          rigida. Il suo valore risiede nell’attenzione all’equilibrio e alla
          qualità delle scelte, più che nel rispetto matematico delle
          proporzioni.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Comprendere questo approccio significa coglierne il messaggio
          principale: l’alimentazione non è una contrapposizione tra nutrienti,
          ma un dialogo continuo tra ciò che mangiamo e il nostro corpo. La
          consapevolezza nasce quando impariamo ad ascoltare questo dialogo e ad
          adattare gli strumenti alle nostre reali esigenze.
        </p>
      </div>
    </PageContainer>
  );
}
