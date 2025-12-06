// 🧩 DietaPaleo.jsx — versione Pro dinamica con capitoli espandibili
// 🦴 Basata sul modello Mediterranea/Zona/Chetogenica

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import BottoneIndietro1 from "../../components/BottoneIndietro1";
import { theme } from "../../theme";

export default function DietaPaleo() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sezioni = [
    {
      id: 1,
      titolo: "Introduzione",
      testo: `La Dieta Paleo, abbreviazione di “Paleolitica”, si ispira
all’alimentazione dei nostri antenati cacciatori-raccoglitori.
L’idea alla base è che il corpo umano sia geneticamente più adatto
a consumare cibi naturali e non trasformati, come quelli disponibili
prima della rivoluzione agricola.`,
    },
    {
      id: 2,
      titolo: "Principi fondamentali",
      testo: `🥩 Alimenti consentiti:
- Carne e pesce freschi
- Frutta e verdura di stagione
- Frutta secca, semi e radici
- Uova e olio extravergine d’oliva

🚫 Da evitare:
- Cereali e legumi
- Latticini
- Zuccheri raffinati
- Prodotti industriali o altamente processati`,
    },
    {
      id: 3,
      titolo: "Punti di forza",
      testo: `✅ Favorisce la riduzione di alimenti industriali  
✅ Migliora la sensibilità insulinica  
✅ Può aiutare nella perdita di peso  
✅ Ricca di fibre, antiossidanti e micronutrienti naturali  
✅ Aiuta a stabilizzare i livelli di energia durante la giornata`,
    },
    {
      id: 4,
      titolo: "Possibili criticità",
      testo: `⚠️ Può risultare costosa e poco sostenibile a lungo termine  
⚠️ Esclude interi gruppi alimentari (come i cereali integrali)  
⚠️ Rischio di eccesso di proteine animali e grassi saturi  
⚠️ Difficoltà sociali e pratiche nel seguirla rigorosamente`,
    },
    {
      id: 5,
      titolo: "Suggerimenti pratici",
      testo: `🍖 Scegli carni magre e di buona qualità (preferibilmente biologiche)  
🥦 Varia spesso le verdure e i tipi di frutta  
🥜 Usa frutta secca con moderazione  
🧂 Riduci il sale e preferisci spezie ed erbe aromatiche  
🏃‍♂️ Associa sempre attività fisica regolare e riposo adeguato`,
    },
    {
      id: 6,
      titolo: "Adattamenti moderni",
      testo: `Molte versioni moderne della Dieta Paleo consentono
alcuni alimenti “di confine”, come il riso integrale o i latticini fermentati.
L’obiettivo è mantenere i principi di naturalità e qualità,
senza rigidità eccessive.`,
    },
    {
      id: 7,
      titolo: "Conclusione",
      testo: `La Dieta Paleo incoraggia un ritorno a un’alimentazione semplice e genuina.
Pur avendo solide basi nel miglioramento della qualità del cibo,
va adattata alle esigenze individuali per mantenere equilibrio e sostenibilità.`,
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
        🦴 Dieta Paleo
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Un ritorno alle origini: un’alimentazione naturale, semplice
        e basata su cibi non industriali, per riscoprire equilibrio e salute.
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
