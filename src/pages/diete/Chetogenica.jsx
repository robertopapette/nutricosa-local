import React from "react";

import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Chetogenica() {


  return (
    <PageContainer
      titolo="🥑 Dieta Chetogenica"
      sottotitolo="Un approccio metabolico basato sull’utilizzo dei grassi come fonte primaria"
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

       {/* 🔙 Torna al padre */}
       <BottoneIndietro
                path="/diete-famose"
                state={{ returnTo: "Dieta Chetogenica" }}
                testo="Torna a Diete famose"
              />
          

        <p style={{ marginTop: "1.5rem" }}>
          La <strong>Dieta Chetogenica</strong> nasce come applicazione clinica
          già nei primi decenni del Novecento, ma ha conosciuto una grande
          diffusione negli ultimi anni come strategia alimentare orientata alla
          riduzione dei carboidrati e alla modifica profonda del metabolismo
          energetico.
        </p>

        <p style={{ marginTop: "1rem" }}>
          La logica centrale di questo approccio è quella di ridurre in modo
          drastico l’assunzione di carboidrati, portando l’organismo a utilizzare
          prevalentemente i grassi come fonte energetica. In questa condizione,
          il corpo produce molecole chiamate chetoni, che diventano un carburante
          alternativo per molti tessuti.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Questo cambiamento metabolico rappresenta una vera e propria
          riconfigurazione del modo in cui l’organismo gestisce l’energia.
          Proprio per questo motivo, la dieta chetogenica non è semplicemente
          una variante “low-carb”, ma un modello che richiede attenzione,
          coerenza e una comprensione chiara dei suoi meccanismi.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In alcuni contesti specifici, questo approccio può risultare utile per
          migliorare il controllo glicemico, ridurre l’appetito o gestire
          particolari condizioni metaboliche. Tuttavia, la sua applicazione
          richiede un adattamento individuale e una valutazione attenta della
          sostenibilità nel tempo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          La forte restrizione dei carboidrati e la prevalenza dei grassi
          rendono la dieta chetogenica impegnativa da mantenere nel lungo
          periodo per molte persone. Inoltre, la risposta fisiologica può
          variare in modo significativo in base a stile di vita, attività
          fisica e caratteristiche individuali.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, la Dieta Chetogenica viene letta
          come un <strong>strumento metabolico potente</strong>, non come una
          soluzione universale. Il suo valore emerge quando viene utilizzata in
          modo consapevole, contestualizzato e, se necessario, temporaneo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Comprendere questo approccio significa riconoscere che modificare il
          metabolismo è un atto profondo, che va affrontato con rispetto,
          conoscenza e ascolto del proprio corpo. La vera efficacia nasce quando
          potenza e sostenibilità trovano un punto di equilibrio.
        </p>
      </div>
    </PageContainer>
  );
}
