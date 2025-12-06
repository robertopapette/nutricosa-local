// 🧩 DietaMIND.jsx — versione Pro dinamica con capitoli espandibili
// 🧠 Struttura coerente con le altre diete Pro

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import BottoneIndietro1 from "../../components/BottoneIndietro1";
import { theme } from "../../theme";

export default function DietaMIND() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sezioni = [
    {
      id: 1,
      titolo: "Introduzione",
      testo: `La Dieta MIND (Mediterranean-DASH Intervention for Neurodegenerative Delay)
è una combinazione tra la dieta Mediterranea e la dieta DASH,
creata per migliorare la salute del cervello e rallentare il declino cognitivo.
È stata sviluppata dai ricercatori della Rush University di Chicago
per ridurre il rischio di Alzheimer e mantenere la mente lucida nel tempo.`,
    },
    {
      id: 2,
      titolo: "Principi fondamentali",
      testo: `🧩 Obiettivo principale: proteggere il cervello attraverso alimenti ricchi di antiossidanti,
vitamine e grassi buoni.

🍇 Categorie di alimenti chiave:
- Verdure a foglia verde (spinaci, cavoli, bietole)  
- Frutti di bosco (mirtilli, more, lamponi)  
- Cereali integrali  
- Legumi  
- Pesce e pollame  
- Olio extravergine d’oliva  
- Frutta secca  

⚠️ Da limitare:
burro, dolci industriali, formaggi stagionati e carni rosse.`,
    },
    {
      id: 3,
      titolo: "Benefici principali",
      testo: `✅ Migliora memoria e concentrazione  
✅ Riduce il rischio di Alzheimer fino al 50%  
✅ Supporta la funzione cognitiva anche in età avanzata  
✅ Aiuta il controllo del colesterolo e della glicemia  
✅ Promuove benessere mentale e lucidità`,
    },
    {
      id: 4,
      titolo: "Piramide MIND",
      testo: `🍽️ Alla base: verdure, frutta e cereali integrali  
🥗 Strato intermedio: pesce, pollame, legumi e olio d’oliva  
🍫 Punta: alimenti da consumare con moderazione (burro, dolci, carne rossa)

La Dieta MIND non impone rigide restrizioni,
ma incoraggia abitudini sane e sostenibili nel tempo.`,
    },
    {
      id: 5,
      titolo: "Esempio settimanale",
      testo: `🗓️ Esempio tipo:
- 6+ porzioni di verdure a foglia verde  
- 2+ porzioni di frutti di bosco  
- 3+ porzioni di cereali integrali al giorno  
- Pesce 1+ volta a settimana  
- Pollame 2+ volte a settimana  
- Legumi ogni 2 giorni  
- Olio d’oliva come principale condimento`,
    },
    {
      id: 6,
      titolo: "Criticità e precauzioni",
      testo: `⚠️ Richiede un’attenta pianificazione per mantenere varietà  
⚠️ Può essere costosa se basata su prodotti biologici e fuori stagione  
⚠️ Necessita costanza nel tempo per ottenere risultati apprezzabili`,
    },
    {
      id: 7,
      titolo: "Suggerimenti pratici",
      testo: `🥗 Inserisci mirtilli o frutti rossi ogni giorno  
🍞 Usa pane e pasta integrali  
🐟 Preferisci pesce azzurro o salmone  
🥬 Cuoci le verdure a vapore per mantenere i nutrienti  
🧠 Cammina all’aperto: l’attività fisica amplifica gli effetti positivi della dieta`,
    },
    {
      id: 8,
      titolo: "Conclusione",
      testo: `La Dieta MIND è un potente alleato della salute cerebrale.
Unisce gusto, equilibrio e scienza, dimostrando che nutrire il corpo
significa anche prendersi cura della mente.`,
    },
  ];

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "100px auto",
        padding: "1.5rem",
        background: "rgba(255,255,255,0.05)",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.1)",
        color: theme.colori.testoChiaro,
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
      }}
    >
      <BottoneIndietro1 />

      {/* 🧭 Titolo principale */}
      <h1
        style={{
          textAlign: "center",
          color: theme.colori.accento,
          marginBottom: "1rem",
          fontSize: "1.5rem",
          textShadow: "0 1px 3px rgba(0,0,0,0.3)",
        }}
      >
        🧠 Dieta MIND
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Un modello alimentare che unisce il meglio della dieta Mediterranea e della DASH
        per migliorare la salute cerebrale e ridurre il rischio di Alzheimer.
      </p>

      {/* 📖 Capitoli espandibili */}
      {sezioni.map((sezione) => (
        <div
          key={sezione.id}
          style={{
            marginBottom: "1rem",
            background: "rgba(0,0,0,0.3)",
            borderRadius: "8px",
            overflow: "hidden",
            transition: "all 0.3s ease",
          }}
        >
          <button
            onClick={() => toggleSection(sezione.id)}
            style={{
              width: "100%",
              background: "rgba(0,0,0,0.4)",
              border: "none",
              color: theme.colori.accento,
              textAlign: "left",
              padding: "0.8rem 1rem",
              fontWeight: "bold",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              cursor: "pointer",
            }}
          >
            {sezione.titolo}
            {openSection === sezione.id ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openSection === sezione.id && (
            <div
              style={{
                padding: "1rem",
                color: "rgba(255,255,255,0.9)",
                lineHeight: "1.6",
                fontSize: "0.95rem",
              }}
            >
              {sezione.testo}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
