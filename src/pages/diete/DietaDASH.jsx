// 🧩 DietaDASH.jsx — versione Pro dinamica con capitoli espandibili
// 🫀 Struttura coerente con le altre diete principali (Pro)

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import BottoneIndietro1 from "../../components/BottoneIndietro1";
import { theme } from "../../theme";

export default function DietaDASH() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sezioni = [
    {
      id: 1,
      titolo: "Introduzione",
      testo: `La Dieta DASH (Dietary Approaches to Stop Hypertension) è stata sviluppata
dal National Heart, Lung and Blood Institute per contrastare l’ipertensione arteriosa.
Si basa su un’alimentazione equilibrata, povera di sodio, ma ricca di frutta,
verdura, cereali integrali e proteine magre.`,
    },
    {
      id: 2,
      titolo: "Principi fondamentali",
      testo: `🥦 Al centro del piano alimentare DASH ci sono:
- Verdura e frutta in abbondanza  
- Cereali integrali  
- Latticini a basso contenuto di grassi  
- Pesce, pollame e legumi come principali fonti proteiche  
- Limitazione di zuccheri aggiunti, carni rosse e grassi saturi  

🧂 Obiettivo chiave: ridurre l’assunzione di sodio (sale) per migliorare la pressione arteriosa.`,
    },
    {
      id: 3,
      titolo: "Benefici principali",
      testo: `✅ Riduzione della pressione arteriosa  
✅ Miglior controllo dei livelli di colesterolo  
✅ Prevenzione di malattie cardiovascolari  
✅ Favorisce la perdita di peso in modo naturale  
✅ Migliora la sensibilità insulinica`,
    },
    {
      id: 4,
      titolo: "Schema alimentare indicativo",
      testo: `🍽️ Esempio giornaliero:
- 4-5 porzioni di frutta  
- 4-5 porzioni di verdura  
- 6-8 porzioni di cereali integrali  
- 2-3 porzioni di latticini magri  
- 2 o meno porzioni di carne magra, pesce o pollame  
- 4-5 porzioni a settimana di frutta secca o legumi  
- <1 cucchiaino di sale al giorno`,
    },
    {
      id: 5,
      titolo: "Punti di forza",
      testo: `✅ Supportata da solide evidenze scientifiche  
✅ Migliora salute cardiovascolare e metabolismo  
✅ Dieta sostenibile e facilmente adattabile  
✅ Adatta a tutta la famiglia`,
    },
    {
      id: 6,
      titolo: "Possibili criticità",
      testo: `⚠️ Può risultare impegnativa per chi è abituato a un’alimentazione ricca di sale  
⚠️ Alcune persone possono percepire un calo energetico iniziale  
⚠️ Necessità di pianificare i pasti per mantenere varietà e gusto`,
    },
    {
      id: 7,
      titolo: "Suggerimenti pratici",
      testo: `🥗 Riduci gradualmente il sale per abituare il palato  
🥛 Preferisci latticini parzialmente scremati  
🍋 Usa erbe aromatiche e spezie al posto del sale  
🥖 Scegli prodotti integrali e poveri di sodio  
🚶‍♂️ Abbina attività fisica regolare e idratazione costante`,
    },
    {
      id: 8,
      titolo: "Conclusione",
      testo: `La Dieta DASH è uno dei modelli alimentari più raccomandati a livello mondiale
per la salute cardiovascolare. È equilibrata, varia e sostenibile nel lungo periodo.
Ideale per chi cerca una strategia nutrizionale basata sull’equilibrio e la prevenzione.`,
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
        🫀 Dieta DASH
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Un piano alimentare equilibrato e ricco di nutrienti, ideato per prevenire e controllare
        l’ipertensione e migliorare la salute cardiovascolare complessiva.
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
