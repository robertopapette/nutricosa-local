// 🧩 DietaZona.jsx — versione corretta con BottoneIndietro1 e sezioni complete

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import BottoneIndietro1 from "../../components/BottoneIndietro1";
import { theme } from "../../theme";

export default function DietaZona() {
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (id) => setOpenSection(openSection === id ? null : id);

  const sezioni = [
    {
      id: 1,
      titolo: "Introduzione",
      testo: `La Dieta Zona è stata sviluppata dal biochimico americano Barry Sears
e si basa sul mantenimento di un equilibrio ormonale ottimale,
regolando il rapporto tra carboidrati, proteine e grassi in ogni pasto.
L’obiettivo è ridurre l’infiammazione sistemica e migliorare il benessere metabolico.`,
    },
    {
      id: 2,
      titolo: "Principi fondamentali",
      testo: `Il concetto chiave della Zona è mantenere un equilibrio costante tra:
- 40% carboidrati (a basso indice glicemico)
- 30% proteine magre
- 30% grassi “buoni”

Questo equilibrio ormonale favorisce la stabilità glicemica,
un’energia costante e un miglior controllo del peso corporeo.`,
    },
    {
      id: 3,
      titolo: "Punti di forza",
      testo: `✅ Migliore concentrazione mentale  
✅ Riduzione dei picchi glicemici e della fame improvvisa  
✅ Maggiore sensibilità insulinica  
✅ Effetto anti-infiammatorio generale  
✅ Migliore composizione corporea nel lungo periodo`,
    },
    {
      id: 4,
      titolo: "Possibili criticità",
      testo: `⚠️ Difficoltà iniziale nel calcolo preciso dei macronutrienti  
⚠️ Rischio di ridurre troppo i carboidrati rispetto al fabbisogno reale  
⚠️ Complessità nella pianificazione dei pasti quotidiani`,
    },
    {
      id: 5,
      titolo: "Suggerimenti pratici",
      testo: `🍽️ Scegli proteine magre come pollo, pesce e albumi  
🥦 Accompagna ogni pasto con verdure a basso indice glicemico  
🥑 Usa grassi buoni come olio EVO, avocado e frutta secca  
🕐 Mangia ogni 4–5 ore per mantenere costante la “zona metabolica”`,
    },
    {
      id: 6,
      titolo: "Conclusione",
      testo: `La Dieta Zona non è una dieta restrittiva ma un metodo per
gestire i pasti in modo consapevole, mantenendo equilibrio
tra mente, corpo e metabolismo.`,
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
        ⚖️ Dieta Zona
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Scopri come mantenere l’equilibrio metabolico e ormonale
        con la giusta proporzione tra carboidrati, proteine e grassi.
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
                whiteSpace: "pre-line",
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
