import React from "react";

import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function LowFODMAP() {


  return (
    <PageContainer
      titolo="🌾 Dieta Low FODMAP"
      sottotitolo="Un approccio nutrizionale mirato alla gestione dei disturbi intestinali"
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
                state={{ returnTo: "Dieta LowFODMAP" }}
                testo="Torna a Diete famose"
              />

        <p style={{ marginTop: "1.5rem" }}>
          La <strong>Dieta Low FODMAP</strong> nasce in ambito clinico come
          strategia nutrizionale sviluppata per la gestione dei disturbi
          gastrointestinali funzionali, in particolare quelli legati alla
          sensibilità intestinale e al discomfort digestivo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Il termine FODMAP è un acronimo che identifica specifiche categorie di
          carboidrati a corta catena che, in alcune persone, possono risultare
          poco assorbibili o fermentabili a livello intestinale. Questo processo
          può generare gonfiore, dolore addominale e alterazioni della funzione
          intestinale.
        </p>

        <p style={{ marginTop: "1rem" }}>
          La logica centrale della Low FODMAP non è l’eliminazione definitiva di
          determinati alimenti, ma la <strong>riduzione temporanea</strong> di
          specifici componenti per osservare la risposta dell’organismo. Si
          tratta quindi di un approccio sperimentale e guidato, più che di una
          dieta da seguire nel lungo periodo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In molti casi, questo modello viene applicato in fasi successive, con
          un periodo iniziale di riduzione, seguito da una graduale
          reintroduzione. L’obiettivo è individuare le soglie di tolleranza
          individuali e costruire un’alimentazione più personalizzata e
          sostenibile.
        </p>

        <p style={{ marginTop: "1rem" }}>
          È importante sottolineare che una restrizione prolungata e non
          supervisionata può ridurre inutilmente la varietà alimentare e
          complicare il rapporto con il cibo. Per questo motivo, la Low FODMAP
          richiede consapevolezza, informazione e, quando necessario,
          accompagnamento professionale.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, la Dieta Low FODMAP viene letta
          come un <strong>strumento di osservazione e adattamento</strong>, utile
          per comprendere la risposta individuale dell’intestino, ma non come un
          modello alimentare universale o permanente.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Comprendere questo approccio significa riconoscere che il benessere
          digestivo nasce dall’ascolto del corpo e dalla capacità di modulare le
          scelte alimentari in modo flessibile, evitando rigidità non
          necessarie e preservando equilibrio e varietà nel tempo.
        </p>
      </div>
    </PageContainer>
  );
}
