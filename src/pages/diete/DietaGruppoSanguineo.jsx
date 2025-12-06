// 🧩 DietaGruppoSanguineo.jsx — versione Pro dinamica con capitoli espandibili
// 🩸 Struttura coerente con le altre diete principali (Pro)

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import BottoneIndietro1 from "../../components/BottoneIndietro1";
import { theme } from "../../theme";

export default function DietaGruppoSanguineo() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sezioni = [
    {
      id: 1,
      titolo: "Introduzione",
      testo: `La Dieta del Gruppo Sanguineo si basa sull’idea che le persone con gruppi sanguigni diversi
(A, B, AB, 0) metabolizzino in modo differente gli alimenti.
Ideata dal naturopata Peter D’Adamo, propone piani alimentari personalizzati
che mirano a migliorare la digestione, la salute e la vitalità.`,
    },
    {
      id: 2,
      titolo: "Principi fondamentali",
      testo: `🧬 Ogni gruppo sanguigno reagirebbe diversamente ai nutrienti a causa di specifiche lectine
(proteine che si legano ai globuli rossi), influenzando il metabolismo e il sistema immunitario.

📋 Obiettivo:
Evitare gli alimenti che causano reazioni negative per il proprio gruppo
e privilegiare quelli più compatibili.`,
    },
    {
      id: 3,
      titolo: "Gruppo 0 – Il Cacciatore",
      testo: `🥩 Caratteristiche:
- Metabolismo efficiente per proteine animali  
- Predilige carne magra, pesce e verdure  
- Evita cereali, legumi e latticini

✅ Alimenti consigliati:
carne rossa magra, pesce, verdure a foglia verde, olio d’oliva

⚠️ Da limitare:
grano, mais, fagioli, latte e derivati`,
    },
    {
      id: 4,
      titolo: "Gruppo A – Il Coltivatore",
      testo: `🥗 Caratteristiche:
- Sistema digestivo sensibile, tende a preferire alimenti vegetali  
- Beneficia di una dieta vegetariana o semi-vegetariana

✅ Alimenti consigliati:
verdure, legumi, cereali integrali, frutta, tofu

⚠️ Da limitare:
carne rossa, latticini e cibi fritti`,
    },
    {
      id: 5,
      titolo: "Gruppo B – Il Nomade",
      testo: `🥛 Caratteristiche:
- Flessibile e con buona tolleranza ai latticini  
- Beneficia di una dieta equilibrata con carne bianca, pesce, uova e verdure

✅ Alimenti consigliati:
latte, yogurt, agnello, pesce, verdure a foglia verde

⚠️ Da limitare:
pollo, mais, arachidi, pomodori`,
    },
    {
      id: 6,
      titolo: "Gruppo AB – Il Misterioso",
      testo: `🍇 Caratteristiche:
- Combina tratti dei gruppi A e B  
- Tollera moderatamente carne e latticini, ma deve evitarne gli eccessi

✅ Alimenti consigliati:
pesce, tofu, verdure, cereali integrali

⚠️ Da limitare:
carne rossa, fagioli e semi`,
    },
    {
      id: 7,
      titolo: "Punti di forza",
      testo: `✅ Stimola un’alimentazione più consapevole  
✅ Incentiva l’uso di cibi freschi e naturali  
✅ Aumenta la varietà e la personalizzazione della dieta`,
    },
    {
      id: 8,
      titolo: "Criticità",
      testo: `⚠️ Scarse prove scientifiche a supporto  
⚠️ Può portare a squilibri nutrizionali se seguita rigidamente  
⚠️ Alcune restrizioni possono essere eccessive o ingiustificate`,
    },
    {
      id: 9,
      titolo: "Suggerimenti pratici",
      testo: `📊 Utilizza la dieta come linea guida, non come regola assoluta  
🥗 Mantieni varietà e equilibrio  
🩸 Consulta un nutrizionista per verificare carenze o eccessi  
💧 Bevi molta acqua e mantieni una routine alimentare regolare`,
    },
    {
      id: 10,
      titolo: "Conclusione",
      testo: `La Dieta del Gruppo Sanguineo offre un approccio personalizzato all’alimentazione,
ma deve essere interpretata con flessibilità e senso critico.
Può essere un punto di partenza per conoscere meglio il proprio corpo,
ma non sostituisce le linee guida scientifiche nutrizionali.`,
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
        🩸 Dieta per Gruppo Sanguineo
      </h1>
      <p
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "rgba(255,255,255,0.8)",
        }}
      >
        Un modello nutrizionale personalizzato che propone alimenti specifici
        in base al gruppo sanguigno e al metabolismo individuale.
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
