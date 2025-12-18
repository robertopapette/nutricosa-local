import React, { useState } from "react";
import PageContainer from "../components/PageContainer";
import dieteData from "../data/diete.json";

// === MOCK DATI ALIMENTI (versione aggiornata) ===
const mockAlimenti = [
  {
    id: 1,
    nome: "Petto di pollo",
    diete_compatibili: ["Zona", "Mediterranea", "Paleo"],
    allergeni: [],
    macro: "Proteine",
    colore: "grigio",
  },
  {
    id: 2,
    nome: "Pane integrale",
    diete_compatibili: ["Mediterranea", "Zona"],
    allergeni: ["Glutine"],
    macro: "Carboidrati",
    colore: "grigio",
  },
  {
    id: 3,
    nome: "Latte vaccino",
    diete_compatibili: ["Vegetariana"],
    allergeni: ["Lattosio"],
    macro: "Lipidi",
    colore: "grigio",
  },
  {
    id: 4,
    nome: "Salmone",
    diete_compatibili: ["Paleo", "Mediterranea"],
    allergeni: ["Pesce"],
    macro: "Proteine",
    colore: "grigio",
  },
  {
    id: 5,
    nome: "Mandorle",
    diete_compatibili: ["Vegana", "Vegetariana", "Zona"],
    allergeni: ["Frutta secca"],
    macro: "Lipidi",
    colore: "grigio",
  },
  {
    id: 6,
    nome: "Tofu",
    diete_compatibili: ["Vegana", "Zona"],
    allergeni: ["Soia"],
    macro: "Proteine",
    colore: "grigio",
  },
  {
    id: 7,
    nome: "Riso basmati",
    diete_compatibili: ["Mediterranea", "Zona", "Chetogenica"],
    allergeni: [],
    macro: "Carboidrati",
    colore: "grigio",
  },
  {
    id: 8,
    nome: "Uovo",
    diete_compatibili: ["Zona", "Mediterranea", "Vegetariana"],
    allergeni: ["Uova"],
    macro: "Proteine",
    colore: "grigio",
  },
];

// === LISTE BASE ===
const dieteDisponibili = ["Nessuna", ...dieteData];
const intolleranzeDisponibili = ["Nessuna", "Glutine", "Lattosio", "Uova", "Soia", "Frutta secca"];
const allergeniDisponibili = ["Nessuno", "Pesce", "Crostacei", "Arachidi", "Sedano"];
const macroDisponibili = ["Tutti", "Proteine", "Carboidrati", "Lipidi"];

export default function Calcolatore() {
  const [dieta, setDieta] = useState("Nessuna");
  const [intolleranza, setIntolleranza] = useState("Nessuna");
  const [allergene, setAllergene] = useState("Nessuno");
  const [macro, setMacro] = useState("Tutti");
  const [ricerca, setRicerca] = useState("");
  const [mostraEsclusi, setMostraEsclusi] = useState(false);

  // === FILTRO ALIMENTI (aggiornato) ===
  const filtra = () =>
    mockAlimenti.filter((a) => {
      const dietaOk =
        dieta === "Nessuna" || a.diete_compatibili.includes(dieta);
      const intOk =
        intolleranza === "Nessuna" || a.allergeni.includes(intolleranza);
      const allOk =
        allergene === "Nessuno" || a.allergeni.includes(allergene);
      const macroOk = macro === "Tutti" || a.macro === macro;
      const ricercaOk = a.nome.toLowerCase().includes(ricerca.toLowerCase());
      return mostraEsclusi
        ? ricercaOk
        : dietaOk && intOk && allOk && macroOk && ricercaOk;
    });

  const alimenti = filtra();

  const coloreBadge = (colore) =>
    colore === "verde"
      ? "#22c55e"
      : colore === "giallo"
      ? "#eab308"
      : colore === "rosso"
      ? "#ef4444"
      : "#999";

  return (
    <PageContainer
      titolo="CSU Nutrition Spiral"
      sottotitolo="Filtra alimenti per dieta, intolleranze, allergeni e macro"
    >
      <div style={{ padding: "1.5rem" }}>
        {/* --- FILTRI SU UNA RIGA --- */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.8rem",
            marginBottom: "1.5rem",
          }}
        >
          <FiltroSelect label="Dieta" lista={dieteDisponibili} valore={dieta} setValore={setDieta} />
          <FiltroSelect label="Intolleranze" lista={intolleranzeDisponibili} valore={intolleranza} setValore={setIntolleranza} />
          <FiltroSelect label="Allergeni" lista={allergeniDisponibili} valore={allergene} setValore={setAllergene} />
          <FiltroSelect label="Macro" lista={macroDisponibili} valore={macro} setValore={setMacro} />
        </div>

        {/* --- RICERCA --- */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "1.5rem",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            value={ricerca}
            onChange={(e) => setRicerca(e.target.value)}
            placeholder="Cerca alimento..."
            style={{
              flex: 1,
              maxWidth: "400px",
              padding: "0.6rem 1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
          <button
            onClick={() => setMostraEsclusi(!mostraEsclusi)}
            style={{
              padding: "0.6rem 1rem",
              borderRadius: "8px",
              background: mostraEsclusi ? "#16a34a" : "#2563eb",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            {mostraEsclusi ? "Nascondi esclusi" : "Mostra esclusi"}
          </button>
        </div>

        {/* --- RISULTATI --- */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
          }}
        >
          {alimenti.map((a) => (
            <div
              key={a.id}
              style={{
                border: `2px solid ${coloreBadge(a.colore)}`,
                borderRadius: "10px",
                padding: "1rem",
                background: "rgba(255,255,255,0.85)",
                textAlign: "center",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ marginBottom: "0.5rem" }}>{a.nome}</h3>
              <p style={{ fontSize: "0.85rem", color: "#555" }}>
                Diete compatibili: {a.diete_compatibili.join(", ")}
              </p>
              <span
                style={{
                  backgroundColor: coloreBadge(a.colore),
                  color: "#fff",
                  padding: "0.25rem 0.6rem",
                  borderRadius: "6px",
                  fontSize: "0.8rem",
                }}
              >
                {a.macro}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PageContainer>
  );
}

// === COMPONENTE FILTRO GENERICO ===
function FiltroSelect({ label, lista, valore, setValore }) {
  return (
    <div style={{ flex: "0 1 auto", textAlign: "left" }}>
      <label
        style={{
          display: "block",
          fontWeight: "600",
          marginBottom: "0.3rem",
          fontSize: "0.9rem",
        }}
      >
        {label}
      </label>
      <select
        value={valore}
        onChange={(e) => setValore(e.target.value)}
        style={{
          display: "inline-block",
          width: "auto",
          minWidth: "100px",
          maxWidth: "220px",
          padding: "0.45rem 0.6rem",
          borderRadius: "8px",
          border: "1px solid #bbb",
          fontSize: "0.9rem",
          whiteSpace: "nowrap",
        }}
      >
        {lista.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
