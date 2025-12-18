import React from "react";

import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Atkins() {


  return (
    <PageContainer
      titolo="🥩 Dieta Atkins"
      sottotitolo="Un approccio a basso contenuto di carboidrati centrato sul controllo metabolico"
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
                state={{ returnTo: "Dieta Atkins" }}
                testo="Torna a Diete famose"
              />

        <p style={{ marginTop: "1.5rem" }}>
          La <strong>Dieta Atkins</strong> nasce negli anni ’70 grazie al medico
          statunitense Robert Atkins, con l’obiettivo di ridurre l’impatto dei
          carboidrati sul metabolismo e favorire un utilizzo più marcato dei
          grassi come fonte energetica. È uno dei primi approcci alimentari a
          portare l’attenzione sul ruolo degli zuccheri e dell’insulina nella
          gestione del peso corporeo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          La logica alla base di questo modello è semplice: limitando in modo
          significativo l’assunzione di carboidrati, l’organismo viene spinto a
          modificare il proprio assetto metabolico, riducendo le oscillazioni
          glicemiche e favorendo un maggiore ricorso alle riserve energetiche.
          Questo cambio di prospettiva ha segnato una netta rottura con le
          raccomandazioni tradizionali dell’epoca.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Nel suo impianto originale, la Dieta Atkins prevede fasi progressive,
          con una restrizione iniziale molto marcata dei carboidrati, seguita da
          una graduale reintroduzione. Questo approccio strutturato può offrire
          a molte persone una sensazione di controllo, riduzione dell’appetito
          e una perdita di peso iniziale rapida.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Tuttavia, la forte enfasi sulla restrizione dei carboidrati e
          l’aumento relativo di proteine e grassi rende questo modello non
          sempre facile da sostenere nel lungo periodo. Inoltre, la risposta
          individuale può variare notevolmente in base a metabolismo, livello
          di attività fisica e stato di salute generale.
        </p>

        <p style={{ marginTop: "1rem" }}>
          È importante ricordare che il dimagrimento e il benessere metabolico
          non dipendono esclusivamente dalla riduzione di un singolo nutriente.
          Contesto, qualità degli alimenti, stile di vita e adattamento
          personale giocano un ruolo determinante nell’efficacia reale di
          qualsiasi approccio.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, la Dieta Atkins viene letta come
          un <strong>modello storico e concettuale</strong> che ha contribuito a
          cambiare il modo di pensare ai carboidrati e al metabolismo, ma non
          come una soluzione universale. Il suo valore emerge quando viene
          compresa, contestualizzata e, se necessario, adattata con
          consapevolezza.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Comprendere questo approccio significa riconoscere che il controllo
          metabolico non nasce dall’esclusione rigida, ma dalla capacità di
          modulare le scelte alimentari in funzione delle proprie reali
          esigenze, mantenendo equilibrio e sostenibilità nel tempo.
        </p>
      </div>
    </PageContainer>
  );
}
