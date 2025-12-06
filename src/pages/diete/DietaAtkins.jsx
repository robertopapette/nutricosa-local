// 🧩 DietaAtkins.jsx — versione Pro dinamica con capitoli espandibili
// 🧬 Struttura coerente con tutte le altre diete principali (Pro)

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import BottoneIndietro1 from "../../components/BottoneIndietro1";
import { theme } from "../../theme";

export default function DietaAtkins() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sezioni = [
    {
      id: 1,
      titolo: "Introduzione",
      testo: `La Dieta Atkins è un regime alimentare a basso contenuto di carboidrati,
ideato dal dottor Robert Atkins negli anni ’70.
Si basa sull’idea che riducendo drasticamente i carboidrati e aumentando
le proteine e i grassi buoni, il corpo entri in uno stato di chetosi,
bruciando i grassi come principale fonte di energia.`,
    },
    {
      id: 2,
      titolo: "Principi fondamentali",
      testo: `🥩 Riduzione drastica dei carboidrati (a volte fino a 20g al giorno nella prima fase)  
🥚 Aumento di proteine e grassi “buoni” (carne, pesce, uova, avocado, olio d’oliva)  
🥦 Introduzione graduale di verdure a basso indice glicemico  
📉 Obiettivo: stimolare il metabolismo e favorire la perdita di peso rapida mantenendo il senso di sazietà.`,
    },
    {
      id: 3,
      titolo: "Le quattro fasi della dieta Atkins",
      testo: `1️⃣ **Induzione** (2 settimane): massimo 20g di carboidrati netti al giorno  
2️⃣ **Bilanciamento**: si reintroducono gradualmente alcuni carboidrati buoni (verdure, frutta secca, bacche)  
3️⃣ **Pre-mantenimento**: si stabilisce la quantità di carboidrati che non fa aumentare di peso  
4️⃣ **Mantenimento**: dieta equilibrata, stabile, con attenzione al bilancio energetico e alla qualità degli alimenti.`,
    },
    {
      id: 4,
      titolo: "Benefici principali",
      testo: `✅ Perdita di peso rapida e visibile  
✅ Controllo della fame e stabilità della glicemia  
✅ Maggiore energia e concentrazione  
✅ Riduzione dei trigliceridi e miglioramento del profilo lipidico`,
    },
    {
      id: 5,
      titolo: "Possibili effetti collaterali",
      testo: `⚠️ Nausea, stanchezza e mal di testa nei primi giorni (chetosi iniziale)  
⚠️ Rischio di carenze di fibre, vitamine e minerali se non bilanciata  
⚠️ Eccesso di proteine può sovraccaricare reni e fegato  
⚠️ Odore di acetone nel respiro durante le prime settimane`,
    },
    {
      id: 6,
      titolo: "Alimenti consigliati",
      testo: `🥗 Carni magre, pesce, uova  
🥦 Verdure a foglia verde, zucchine, broccoli, cavolfiori  
🥑 Grassi buoni: avocado, olio d’oliva, frutta secca  
🧀 Formaggi stagionati e burro con moderazione  
💧 Acqua, tè verde, tisane (no zuccheri aggiunti)`,
    },
    {
      id: 7,
      titolo: "Alimenti da evitare",
      testo: `🍞 Pane, pasta, riso, dolci, zuccheri raffinati  
🥔 Patate, legumi, cereali integrali  
🥤 Bevande zuccherate, alcolici, birra  
🍬 Tutti i prodotti industriali o ultraprocessati`,
    },
    {
      id: 8,
      titolo: "Suggerimenti pratici",
      testo: `📅 Inizia con gradualità e monitora la risposta del tuo corpo  
🥑 Preferisci grassi “buoni” e proteine di alta qualità  
🥦 Integra verdure a basso indice glicemico in ogni pasto  
💧 Mantieni un’adeguata idratazione  
🩺 Consulta un nutrizionista prima di intraprendere un regime prolungato`,
    },
    {
      id: 9,
      titolo: "Conclusione",
      testo: `La Dieta Atkins può essere un efficace strumento per la perdita di peso e il controllo metabolico,
ma richiede equilibrio, consapevolezza e personalizzazione.
È ideale come piano temporaneo o ciclico, non come stile alimentare permanente.`,
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
        🧬 Dieta Atkins
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Un approccio a basso contenuto di carboidrati, ideato per stimolare la chetosi e
        favorire una perdita di peso rapida e controllata.
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
