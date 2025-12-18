import React from "react";
import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Premessa() {
  return (
    <PageContainer
      titolo="Premessa"
      sottotitolo="Introduzione ai principi della nutrizione consapevole"
    >
      {/* 🔙 Bottone indietro */}
      <BottoneIndietro
        path="/principi-nutrizione"
        testo="Torna indietro"
      />

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
        <p>
          La <strong>nutrizione consapevole</strong> non è una dieta e non è un insieme
          di regole rigide: è un modo di osservare ciò che mangiamo e comprendere
          come ogni alimento influenzi il nostro corpo, la nostra energia e il nostro
          equilibrio quotidiano. Sapere cosa succede davvero quando introduciamo
          cibo significa recuperare controllo, lucidità e responsabilità verso noi stessi.
        </p>

        <p style={{ marginTop: "1rem" }}>
          L’obiettivo di questa sezione è offrirti una base chiara e scientifica
          affinché tu possa interpretare correttamente gli effetti dei nutrienti,
          riconoscere i segnali del tuo organismo e compiere scelte alimentari più
          intelligenti e coerenti con il tuo benessere. La nutrizione non riguarda
          solo calorie e macronutrienti: riguarda <em>qualità</em>, <em>funzione</em>,
          <em>tempistiche</em> e soprattutto <em>consapevolezza</em>.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Ogni pagina di questo percorso ti accompagnerà passo dopo passo alla
          scoperta dei principi fondamentali: proteine, carboidrati, lipidi,
          vitamine, minerali, acqua, digestione e molto altro. Imparare a conoscerli
          significa imparare a conoscere te stesso, perché ciò che scegli di mangiare
          diventa parte di te, della tua energia, della tua forza e della tua salute.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Inizia questo viaggio con mente aperta e spirito curioso: la consapevolezza
          è il primo vero atto di amore verso il proprio corpo.
        </p>
      </div>
    </PageContainer>
  );
}
