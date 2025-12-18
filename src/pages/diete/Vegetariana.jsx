import React from "react";

import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Vegetariana() {

  return (
    <PageContainer
      titolo="🥕 Dieta Vegetariana"
      sottotitolo="Un approccio alimentare che integra scelta vegetale e flessibilità"
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
                state={{ returnTo: "Dieta Vegetariana" }}
                testo="Torna a Diete famose"
              />

        <p style={{ marginTop: "1.5rem" }}>
          La <strong>Dieta Vegetariana</strong> è un approccio alimentare che
          esclude la carne e il pesce, ma può includere altri alimenti di origine
          animale come uova e latticini, a seconda delle scelte individuali.
          Più che una dieta rigida, rappresenta una famiglia di modelli
          alimentari con diversi livelli di esclusione.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Questo approccio nasce spesso dall’incontro tra considerazioni etiche,
          ambientali, culturali e di benessere personale. Dal punto di vista
          nutrizionale, si fonda prevalentemente su alimenti vegetali come
          legumi, cereali, frutta, verdura, semi e frutta secca, integrati — in
          alcuni casi — da prodotti animali selezionati.
        </p>

        <p style={{ marginTop: "1rem" }}>
          La logica centrale della Dieta Vegetariana non è l’eliminazione
          totale, ma la <strong>selezione</strong>. Riducendo o escludendo alcune
          fonti animali, l’attenzione si sposta sulla qualità degli alimenti,
          sulla varietà e sull’equilibrio complessivo dei pasti.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In molti contesti, questo modello risulta facilmente sostenibile nel
          lungo periodo, proprio grazie alla sua flessibilità. Tuttavia, anche
          in questo caso, l’equilibrio non è automatico: una dieta vegetariana
          può essere nutrizionalmente valida oppure squilibrata, a seconda delle
          scelte quotidiane.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Alcuni nutrienti richiedono particolare attenzione, soprattutto se
          l’alimentazione si orienta verso forme più restrittive. La
          consapevolezza nutrizionale diventa quindi un elemento chiave per
          trasformare questa scelta in un reale supporto al benessere.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, la Dieta Vegetariana viene letta
          come un <strong>approccio di transizione e adattamento</strong>, capace
          di offrire benefici quando viene costruita con conoscenza, equilibrio
          e rispetto delle esigenze individuali.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Comprendere questo modello significa riconoscere che l’efficacia di
          una scelta alimentare non dipende dall’etichetta, ma dalla capacità di
          integrarla in modo armonico con il proprio stile di vita, i propri
          valori e il proprio corpo.
        </p>
      </div>
    </PageContainer>
  );
}
