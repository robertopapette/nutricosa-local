import React from "react";
import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function NaturaliLegali() {
  return (
    <PageContainer
      titolo="🌿 Supplementi Naturali e Legali"
      sottotitolo="Supporto compatibile con la fisiologia e la normativa"
    >

        <BottoneIndietro
                path="/supplementi"
                state={{ returnTo: "Naturali e legali" }}
                testo="Torna a Diete famose"
              />

        <p style={{ marginTop: "1.5rem" }}>
          I <strong>supplementi naturali e legali</strong> comprendono tutte quelle
          sostanze di origine naturale o presenti normalmente nell’alimentazione
          umana, utilizzate nel rispetto delle normative vigenti e della
          fisiologia dell’organismo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Il termine “naturale” non indica automaticamente efficacia o sicurezza,
          così come “legale” non significa privo di effetti. Anche le sostanze
          presenti in natura interagiscono con i sistemi biologici e, se usate in
          modo improprio, possono risultare inefficaci o controproducenti.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In determinati contesti, alcuni supplementi naturali possono supportare
          funzioni specifiche come il recupero, la gestione dello stress, la
          digestione o il benessere generale. Il loro utilizzo ha senso solo se
          inserito in un quadro di equilibrio nutrizionale e di ascolto del
          proprio corpo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Uno degli errori più comuni è affidarsi all’idea che ciò che è naturale
          sia automaticamente benefico. La consapevolezza nasce dalla conoscenza
          delle reali necessità individuali, delle modalità d’uso e dei limiti di
          ogni sostanza.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, i supplementi naturali e legali
          vengono considerati strumenti di supporto dolce e progressivo, utili
          solo quando rispettano l’equilibrio fisiologico e la normativa. La
          salute duratura non nasce da scorciatoie, ma da scelte coerenti,
          informate e sostenibili nel tempo.
        </p>
    </PageContainer>
  );
}
