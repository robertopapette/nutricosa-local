import React from "react";

import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Dash() {


  return (
    <PageContainer
      titolo="🫀 Dieta DASH"
      sottotitolo="Un modello alimentare orientato all’equilibrio e alla salute cardiovascolare"
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
                state={{ returnTo: "Dieta DASH" }}
                testo="Torna a Diete famose"
              />

        <p style={{ marginTop: "1.5rem" }}>
          La <strong>Dieta DASH</strong>, acronimo di “Dietary Approaches to Stop
          Hypertension”, nasce come strategia nutrizionale sviluppata in ambito
          scientifico per supportare la salute cardiovascolare e la gestione
          della pressione arteriosa.
        </p>

        <p style={{ marginTop: "1rem" }}>
          A differenza di molti approcci nati come mode alimentari, la DASH si
          fonda su osservazioni cliniche e su un impianto strutturato che mira a
          migliorare l’equilibrio nutrizionale complessivo. La sua logica non è
          la restrizione estrema, ma la <strong>ridistribuzione consapevole</strong>
          degli alimenti all’interno della dieta quotidiana.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Questo modello pone particolare attenzione al consumo di frutta,
          verdura, cereali integrali, legumi e fonti proteiche magre, favorendo
          un apporto equilibrato di micronutrienti e riducendo l’eccesso di
          sodio, zuccheri aggiunti e grassi di bassa qualità.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In molti contesti, la Dieta DASH risulta facilmente adattabile e
          sostenibile nel lungo periodo, proprio perché non richiede esclusioni
          drastiche né schemi rigidi. Tuttavia, la sua efficacia dipende dalla
          capacità di applicarne i principi con continuità e consapevolezza,
          evitando interpretazioni superficiali.
        </p>

        <p style={{ marginTop: "1rem" }}>
          È importante sottolineare che, pur essendo nata con un obiettivo
          clinico specifico, la DASH non è limitata a una sola condizione.
          Il suo valore emerge quando viene interpretata come un modello di
          equilibrio generale, adattabile alle esigenze individuali e allo
          stile di vita moderno.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, la Dieta DASH viene letta come un
          <strong>approccio razionale e misurato</strong>, che dimostra come la
          nutrizione possa essere uno strumento di prevenzione e benessere,
          senza rinunciare alla varietà e alla sostenibilità.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Comprendere questo modello significa riconoscere che la salute
          cardiovascolare non nasce da soluzioni drastiche, ma da scelte
          quotidiane coerenti, ripetute nel tempo e integrate in uno stile di
          vita equilibrato.
        </p>
      </div>
    </PageContainer>
  );
}
