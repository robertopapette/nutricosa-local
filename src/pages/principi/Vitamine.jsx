import React from "react";
import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Vitamine() {


  return (
    <PageContainer
      titolo="Vitamine"
      sottotitolo="Micronutrienti essenziali per il metabolismo e la vitalità"
    >

      <BottoneIndietro
              path="/principi"
              state={{ returnTo: "Acqua" }}
              testo="Torna ai principi"
            />

        <p>
          Le <strong>vitamine</strong> sono micronutrienti indispensabili per il
          corretto funzionamento dell’organismo. Non forniscono energia, ma senza
          di esse il metabolismo non può svolgere le sue funzioni vitali:
          produzione di energia, funzionamento del sistema immunitario,
          rinnovamento cellulare, protezione dai radicali liberi e regolazione di
          numerose reazioni biochimiche.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Esistono due grandi gruppi: le vitamine <strong>idrosolubili</strong> (come
          quelle del gruppo B e la vitamina C), che non vengono accumulate e devono
          essere introdotte quotidianamente; e le vitamine <strong>liposolubili</strong>
          (A, D, E, K), che si accumulano nei tessuti e richiedono equilibrio per
          evitare carenze o eccessi.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Ogni vitamina ha un ruolo unico: alcune regolano la produzione di energia,
          altre sostengono il sistema immunitario, altre ancora preservano la pelle,
          la vista, la salute delle ossa e del sistema nervoso. Una dieta varia,
          ricca di frutta, verdura, cereali integrali e fonti naturali di nutrienti,
          è il modo più efficace per garantirne un apporto equilibrato.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Nel percorso <strong>Nutrition Spiral</strong>, le vitamine rappresentano
          i “micro-ingranaggi” che permettono al corpo di funzionare in modo fluido,
          armonioso e stabile. Prendersene cura significa rendere più efficiente
          ogni sistema dell’organismo, giorno dopo giorno.
        </p>
    </PageContainer>
  );
}
