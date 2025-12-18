import React from "react";
import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Alcool() {


  return (
    <PageContainer
      titolo="Alcool"
      sottotitolo="Piacere, abitudine e consapevolezza delle conseguenze"
    >
      <BottoneIndietro
        path="/principi"
        state={{ returnTo: "Alcool (calorie fantasma)" }}
        testo="Torna ai principi"
      />

        <p>
          L’<strong>alcool</strong> fornisce energia (7 kcal per grammo), ma a differenza
          degli altri nutrienti non svolge alcuna funzione nutrizionale. Viene
          definito <em>“caloria fantasma”</em> perché non sazia, non nutre e modifica i
          processi metabolici del corpo, spesso rallentando dimagrimento,
          recupero e performance.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Quando ingeriamo alcool, il corpo lo considera una sostanza tossica da
          eliminare rapidamente. Per questo motivo il fegato ne prioritizza il
          metabolismo, mettendo temporaneamente in pausa la normale gestione di
          carboidrati, grassi e proteine. Questo può favorire accumulo di grasso e
          alterazioni glicemiche.
        </p>

        <p style={{ marginTop: "1rem" }}>
          L’alcool influisce anche sulla qualità del sonno, sull’idratazione, sul
          sistema ormonale e sulla capacità di recupero muscolare. Pur potendo far
          parte di alcune occasioni sociali, va consumato con consapevolezza,
          ricordando che il suo impatto è superiore a quello percepito.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Nella visione <strong>Nutrition Spiral</strong>, comprendere l’effetto reale
          dell’alcool significa imparare a prendere scelte più equilibrate. Non si
          tratta di demonizzare, ma di conoscere. Solo ciò che conosci puoi
          gestirlo con intelligenza.
        </p>
    </PageContainer>
  );
}
