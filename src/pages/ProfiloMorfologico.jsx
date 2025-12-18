import React, { useState, useEffect } from "react";
import PageContainer from "../components/PageContainer";
import { useNavigate } from "react-router-dom";
import { calcolaProfiloMorfologico } from "../utils/CalcoliMorfologici";
import { Save } from "lucide-react";
import BottoneIndietro from "../components/BottoneIndietro";
import DropdownSesso from "../components/DropdownSesso";





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

   // form.dataNascita è nel formato "GG/MM/AAAA"
   const [gg, mm, yyyy] = form.dataNascita.split("/").map(Number);

   // se qualcosa non è numero valido, esco
   if (!gg || !mm || !yyyy) return;

   const nascita = new Date(yyyy, mm - 1, gg);
   if (isNaN(nascita.getTime())) return;

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

        <BottoneIndietro
          path="/chi-sei-tu"
          state={{ returnTo: "Profilo" }}
          testo="Torna a Chi sei tu"
        />

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
          Ogni corpo ha una propria struttura, una base unica su cui tutto il resto
          prende forma. La <strong>struttura ossea</strong> rappresenta il tuo telaio
          naturale: non cambia, non si giudica, ma si comprende.
          <br /><br />
          Conoscere queste proporzioni significa imparare a lavorare <em>con</em> il
          tuo corpo e non contro di esso, rispettando le tue caratteristiche e la tua
          predisposizione naturale allo sviluppo fisico.
          <br /><br />
          Qui non ci sono etichette né confronti: c’è solo un punto di partenza
          consapevole, utile per costruire obiettivi realistici, sostenibili e davvero
          adatti a te.
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
            ["Data di nascita", "dataNascita", "text"],
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
                <DropdownSesso
                  value={form.sesso}
                  onChange={handleChange}
                /> 
              ) : tipo === "text" && campo === "dataNascita" ? (
                <input
                  type="text"
                  name="dataNascita"
                  placeholder="GG/MM/AAAA"
                  value={form.dataNascita}
                  onChange={(e) => {
                    // accetta solo numeri
                    let v = e.target.value.replace(/[^\d]/g, "");

                    // auto-inserimento slash
                    if (v.length >= 3) v = v.slice(0, 2) + "/" + v.slice(2);
                    if (v.length >= 6) v = v.slice(0, 5) + "/" + v.slice(5, 9);

                    setForm({ ...form, dataNascita: v });
                  }}
                  style={{
                    padding: "0.3rem",
                    borderRadius: "4px",
                    border: "1px solid #333",
                    background: "#fff",
                  }}
                />      
                
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
