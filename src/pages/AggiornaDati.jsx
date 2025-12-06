import React from "react";
import PageContainer from "../components/PageContainer";
import { useNavigate } from "react-router-dom";
import { theme } from "../theme";

export default function AggiornaDati() {
  const navigate = useNavigate();

  return (
    <PageContainer
      titolo="💪 Aggiorna i tuoi dati"
      sottotitolo="Crescita, consapevolezza e trasformazione"
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "2rem auto",
          padding: "1.8rem",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "12px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
          color: "#222",
          lineHeight: 1.7,
        }}
      >
        {/* 🔹 Introduzione motivazionale */}
        <h2
          style={{
            color: theme.colori.accento,
            fontWeight: "700",
            fontSize: "1.4rem",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Scopri il tuo percorso di crescita
        </h2>

        <p style={{ marginBottom: "1.2rem", textAlign: "justify" }}>
          In questa sezione potrai completare l’inserimento dei tuoi dati personali
          e fisici, creando così uno <strong>storico di progresso</strong> nel tempo.
          Seguendo i programmi di allenamento e i consigli alimentari offerti da NutriCoSa,
          potrai scoprire i tuoi veri punti di forza e trasformare il <em>te di oggi</em>
          in un <strong>te atletico e consapevole</strong> domani.
        </p>

        <p style={{ marginBottom: "1.5rem", textAlign: "justify" }}>
          L’inserimento dei dati è facoltativo e tutelato: le informazioni restano
          archiviate in locale o nel tuo profilo, nel pieno rispetto della privacy.
        </p>

        <p
          style={{
            textAlign: "center",
            fontWeight: "600",
            color: theme.colori.accento,
            fontSize: "1.1rem",
          }}
        >
          Cosa aspetti? Inizia ora il tuo cambiamento.
        </p>

        {/* 🔹 Pulsante “Clicca qui per iniziare” */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <button
            onClick={() => navigate("/aggiorna-dati/inserisci")}
            style={{
              background: "linear-gradient(90deg, #3bb143, #c8b400)",
              color: "#000",
              border: "2px solid #000",
              borderRadius: "10px",
              padding: "0.8rem 1.6rem",
              fontSize: "1.1rem",
              fontWeight: "700",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #c8b400, #3bb143)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background =
                "linear-gradient(90deg, #3bb143, #c8b400)")
            }
          >
            🚀 Clicca qui per iniziare
          </button>
        </div>

        {/* 🔹 Nota finale */}
        <p
          style={{
            marginTop: "2.5rem",
            fontStyle: "italic",
            textAlign: "center",
            color: "#333",
          }}
        >
          “La trasformazione inizia quando decidi di conoscerti davvero.”
        </p>
      </div>
    </PageContainer>
  );
}
