// 🧩 DietaChetogenica.jsx — versione Pro dinamica con capitoli espandibili
// 🥓 Basata sulla stessa struttura di DietaMediterranea e DietaZona

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import BottoneIndietro1 from "../../components/BottoneIndietro1";
import { theme } from "../../theme";

export default function DietaChetogenica() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sezioni = [
    {
      id: 1,
      titolo: "Introduzione",
      testo: `La Dieta Chetogenica è un regime alimentare a bassissimo contenuto di carboidrati
e ad alto contenuto di grassi, che mira a indurre uno stato metabolico detto “chetosi”.
In questa condizione, l’organismo utilizza i grassi come principale fonte di energia
al posto del glucosio, favorendo così la perdita di massa grassa.`,
    },
    {
      id: 2,
      titolo: "Principi fondamentali",
      testo: `La ripartizione dei macronutrienti nella dieta chetogenica classica è:
- 70-75% grassi
- 20-25% proteine
- 5-10% carboidrati

La drastica riduzione dei carboidrati spinge il corpo a produrre corpi chetonici,
che diventano il nuovo carburante per cervello e muscoli.`,
    },
    {
      id: 3,
      titolo: "Punti di forza",
      testo: `✅ Favorisce una rapida perdita di peso iniziale  
✅ Riduce la fame e stabilizza la glicemia  
✅ Migliora la concentrazione mentale (in soggetti adattati)  
✅ Può migliorare alcuni parametri metabolici (HDL, trigliceridi)`,
    },
    {
      id: 4,
      titolo: "Possibili criticità",
      testo: `⚠️ Possibile senso di affaticamento o “keto flu” nelle prime settimane  
⚠️ Difficile da mantenere a lungo termine  
⚠️ Rischio di carenze di fibre, vitamine e minerali  
⚠️ Controindicata in gravidanza, allattamento o patologie epatiche/renali`,
    },
    {
      id: 5,
      titolo: "Suggerimenti pratici",
      testo: `🥑 Privilegia grassi “buoni” come olio d’oliva, avocado e noci  
🥩 Scegli carni magre e pesce grasso (salmone, sgombro, tonno)  
🥦 Includi verdure a basso contenuto di carboidrati  
🚫 Evita zuccheri, cereali, pane, pasta e legumi  
💧 Bevi molta acqua e integra sali minerali per evitare disidratazione`,
    },
    {
      id: 6,
      titolo: "Varianti principali",
      testo: `📘 Standard (SKD): schema classico a basso contenuto di carboidrati costante  
📗 Targeted (TKD): prevede l’assunzione mirata di carboidrati prima dell’attività fisica  
📙 Cyclical (CKD): alterna fasi chetogeniche a brevi ricariche di carboidrati  
📒 High-protein: simile alla SKD ma con proteine leggermente più alte`,
    },
    {
      id: 7,
      titolo: "Conclusione",
      testo: `La Dieta Chetogenica può essere uno strumento efficace per perdere peso
e migliorare la sensibilità insulinica, ma deve essere seguita con consapevolezza
e preferibilmente sotto controllo medico o nutrizionale.`,
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

      <h1
        style={{
          textAlign: "center",
          color: theme.colori.accento,
          marginBottom: "1rem",
          fontSize: "1.5rem",
          textShadow: "0 1px 3px rgba(0,0,0,0.3)",
        }}
      >
        🥓 Dieta Chetogenica
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Scopri il funzionamento, i benefici e le possibili criticità
        della dieta a basso contenuto di carboidrati più conosciuta al mondo.
      </p>

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
