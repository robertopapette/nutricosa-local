import React from "react";

import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Dukan() {


  return (
    <PageContainer
      titolo="🥩 Dieta Dukan"
      sottotitolo="Un approccio strutturato e iperproteico orientato al controllo del peso"
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
                state={{ returnTo: "Dieta Dukan" }}
                testo="Torna a Diete famose"
              />

        <p style={{ marginTop: "1.5rem" }}>
          La <strong>Dieta Dukan</strong> nasce all’inizio degli anni 2000 ad
          opera del medico francese Pierre Dukan e si basa su un modello
          alimentare fortemente strutturato, centrato su un’elevata assunzione
          di proteine e su una progressione in fasi ben definite.
        </p>

        <p style={{ marginTop: "1rem" }}>
          La logica di questo approccio è quella di favorire una rapida perdita
          di peso iniziale attraverso una drastica riduzione dei carboidrati e
          dei grassi, aumentando al contempo il senso di sazietà grazie
          all’elevato apporto proteico. La struttura a fasi fornisce un percorso
          chiaro e guidato, elemento che per molte persone risulta rassicurante.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Nelle sue prime fasi, la Dieta Dukan è particolarmente restrittiva e
          mira a modificare rapidamente il bilancio energetico e la composizione
          corporea. Questo può portare a risultati visibili nel breve periodo,
          ma richiede una notevole disciplina e una gestione attenta della
          transizione verso fasi più flessibili.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Un aspetto centrale di questo modello è la sua forte dipendenza dalle
          regole e dalla sequenza prestabilita. Se da un lato ciò può facilitare
          l’aderenza iniziale, dall’altro può rendere complessa la
          sostenibilità nel lungo periodo, soprattutto quando il contesto di
          vita cambia o quando viene meno la struttura rigida.
        </p>

        <p style={{ marginTop: "1rem" }}>
          È importante considerare che un’alimentazione fortemente sbilanciata
          su un singolo macronutriente può non essere adatta a tutti e può
          richiedere particolare attenzione in presenza di specifiche
          condizioni metaboliche o di salute. La risposta individuale a questo
          tipo di approccio può variare in modo significativo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, la Dieta Dukan viene letta come un
          <strong>modello altamente direttivo</strong>, efficace per alcune
          persone nel breve termine ma da valutare con attenzione in termini di
          equilibrio, adattabilità e continuità. Il suo valore emerge quando
          viene compresa come esperienza strutturata, non come soluzione
          definitiva.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Comprendere questo approccio significa riconoscere che il controllo
          del peso non nasce solo dalla rigidità delle regole, ma dalla capacità
          di trasformare l’esperienza alimentare in un percorso sostenibile,
          coerente con il proprio corpo e con la propria vita.
        </p>
      </div>
    </PageContainer>
  );
}
