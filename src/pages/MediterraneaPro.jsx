// 🌿 MediterraneaPro.jsx — versione sandbox "Dieta Mediterranea Pro"
// Struttura a matrioska con capitoli espandibili
// Coerente con il tema attuale del sito e completamente indipendente

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { theme } from "../theme";

export default function MediterraneaPro() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sezioni = [
    {
      id: 1,
      titolo: "Principi fondamentali",
      testo: `La Dieta Mediterranea si basa su un modello alimentare equilibrato che privilegia alimenti vegetali, olio extravergine d’oliva, cereali integrali, legumi, frutta e verdura di stagione.
      È riconosciuta dall’UNESCO come patrimonio immateriale dell’umanità per il suo valore salutare e culturale.`,
    },
    {
      id: 2,
      titolo: "Benefici reali",
      testo: `Numerosi studi scientifici hanno dimostrato che la Dieta Mediterranea riduce il rischio di malattie cardiovascolari, diabete di tipo 2 e alcune forme di cancro.
      Migliora il metabolismo lipidico e glucidico e favorisce la longevità, grazie all’azione antiossidante e antinfiammatoria dei nutrienti.`,
    },
    {
      id: 3,
      titolo: "Criticità o rischi da abuso",
      testo: `Pur essendo tra i modelli alimentari più sani, può perdere efficacia se interpretata in modo eccessivamente calorico (porzioni abbondanti, troppi carboidrati o condimenti).
      È importante mantenere equilibrio e varietà, evitando l’abuso di prodotti raffinati o dolci industriali.`,
    },
    {
      id: 4,
      titolo: "Approccio consapevole",
      testo: `Seguire la Dieta Mediterranea in modo consapevole significa comprendere il valore degli alimenti e delle porzioni, rispettare la stagionalità e adottare uno stile di vita attivo.
      È un modello sostenibile non solo per il corpo, ma anche per l’ambiente e la società.`,
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
      <h1
        style={{
          textAlign: "center",
          color: theme.colori.accento,
          marginBottom: "1rem",
          fontSize: "1.5rem",
          textShadow: "0 1px 3px rgba(0,0,0,0.3)",
        }}
      >
        🥗 Dieta Mediterranea Pro
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Esplora i principi, benefici e criticità della Dieta Mediterranea in chiave
        consapevole e scientifica.
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
