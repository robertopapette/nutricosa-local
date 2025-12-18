import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";
import BottoneIndietro from "../../../components/BottoneIndietro";

export default function Digestione() {
  const navigate = useNavigate();
  const location = useLocation();
  const bottoniRef = useRef({});

  const sottoDigestione = [
    "Masticazione",
    "Saliva",
    "Deglutizione",
    "Succo gastrico",
    "Movimenti stomaco",
    "Controllo motilita",
    "Succo pancreatico",
    "Bile",
    "Succo intestinale",
    "Movimenti intestino tenue",
    "Batteri intestinali",
    "Secrezione colon",
    "Movimenti colon",
    "Defecazione",
    "Feci",
  ];

  /* 🔁 Scroll di ritorno dalle figlie */
  useEffect(() => {
    const target = location.state?.returnTo;

    // Se entro dal menu (nessun returnTo), parto dall'alto
    if (!target) return;

    const scroll = () => {
      const el = bottoniRef.current[target];
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    };

    // Doppio frame per battere eventuali scroll automatici globali
    requestAnimationFrame(() => {
      requestAnimationFrame(scroll);
    });
  }, [location.state]);

  return (
    <PageContainer
      titolo="Digestione"
      sottotitolo="Il processo che trasforma il cibo in energia"
    >
      {/* 🔙 Digestione è figlia di Principi */}
      <BottoneIndietro
        path="/principi"
        state={{ returnTo: "Digestione" }}
        testo="Torna ai principi"
      />

      {/* 📜 Introduzione */}
      <div style={stileBox}>
        <p>
          La digestione è un processo complesso che permette di trasformare il
          cibo introdotto in molecole semplici, assorbibili e utilizzabili
          dall’organismo per produrre energia, riparare i tessuti e mantenere
          attive tutte le funzioni vitali.
        </p>

        <p>
          Ogni fase ha un ruolo preciso: dalla masticazione alla secrezione degli
          enzimi, fino all’assorbimento dei nutrienti e all’eliminazione delle
          scorie. L’equilibrio di questi passaggi è fondamentale per il
          benessere generale.
        </p>

        <p>
          Qui sotto trovi tutte le fasi del processo digestivo, spiegate in modo
          chiaro e progressivo, nello stile <strong>Nutrition Spiral</strong>.
        </p>
      </div>

      {/* 🔘 Sottopagine */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "0.7rem",
          marginTop: "1.5rem",
        }}
      >
        {sottoDigestione.map((sotto) => (
          <button
            key={sotto}
            ref={(el) => {
              if (el) bottoniRef.current[sotto] = el;
            }}
            onClick={() =>
              navigate(
                `/principi/digestione/${sotto
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`
              )
            }
            style={{
              background: "rgba(255,255,255,0.8)",
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "0.7rem",
              textAlign: "left",
              cursor: "pointer",
              fontSize: "0.95rem",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(34,197,94,0.15)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.8)")
            }
          >
            {sotto}
          </button>
        ))}
      </div>
    </PageContainer>
  );
}

const stileBox = {
  maxWidth: "900px",
  margin: "0 auto",
  padding: "1.5rem",
  background: "rgba(255,255,255,0.9)",
  borderRadius: "12px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  color: "#222",
  lineHeight: 1.7,
};
