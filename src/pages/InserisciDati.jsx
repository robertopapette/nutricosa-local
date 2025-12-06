import React, { useState, useEffect } from "react";
import PageContainer from "../components/PageContainer";
import {
  getProfiloAttivo,
  setProfiloAttivo,
  aggiornaProfilo,
} from "../utils/profili";
import { useNavigate } from "react-router-dom";
import { Save, History } from "lucide-react";
import { theme } from "../theme";
import BottoneIndietro from "../components/BottoneIndietro";

export default function AggiornaDati() {
  const navigate = useNavigate();
  const [profilo, setProfilo] = useState(null);
  const [form, setForm] = useState({
    peso: "",
    vita: "",
    coscia: "",
    braccio: "",
    massaGrassa: "",
  });
  const [storico, setStorico] = useState([]);
  const [messaggio, setMessaggio] = useState("");
  const [mostraStorico, setMostraStorico] = useState(false);

  // 🔹 Carica profilo attivo
  useEffect(() => {
    const p = getProfiloAttivo();
    if (p) {
      setProfilo(p);
      const dati = p.dati || {};
      setForm({
        peso: dati.peso || "",
        vita: dati.vita || "",
        coscia: dati.coscia || "",
        braccio: dati.braccio || "",
        massaGrassa: dati.massaGrassa || "",
      });
      setStorico(dati.storico || []);
    }
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // 🔹 Salvataggio dati
  const handleSalva = () => {
    if (!profilo) return;

    const nuoviDati = {
      ...form,
      storico: [
        ...(profilo.dati?.storico || []),
        {
          data: new Date().toISOString(),
          peso: form.peso,
          vita: form.vita,
          coscia: form.coscia,
          braccio: form.braccio,
          massaGrassa: form.massaGrassa,
        },
      ],
    };

    const profiloAggiornato = { ...profilo, dati: nuoviDati };

    aggiornaProfilo(profilo.id, nuoviDati);
    setProfiloAttivo(profiloAggiornato);
    setProfilo(profiloAggiornato);
    setStorico(nuoviDati.storico);

    setMessaggio("✅ Dati aggiornati con successo!");
    setTimeout(() => setMessaggio(""), 3000);
  };

  if (!profilo)
    return (
      <PageContainer
        titolo="⚠️ Nessun profilo attivo"
        sottotitolo="Vai su 'Chi sei tu' per creare o selezionare un profilo."
      >
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            fontSize: "1.2rem",
            color: "#333",
          }}
        >
          Nessun profilo attivo trovato.
        </div>
      </PageContainer>
    );

  return (
    <PageContainer
      titolo="📈 Inserisci i tuoi dati"
      sottotitolo={`Profilo attivo: ${profilo.nome}`}
    >
      <div
        style={{
          maxWidth: "750px",
          margin: "2rem auto",
          padding: "1.5rem",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          color: "#222",
          lineHeight: 1.6,
        }}
      >
        <BottoneIndietro path="/aggiorna-dati" testo="Torna indietro" />

        <h2
          style={{
            fontSize: "1.4rem",
            fontWeight: "700",
            color: theme.colori.accento,
            marginBottom: "1rem",
          }}
        >
          Inserisci o aggiorna le tue misure
        </h2>

        {/* === FORM === */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "0.8rem",
          }}
        >
          {[
            { id: "peso", label: "Peso (kg)" },
            { id: "vita", label: "Circonferenza vita (cm)" },
            { id: "coscia", label: "Circonferenza coscia (cm)" },
            { id: "braccio", label: "Circonferenza braccio (cm)" },
            { id: "massaGrassa", label: "Massa grassa (%)" },
          ].map((campo) => (
            <div key={campo.id}>
              <label
                htmlFor={campo.id}
                style={{
                  fontWeight: 600,
                  display: "block",
                  marginBottom: "0.3rem",
                }}
              >
                {campo.label}
              </label>

              <input
                id={campo.id}
                name={campo.id}
                type="number"
                step="0.1"
                value={form[campo.id]}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "0.5rem",
                  border: "1px solid #aaa",
                  borderRadius: "6px",
                }}
              />

              {/* 🔹 Calcolo automatico massa grassa */}
              {campo.id === "massaGrassa" && (
                <div style={{ marginTop: "0.3rem" }}>
                  <span style={{ color: "#444", fontSize: "0.9rem" }}>
                    Non conosci la tua massa grassa?{" "}
                    <button
                      onClick={() => {
                        try {
                          // ✅ 1. Salva sempre prima
                          handleSalva();

                          // ✅ 2. Poi calcola usando i dati AGGIORNATI del form
                          import("../utils/CalcoliMorfologici").then(
                            ({ calcolaProfiloMorfologico }) => {
                              const risultato = calcolaProfiloMorfologico({
                                sesso: profilo.sesso,
                                peso: parseFloat(form.peso),
                                altezza: parseFloat(
                                  profilo?.dati?.altezza || 0
                                ),
                                eta: parseInt(profilo?.dati?.eta || 0),
                                vita: parseFloat(form.vita),
                                polso: parseFloat(
                                  profilo?.dati?.polso || 0
                                ),
                                avambraccio: parseFloat(
                                  form.braccio || 0
                                ),
                                altezzaSeduti: parseFloat(
                                  profilo?.dati?.altezzaSeduti || 0
                                ),
                              });

                              if (
                                !risultato ||
                                isNaN(risultato.bfPerc)
                              ) {
                                setMessaggio(
                                  "⚠️ Completa i dati in 'Chi sei tu' per poter calcolare la massa grassa."
                                );
                                return;
                              }

                              setForm((prev) => ({
                                ...prev,
                                massaGrassa:
                                  risultato.bfPerc.toFixed(1),
                              }));

                              setMessaggio(
                                "✅ Massa grassa calcolata automaticamente."
                              );
                              setTimeout(
                                () => setMessaggio(""),
                                4000
                              );
                            }
                          );
                        } catch (err) {
                          console.error(
                            "Errore calcolo massa grassa:",
                            err
                          );
                          setMessaggio(
                            "⚠️ Errore nel calcolo automatico."
                          );
                        }
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        color: "#0077cc",
                        fontWeight: 600,
                        cursor: "pointer",
                        textDecoration: "underline",
                      }}
                    >
                      Clicca qui
                    </button>
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 🔹 Pulsante SALVA */}
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <button
            onClick={handleSalva}
            aria-label="Salva aggiornamento"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Save
              size={42}
              strokeWidth={2}
              color="#3b9a3b"
              style={{
                transition: "transform 0.15s ease-in-out",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </button>
        </div>

        {/* 🔹 Messaggi */}
        {messaggio && (
          <p
            style={{
              textAlign: "center",
              marginTop: "1rem",
              color: messaggio.startsWith("⚠️")
                ? "#b8860b"
                : "green",
              fontWeight: "600",
            }}
          >
            {messaggio}
          </p>
        )}

        {/* === STORICO === */}
        {storico.length > 0 && (
          <div style={{ textAlign: "center", marginTop: "1.8rem" }}>
            <button
              onClick={() => setMostraStorico(!mostraStorico)}
              style={{
                background: "transparent",
                border: "none",
                color: "#0077cc",
                fontWeight: "600",
                fontSize: "1rem",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              <History size={20} /> Storico aggiornamenti
            </button>
          </div>
        )}

        {mostraStorico && storico.length > 0 && (
          <div style={{ marginTop: "1.5rem" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.9rem",
              }}
            >
              <thead>
                <tr style={{ background: "#eee" }}>
                  {[
                    "Data",
                    "Peso (kg)",
                    "Vita (cm)",
                    "Coscia (cm)",
                    "Braccio (cm)",
                    "Massa grassa (%)",
                  ].map((col) => (
                    <th
                      key={col}
                      style={{
                        border: "1px solid #ccc",
                        padding: "0.4rem",
                      }}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {storico
                  .slice()
                  .reverse()
                  .map((r, i) => (
                    <tr key={i}>
                      <td
                        style={{
                          border: "1px solid #ccc",
                          padding: "0.4rem",
                          textAlign: "center",
                        }}
                      >
                        {new Date(r.data).toLocaleDateString(
                          "it-IT"
                        )}
                      </td>
                      <td style={{ border: "1px solid #ccc", padding: "0.4rem" }}>{r.peso || "-"}</td>
                      <td style={{ border: "1px solid #ccc", padding: "0.4rem" }}>{r.vita || "-"}</td>
                      <td style={{ border: "1px solid #ccc", padding: "0.4rem" }}>{r.coscia || "-"}</td>
                      <td style={{ border: "1px solid #ccc", padding: "0.4rem" }}>{r.braccio || "-"}</td>
                      <td style={{ border: "1px solid #ccc", padding: "0.4rem" }}>{r.massaGrassa || "-"}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}

        {/* 🔹 Link alla pagina Aiuto */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button
            onClick={() => navigate("/aiuto")}
            style={{
              background: "transparent",
              border: "none",
              color: "#0077cc",
              textDecoration: "underline",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "0.95rem",
            }}
          >
            Hai bisogno di aiuto?
          </button>
        </div>
      </div>
    </PageContainer>
  );
}
