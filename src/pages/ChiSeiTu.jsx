import React, { useState, useEffect } from "react";
import PageContainer from "../components/PageContainer";
import { useNavigate } from "react-router-dom";
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
      titolo="👤 Chi sei tu"
      sottotitolo="Scopri il tuo profilo e crea il tuo percorso personale"
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          padding: "2rem",
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
          Non vediamo l’ora di scoprirlo assieme a te.  
          Compila il tuo profilo perché solo con un piano realmente personalizzato
          potrai raggiungere i tuoi obiettivi e migliorarti giorno dopo giorno.  
          Noi saremo al tuo fianco, passo dopo passo, per accompagnarti nella giusta direzione. 🌿
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
          <h3 style={{ marginBottom: "0.8rem", color: "#2c2c2c" }}>
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
                        padding: "0.3rem 0.4rem",
                        cursor: "pointer",
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
                        padding: "0.3rem 0.4rem",
                        cursor: "pointer",
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
                padding: "0.6rem 1.2rem",
                fontSize: "1rem",
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
