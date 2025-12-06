import React, { useState, useEffect } from "react";
import PageContainer from "../components/PageContainer";
import { useNavigate } from "react-router-dom";
import { calcolaProfiloMorfologico } from "../utils/CalcoliMorfologici";
import { Save } from "lucide-react";
import BottoneIndietro from "../components/BottoneIndietro";

export default function ProfiloMorfologico() {
  const navigate = useNavigate();
  const [profilo, setProfilo] = useState(null);

  const [form, setForm] = useState({
    sesso: "M",
    dataNascita: "",
    eta: "",
    altezza: "",
    altezzaSeduti: "",
    polso: "",
    avambraccio: "",
    peso: "",
    vita: "",
    bfDesiderata: "",
    inCal: "",
    outCal: "",
  });

  const [risultati, setRisultati] = useState(null);

  useEffect(() => {
    if (!form.dataNascita) return;

    const nascita = new Date(form.dataNascita);
    const oggi = new Date();
    let anni = oggi.getFullYear() - nascita.getFullYear();

    const m = oggi.getMonth() - nascita.getMonth();
    if (m < 0 || (m === 0 && oggi.getDate() < nascita.getDate())) anni--;

    setForm((prev) => ({ ...prev, eta: anni }));
  }, [form.dataNascita]);

  useEffect(() => {
    const attivo = JSON.parse(localStorage.getItem("profiloAttivo"));
    if (!attivo) {
      navigate("/chi-sei-tu");
      return;
    }
    setProfilo(attivo);

    const profili = JSON.parse(localStorage.getItem("profiliUtente")) || [];
    const esistente = profili.find((p) => p.id === attivo.id);
    if (esistente?.dati) {
      setForm((prev) => ({
        ...prev,
        ...esistente.dati,
      }));
    }
  }, [navigate]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const salvaProfilo = () => {
    const profili = JSON.parse(localStorage.getItem("profiliUtente")) || [];
    const aggiornati = profili.map((p) =>
      p.id === profilo.id
        ? { ...p, dati: form, ultimoAccesso: new Date().toISOString() }
        : p
    );
    localStorage.setItem("profiliUtente", JSON.stringify(aggiornati));
    alert("✅ Profilo salvato correttamente!");
  };

  if (!profilo) return null;

  return (
    <PageContainer
      titolo={`📊 Profilo di ${profilo.nome}`}
      sottotitolo="Valutazione struttura ossea e conformazione naturale"
    >
      {/* ✅ BOTTONE TORNA – ADESSO IN ALTO COME IN InserisciDati */}
      <div style={{ marginBottom: "1rem" }}>
        <BottoneIndietro path="/chi-sei-tu" testo="Torna" />
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          margin: "0 auto",
          padding: "1.5rem",
          background: "#f7f5f2",
          color: "#1c1c1c",
          border: "1px solid #000",
          borderRadius: "8px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
        }}
      >
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.6,
            marginBottom: "1.2rem",
            background: "rgba(255,255,255,0.7)",
            padding: "0.8rem 1rem",
            borderRadius: "8px",
          }}
        >
          La tua <strong>struttura ossea</strong> è il telaio naturale del tuo corpo:
          stabile, unica e immutabile. Capirla significa conoscere la tua base,
          rispettare le tue proporzioni e riconoscere la tua predisposizione
          naturale alla forma a <strong>V-shape</strong>. Qui non si giudica niente:
          si comprende e si costruisce consapevolezza.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "0.4rem 0.8rem",
            margin: "0 auto",
            maxWidth: "820px",
          }}
        >
          {/* CAMPI VISIBILI */}
          {[
            ["Sesso", "sesso", "select"],
            ["Data di nascita", "dataNascita", "date"],
            ["Età", "eta", "number", true],
            ["Altezza (cm)", "altezza", "number"],
            ["Altezza da seduto (cm)", "altezzaSeduti", "number"],
            ["Polso (cm)", "polso", "number"],
          ].map(([label, campo, tipo, disabled]) => (
            <div
              key={campo}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0.2rem 0.3rem",
                background: "rgba(255,255,255,0.6)",
                borderRadius: "6px",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <label
                style={{
                  fontWeight: 600,
                  marginBottom: "0.15rem",
                  fontSize: "0.88rem",
                }}
              >
                {label}
              </label>

              {tipo === "select" ? (
                <select
                  name={campo}
                  value={form[campo]}
                  onChange={handleChange}
                  style={{
                    padding: "0.3rem",
                    borderRadius: "4px",
                    border: "1px solid #333",
                    fontSize: "0.92rem",
                    background: "#fff",
                  }}
                >
                  <option value="M">Maschio</option>
                  <option value="F">Femmina</option>
                </select>
              ) : (
                <input
                  type={tipo}
                  name={campo}
                  value={form[campo] || ""}
                  onChange={handleChange}
                  disabled={disabled}
                  style={{
                    padding: "0.3rem",
                    borderRadius: "4px",
                    border: "1px solid #333",
                    background: disabled ? "#e3e3e3" : "#fff",
                  }}
                />
              )}
            </div>
          ))}

          {/* ✅ AVAMBRACCIO SOLO SE SESSO = F */}
          {form.sesso === "F" && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0.2rem 0.3rem",
                background: "rgba(255,255,255,0.6)",
                borderRadius: "6px",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <label
                style={{
                  fontWeight: 600,
                  marginBottom: "0.15rem",
                  fontSize: "0.88rem",
                }}
              >
                Avambraccio (cm)
              </label>
              <input
                type="number"
                name="avambraccio"
                value={form.avambraccio || ""}
                onChange={handleChange}
                style={{
                  padding: "0.3rem",
                  borderRadius: "4px",
                  border: "1px solid #333",
                  background: "#fff",
                }}
              />
            </div>
          )}
        </div>

        {/* ✅ PULSANTE SALVA */}
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <button
            onClick={salvaProfilo}
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
              style={{ transition: "transform 0.15s ease-in-out" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.1)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </button>
        </div>
      </div>
    </PageContainer>
  );
}
