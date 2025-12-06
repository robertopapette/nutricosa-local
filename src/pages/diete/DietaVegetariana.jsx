// 🧩 DietaVegetariana.jsx — versione Pro dinamica con capitoli espandibili
// 🌿 Struttura coerente con Mediterranea, Zona, Chetogenica e Paleo

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import BottoneIndietro1 from "../../components/BottoneIndietro1";
import { theme } from "../../theme";

export default function DietaVegetariana() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sezioni = [
    {
      id: 1,
      titolo: "Introduzione",
      testo: `La Dieta Vegetariana esclude la carne e il pesce, ma include alimenti di origine vegetale
e in alcune varianti anche derivati animali come latte, uova e miele.
Si basa su un principio di rispetto per gli animali, per l’ambiente e per la salute umana.`,
    },
    {
      id: 2,
      titolo: "Principi fondamentali",
      testo: `🌾 Alimenti principali:
- Verdura e frutta fresca di stagione  
- Legumi, cereali integrali e semi oleosi  
- Latte, yogurt e uova (nelle varianti latto-ovo)  
- Oli vegetali di qualità, come l’extravergine d’oliva

🚫 Esclusi:
- Tutte le carni rosse e bianche  
- Pesce e crostacei  
- Grassi animali (strutto, lardo)`,
    },
    {
      id: 3,
      titolo: "Varianti principali",
      testo: `📘 Lacto-vegetariana → include latte e derivati, ma esclude uova  
📗 Ovo-vegetariana → include uova, ma non latte e derivati  
📙 Lacto-ovo-vegetariana → include entrambi  
📒 Pescetariana → include anche il pesce (variante flessibile)`,
    },
    {
      id: 4,
      titolo: "Punti di forza",
      testo: `✅ Ricca di fibre, vitamine e antiossidanti  
✅ Ridotto apporto di grassi saturi  
✅ Maggiore equilibrio intestinale e benessere digestivo  
✅ Ridotto impatto ambientale e sostenibilità etica`,
    },
    {
      id: 5,
      titolo: "Possibili criticità",
      testo: `⚠️ Rischio di carenza di vitamina B12, ferro e omega-3  
⚠️ Necessità di bilanciare correttamente le proteine vegetali  
⚠️ Attenzione all’eccesso di carboidrati raffinati o formaggi`,
    },
    {
      id: 6,
      titolo: "Suggerimenti pratici",
      testo: `🥗 Combina legumi e cereali per ottenere proteine complete  
🥦 Varia il più possibile frutta e verdura  
🥚 Se consentito, usa uova e latticini con moderazione  
🫒 Usa olio d’oliva a crudo come principale fonte di grassi  
💊 Considera l’integrazione di vitamina B12 se necessario`,
    },
    {
      id: 7,
      titolo: "Conclusione",
      testo: `La Dieta Vegetariana è un modello alimentare sostenibile e salutare,
a patto che venga pianificata con attenzione e varietà.
Favorisce il benessere del corpo e il rispetto per la vita animale e l’ambiente.`,
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
        🌱 Dieta Vegetariana
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Un’alimentazione etica e naturale che promuove salute, equilibrio
        e rispetto per l’ambiente e gli animali.
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
