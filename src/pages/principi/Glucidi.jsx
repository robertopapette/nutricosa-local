import React from "react";
import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Glucidi() {

  return (
    <PageContainer
      titolo="Glucidi"
      sottotitolo="La fonte primaria di energia per il corpo"
    >

    <BottoneIndietro
      path="/principi"
      state={{ returnTo: "Glucidi" }}
      testo="Torna ai principi"
    />

        <p>
          I <strong>glucidi</strong>, o carboidrati, rappresentano la fonte di energia
          più immediata e facilmente utilizzabile dall’organismo. Ogni muscolo,
          ogni cellula e perfino il cervello dipendono da essi per funzionare al
          meglio. Quando introdotti con intelligenza, favoriscono vitalità,
          prestazioni e lucidità mentale.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Non tutti i carboidrati però sono uguali. Quelli <strong>semplici</strong>
          (come zuccheri e dolci) vengono assorbiti rapidamente e possono generare
          picchi glicemici, mentre i carboidrati <strong>complessi</strong> (come riso,
          avena, patate, cereali e legumi) rilasciano energia in modo graduale e
          più stabile. L’<em>indice glicemico</em> e il <em>carico glicemico</em>
          determinano la velocità con cui aumentano la glicemia.
        </p>

        <p style={{ marginTop: "1rem" }}>
          I glucidi sono anche fondamentali per il ripristino delle scorte di
          glicogeno muscolare, specialmente in chi pratica attività fisica. Una
          loro corretta gestione permette di mantenere performance elevate,
          ridurre la fatica e migliorare il recupero.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Imparare a distinguere le diverse tipologie di carboidrati e il loro
          impatto metabolico significa assumere il controllo dell’energia
          quotidiana. Nella filosofia <strong>Nutrition Spiral</strong>, i glucidi
          diventano uno strumento consapevole, da dosare con equilibrio per
          supportare salute e benessere.
        </p>
    </PageContainer>
  );
}
