// 🧩 DietaDigiunoIntermittente.jsx — versione Pro dinamica con capitoli espandibili
// ⏳ Struttura coerente con Mediterranea, Zona, Chetogenica, Paleo, Vegetariana e Vegana

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import BottoneIndietro1 from "../../components/BottoneIndietro1";
import { theme } from "../../theme";

export default function DietaDigiunoIntermittente() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sezioni = [
    {
      id: 1,
      titolo: "Introduzione",
      testo: `Il Digiuno Intermittente (Intermittent Fasting) non è una dieta nel senso classico,
ma un modello alimentare che alterna periodi di digiuno a periodi di alimentazione.
L’obiettivo è migliorare il metabolismo, ottimizzare la gestione energetica
e favorire la rigenerazione cellulare.`,
    },
    {
      id: 2,
      titolo: "Principi fondamentali",
      testo: `🕐 Struttura del digiuno:
- 16/8 → Digiuno di 16 ore, alimentazione in una finestra di 8 ore  
- 5:2 → 5 giorni normali, 2 giorni di restrizione calorica (500-600 kcal)  
- 24 ore → Digiuno completo una o due volte a settimana  

🍎 Durante la finestra alimentare:
- Prediligere alimenti integrali, proteine magre, grassi buoni e verdure  
- Evitare zuccheri raffinati e cibi processati  
- Idratazione costante durante tutto il giorno`,
    },
    {
      id: 3,
      titolo: "Benefici principali",
      testo: `✅ Favorisce il dimagrimento senza perdita di massa magra  
✅ Migliora la sensibilità insulinica  
✅ Riduce infiammazione e stress ossidativo  
✅ Può aumentare la chiarezza mentale e l’energia  
✅ Promuove l’autofagia (rigenerazione cellulare)`,
    },
    {
      id: 4,
      titolo: "Possibili criticità",
      testo: `⚠️ Può causare stanchezza o irritabilità nei primi giorni  
⚠️ Non adatto a persone con disturbi alimentari o diabete senza supervisione  
⚠️ Rischio di abbuffate nella finestra alimentare  
⚠️ Può influire sul ciclo mestruale se non ben gestito`,
    },
    {
      id: 5,
      titolo: "Suggerimenti pratici",
      testo: `🥗 Inizia gradualmente aumentando le ore di digiuno  
💧 Bevi molta acqua, tisane o caffè non zuccherato  
🍳 Durante i pasti scegli cibi nutrienti e sazianti  
😴 Dormi regolarmente per massimizzare i benefici  
💪 Associa attività fisica leggera durante il digiuno`,
    },
    {
      id: 6,
      titolo: "Adattabilità e flessibilità",
      testo: `Il Digiuno Intermittente è un modello molto personalizzabile.
Non esiste un protocollo “migliore”, ma è importante ascoltare il proprio corpo
e adattare orari e modalità al proprio stile di vita.`,
    },
    {
      id: 7,
      titolo: "Conclusione",
      testo: `Il Digiuno Intermittente può essere un potente strumento di salute,
ma va approcciato con consapevolezza e gradualità.
Non è una gara di resistenza, ma un percorso di equilibrio tra corpo e mente.`,
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
        ⏳ Dieta del Digiuno Intermittente
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Un approccio flessibile e scientificamente supportato
        per migliorare metabolismo, salute cellulare e benessere generale.
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
