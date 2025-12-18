import React from "react";
import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Mediterranea() {




  return (
    <PageContainer
      titolo="🌿 Dieta Mediterranea"
      sottotitolo="Un modello alimentare radicato nella cultura e nell’equilibrio"
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
                state={{ returnTo: "Dieta Mediterranea" }}
                testo="Torna a Diete famose"
              />
        

        <p style={{ marginTop: "1.5rem" }}>
          La <strong>Dieta Mediterranea</strong> non nasce come una dieta nel
          senso moderno del termine, ma come l’osservazione di uno stile
          alimentare tradizionale diffuso nei paesi affacciati sul Mar
          Mediterraneo. È il risultato di abitudini consolidate nel tempo,
          influenzate da disponibilità locali, cultura, stagionalità e ritmo
          della vita quotidiana.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Questo modello alimentare si fonda su un consumo prevalente di alimenti
          vegetali, cereali, legumi, frutta, verdura e grassi di origine
          prevalentemente vegetale, con particolare attenzione alla qualità
          delle materie prime. Gli alimenti di origine animale sono presenti,
          ma inseriti in modo più misurato e consapevole.
        </p>

        <p style={{ marginTop: "1rem" }}>
          La logica centrale della Dieta Mediterranea non è la restrizione né il
          controllo rigido, ma la <strong>continuità</strong>. I pasti sono parte
          integrante della vita sociale, del territorio e del tempo dedicato a
          sé stessi. L’equilibrio emerge dalla regolarità, dalla varietà e dal
          rispetto delle stagioni.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In molti contesti, questo approccio risulta facilmente sostenibile nel
          lungo periodo proprio perché non richiede esclusioni drastiche o
          calcoli complessi. Tuttavia, la sua apparente semplicità può essere
          fraintesa: applicarla in modo superficiale, senza attenzione alle
          quantità, alla qualità o allo stile di vita complessivo, ne riduce
          l’efficacia.
        </p>

        <p style={{ marginTop: "1rem" }}>
          È importante ricordare che anche un modello culturalmente radicato non
          è automaticamente adatto a tutti. Esigenze metaboliche specifiche,
          livelli di attività fisica, contesto moderno e abitudini personali
          possono richiedere adattamenti consapevoli.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, la Dieta Mediterranea viene letta
          come un <strong>modello di riferimento</strong>, non come una formula
          universale. Il suo valore risiede nell’attenzione alla qualità,
          alla varietà e al rapporto equilibrato con il cibo, più che
          nell’aderenza rigida a uno schema.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Comprendere questo approccio significa riconoscere che la nutrizione
          non è solo nutriente, ma anche contesto, tempo e relazione. Quando
          questi elementi sono in equilibrio, l’alimentazione diventa parte
          naturale del benessere quotidiano.
        </p>
      </div>
    </PageContainer>
  );
}
