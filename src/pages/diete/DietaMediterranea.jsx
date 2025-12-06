// 🧩 DietaMediterranea.jsx — versione Pro con capitoli espandibili
// 🌿 Ora aggiornata con BottoneIndietro1 (ritorno a Diete famose)

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import BottoneIndietro1 from "../../components/BottoneIndietro1";
import { theme } from "../../theme";

export default function DietaMediterranea() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sezioni = [
    {
      id: 1,
      titolo: "Introduzione",
      testo: `La Dieta Mediterranea è riconosciuta a livello mondiale
come uno dei modelli alimentari più equilibrati e salutari.
Ispirata alle tradizioni culinarie dei paesi che si affacciano sul Mediterraneo,
si basa su alimenti freschi, di stagione e poco trasformati.

Nel 2010 è stata dichiarata dall’UNESCO Patrimonio Culturale Immateriale dell’Umanità
per il suo valore nutrizionale, culturale e sociale.`,
    },
    {
      id: 2,
      titolo: "Principi fondamentali",
      testo: `🍞 Ampio consumo di cereali integrali, frutta e verdura  
🫒 Olio extravergine d’oliva come principale fonte di grassi  
🐟 Pesce, legumi e frutta secca come proteine privilegiate  
🍗 Moderato consumo di carne bianca, latticini e uova  
🚫 Ridotto apporto di carne rossa e prodotti industriali  
🍷 Vino rosso con moderazione e solo ai pasti (per adulti)`,
    },
    {
      id: 3,
      titolo: "Piramide alimentare",
      testo: `La piramide della Dieta Mediterranea pone alla base
frutta, verdura, cereali integrali e legumi, da consumare quotidianamente.
Seguono pesce e pollame, mentre carne rossa e dolci si trovano in cima,
da assumere solo saltuariamente.`,
    },
    {
      id: 4,
      titolo: "Benefici per la salute",
      testo: `✅ Riduzione del rischio cardiovascolare  
✅ Controllo glicemico e del colesterolo LDL  
✅ Effetto antinfiammatorio naturale  
✅ Maggiore longevità e benessere psicofisico  
✅ Miglior digestione e vitalità quotidiana`,
    },
    {
      id: 5,
      titolo: "Aspetti culturali e sociali",
      testo: `La Dieta Mediterranea è anche cultura, convivialità e rispetto dell’ambiente.
Promuove il piacere della tavola, la condivisione e il consumo consapevole.
Mangiare bene significa vivere bene, in armonia con la natura e con se stessi.`,
    },
    {
      id: 6,
      titolo: "Suggerimenti pratici",
      testo: `🥗 Scegli alimenti freschi e locali  
🥖 Preferisci pane e pasta integrali  
🫒 Usa olio d’oliva a crudo  
🍅 Varia spesso frutta e verdura  
🐟 Consuma pesce 2–3 volte a settimana  
💧 Bevi acqua durante il giorno  
😄 Mangia lentamente e in compagnia`,
    },
    {
      id: 7,
      titolo: "Conclusione",
      testo: `La Dieta Mediterranea è molto più di una dieta:
è un autentico stile di vita che unisce gusto, salute e sostenibilità.
Rappresenta un equilibrio perfetto tra corpo, mente e natura.`,
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
      {/* 🔙 Freccia torna a Diete famose */}
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
        🫒 Dieta Mediterranea
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Il modello alimentare più equilibrato al mondo, basato su semplicità,
        stagionalità e benessere duraturo.
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
