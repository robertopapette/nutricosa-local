import React, { useState, useEffect } from "react";
import PageContainer from "../components/PageContainer";
import { useNavigate, useLocation } from "react-router-dom";
import { useRef } from "react";

import {
  getProfili,
  setProfili,
  creaProfilo,
  eliminaProfilo,
  selezionaProfilo,
  getProfiloAttivo,
} from "../utils/profili";
import { config } from "../config";

export default function ChiSeiTu() {
  const navigate = useNavigate();
  const location = useLocation();
  const bottoniRef = useRef({});
  const [profili, setListaProfili] = useState([]);
  const [profiloAttivo, setProfiloAttivo] = useState(null);

  const maxProfiles =
    config.userTier === "PRO"
      ? config.maxProfilesPro
      : config.maxProfilesFree;

  // 🔹 Carica profili al caricamento pagina
  useEffect(() => {
    setListaProfili(getProfili());
    setProfiloAttivo(getProfiloAttivo());
  }, []);

  useEffect(() => {
  const target = location.state?.returnTo;
  if (!target) return;

  const el = bottoniRef.current[target];
  if (el) {
    requestAnimationFrame(() => {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }
}, [location.state]);

  // 🔹 Crea nuovo profilo
  const handleCreaProfilo = () => {
    if (profili.length >= maxProfiles) {
      alert(
        `Hai raggiunto il limite massimo di ${maxProfiles} profilo${
          maxProfiles > 1 ? "i" : ""
        } per il tuo piano ${config.userTier}.`
      );
      return;
    }

    const nome = prompt("Inserisci un nome per il nuovo profilo:");
    if (!nome) return;

    const nuovo = creaProfilo(nome, config.userTier.toLowerCase());
    if (nuovo) setListaProfili(getProfili());
  };

  // 🔹 Elimina profilo
  const handleEliminaProfilo = (id) => {
    if (window.confirm("Vuoi davvero eliminare questo profilo?")) {
      eliminaProfilo(id);
      setListaProfili(getProfili());
      setProfiloAttivo(getProfiloAttivo());
    }
  };

  // 🔹 Entra nel profilo
  const handleEntraProfilo = (id) => {
    const selezionato = selezionaProfilo(id);
    if (selezionato) {
      setProfiloAttivo(selezionato);
      navigate("/profilo-morfologico");
    }
  };

  return (
    <PageContainer
      titolo="Il tuo profilo personale "
      sottotitolo="Così potremo offrirti un'esperienza davvero personalizzata"
    >
      <div
        style={{
          maxWidth: "clamp(320px, 92vw, 820px)",
          margin: "0 auto",
          padding: "clamp(1rem, 3vw, 1.6rem)",
          background: "#f7f5f2",
          border: "1px solid #000",
          borderRadius: "10px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#2c2c2c",
            marginBottom: "1rem",
          }}
        >
          💬 Vuoi sapere chi sei?
        </h2>

        <p
          style={{
            textAlign: "center",
            lineHeight: "1.6",
            marginBottom: "1.5rem",
          }}
        >
          Questo è il primo passo del tuo percorso che ti porterà a scoprirlo.  
          Creare il tuo profilo non è un obbligo, ma un modo semplice per permettere a 
          <strong> Nutrition Spiral</strong> di conoscerti e accompagnarti con precisione,
          rispetto e consapevolezza.

          <br /><br />

          Le tue informazioni rimangono sul tuo dispositivo e servono solo a offrirti
          indicazioni più chiare, suggerimenti mirati e un’esperienza davvero personale.
          Non c’è nulla da temere: qui sei al sicuro, e ogni scelta nasce per aiutarti.

          <br /><br />

          Prenditi il tuo tempo.  
          Scegli un nome per il tuo profilo… e il tuo percorso comincerà da qui. 🌿
        </p>

        {/* === Sezione profili salvati === */}
        <div
          style={{
            background: "#fff",
            borderRadius: "8px",
            padding: "1rem",
            border: "1px solid #000",
            boxShadow: "inset 0 1px 4px rgba(0,0,0,0.05)",
            marginBottom: "1.5rem",
          }}
        >
          <h3
            ref={(el) => (bottoniRef.current["Profilo"] = el)}
            style={{ marginBottom: "0.8rem", color: "#2c2c2c" }}>
            📋 Profili salvati
          </h3>

          {profili.length === 0 ? (
            <p style={{ color: "#666", textAlign: "center" }}>
              Nessun profilo salvato al momento.
            </p>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "0.6rem",
              }}
            >
              {profili.map((p) => (
                <div
                  key={p.id}
                  style={{
                    border: "1px solid #000",
                    borderRadius: "8px",
                    padding: "0.8rem",
                    background:
                      profiloAttivo?.id === p.id ? "#e0f7d5" : "#fafafa",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <strong>{p.nome}</strong>
                  <small>
                    Livello: {p.livello.toUpperCase()} <br />
                    Creato il:{" "}
                    {new Date(p.dataCreazione).toLocaleDateString("it-IT")}
                  </small>

                  <div
                    style={{
                      marginTop: "0.5rem",
                      display: "flex",
                      gap: "0.4rem",
                    }}
                  >
                    <button
                      onClick={() => handleEntraProfilo(p.id)}
                      style={{
                        flex: 1,
                        background:
                          "linear-gradient(90deg, #3bb143, #c8b400)",
                        color: "#000",
                        border: "1px solid #000",
                        borderRadius: "5px",
                        padding: "clamp(0.25rem, 1vw, 0.45rem) clamp(0.4rem, 1.2vw, 0.7rem)",
                        cursor: "pointer",
                        fontSize: "clamp(0.75rem, 1.8vw, 0.95rem)",
                        fontWeight: "600",
                      }}
                    >
                      Entra
                    </button>

                    <button
                      onClick={() => handleEliminaProfilo(p.id)}
                      style={{
                        flex: 1,
                        background: "#d9534f",
                        color: "#fff",
                        border: "1px solid #000",
                        borderRadius: "5px",
                        padding: "clamp(0.25rem, 1vw, 0.45rem) clamp(0.4rem, 1.2vw, 0.7rem)",
                        cursor: "pointer",
                        fontSize: "clamp(0.75rem, 1.8vw, 0.95rem)",
                        fontWeight: "600",
                      }}
                    >
                      Elimina
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div style={{ textAlign: "center", marginTop: "1.2rem" }}>
            <button
              onClick={handleCreaProfilo}
              style={{
                background: "#3bb143",
                color: "#fff",
                border: "1px solid #000",
                borderRadius: "8px",
                padding: "clamp(0.45rem, 1.4vw, 0.85rem) clamp(0.9rem, 2vw, 1.3rem)",
                fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              ➕ Crea nuovo profilo
            </button>
          </div>
        </div>

        {/* ✅ SEZIONE RIMOSSA PER PULIZIA
        <div style={{ textAlign: "center" }}>
          <button ...>🚀 Vai al tuo profilo personale</button>
        </div>
        */}
      </div>
    </PageContainer>
  );
}
