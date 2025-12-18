import React from "react";

import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function MIND() {


  return (
    <PageContainer
      titolo="🧠 Dieta MIND"
      sottotitolo="Un approccio nutrizionale orientato alla salute cognitiva"
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
                state={{ returnTo: "Dieta MIND" }}
                testo="Torna a Diete famose"
              />

        <p style={{ marginTop: "1.5rem" }}>
          La <strong>Dieta MIND</strong>, acronimo di “Mediterranean-DASH
          Intervention for Neurodegenerative Delay”, nasce dall’integrazione di
          due modelli nutrizionali già noti — la Dieta Mediterranea e la Dieta
          DASH — con l’obiettivo di supportare la salute del cervello e le
          funzioni cognitive nel lungo periodo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Questo approccio non si concentra sulla perdita di peso o sulla
          performance fisica, ma sulla relazione tra alimentazione e
          invecchiamento cerebrale. La sua logica centrale è che alcune scelte
          nutrizionali, ripetute nel tempo, possano contribuire a creare un
          ambiente metabolico favorevole alla funzione cognitiva.
        </p>

        <p style={{ marginTop: "1rem" }}>
          La Dieta MIND pone particolare attenzione alla qualità degli alimenti,
          privilegiando quelli ricchi di composti antiossidanti, grassi di buona
          qualità e micronutrienti coinvolti nei processi neuronali. L’approccio
          non è restrittivo, ma selettivo e orientato alla continuità.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In molti contesti, questo modello risulta facilmente integrabile nello
          stile di vita quotidiano, proprio perché non richiede cambiamenti
          drastici né esclusioni rigide. Tuttavia, come per ogni approccio
          preventivo, i suoi effetti sono legati alla costanza e alla visione di
          lungo periodo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          È importante sottolineare che la salute cognitiva non dipende
          esclusivamente dall’alimentazione. Attività mentale, movimento,
          qualità del sonno, gestione dello stress e relazioni sociali
          contribuiscono in modo determinante al benessere del cervello.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, la Dieta MIND viene letta come un
          <strong>modello di prevenzione consapevole</strong>, che invita a
          considerare la nutrizione come parte di un ecosistema più ampio
          dedicato alla salute mentale e cognitiva, non come una soluzione
          isolata.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Comprendere questo approccio significa riconoscere che il cervello,
          come ogni altro sistema del corpo, beneficia di scelte coerenti,
          sostenibili e ripetute nel tempo. La chiarezza mentale nasce
          dall’equilibrio, non dalle scorciatoie.
        </p>
      </div>
    </PageContainer>
  );
}
