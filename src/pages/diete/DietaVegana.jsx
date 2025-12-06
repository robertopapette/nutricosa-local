// 🧩 DietaVegana.jsx — versione Pro dinamica con capitoli espandibili
// 🌱 Struttura coerente con le altre diete principali

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import BottoneIndietro1 from "../../components/BottoneIndietro1";
import { theme } from "../../theme";

export default function DietaVegana() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sezioni = [
    {
      id: 1,
      titolo: "Introduzione",
      testo: `La Dieta Vegana è un modello alimentare che esclude completamente
tutti gli alimenti di origine animale, compresi latticini, uova e miele.
Si basa sull’uso esclusivo di ingredienti vegetali e rappresenta
una scelta etica, ambientale e salutistica per molti.`,
    },
    {
      id: 2,
      titolo: "Principi fondamentali",
      testo: `🥦 Alimenti fondamentali:
- Frutta e verdura fresca  
- Legumi, cereali integrali e pseudocereali (quinoa, amaranto, miglio)  
- Semi oleosi e frutta secca  
- Oli vegetali di qualità (oliva, lino, canapa)

🚫 Esclusi:
- Carne, pesce, latticini, uova e miele  
- Prodotti che contengono derivati animali (gelatina, caseina, ecc.)`,
    },
    {
      id: 3,
      titolo: "Punti di forza",
      testo: `✅ Altamente ricca di fibre, antiossidanti e fitonutrienti  
✅ Ridotto apporto di grassi saturi  
✅ Aiuta a migliorare i parametri cardiovascolari  
✅ Sostenibile per l’ambiente e rispettosa degli animali  
✅ Favorisce la leggerezza e la depurazione dell’organismo`,
    },
    {
      id: 4,
      titolo: "Possibili criticità",
      testo: `⚠️ Rischio di carenze di vitamina B12, ferro, zinco e omega-3  
⚠️ Possibili squilibri proteici se non ben pianificata  
⚠️ Difficoltà nel coprire il fabbisogno calorico in alcune persone  
⚠️ Richiede attenzione e conoscenze nutrizionali di base`,
    },
    {
      id: 5,
      titolo: "Suggerimenti pratici",
      testo: `🥗 Combina legumi e cereali per ottenere proteine complete  
🥬 Consuma abbondante verdura a foglia verde per il ferro vegetale  
🍊 Abbina fonti di vitamina C per favorire l’assorbimento del ferro  
🥥 Integra la B12 e, se necessario, omega-3 da alghe  
🫒 Usa oli spremuti a freddo e cibi integrali per equilibrio energetico`,
    },
    {
      id: 6,
      titolo: "Aspetti etici e ambientali",
      testo: `Molti scelgono la Dieta Vegana per motivi etici, rifiutando
lo sfruttamento animale e promuovendo una cultura di rispetto e compassione.
Dal punto di vista ambientale, riduce drasticamente le emissioni di gas serra
e il consumo di risorse naturali rispetto alle diete onnivore.`,
    },
    {
      id: 7,
      titolo: "Conclusione",
      testo: `La Dieta Vegana può essere un potente strumento di salute e cambiamento,
a patto che sia seguita con consapevolezza e bilanciamento.
Richiede conoscenza e impegno, ma può portare grandi benefici
al corpo, alla mente e al pianeta.`,
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
        🌿 Dieta Vegana
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Un modello alimentare basato interamente su prodotti vegetali,
        etico, sostenibile e salutare, da seguire con equilibrio e consapevolezza.
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
