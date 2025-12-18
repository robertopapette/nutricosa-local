import React from "react";
import PageContainer from "../components/PageContainer";
import { theme } from "../theme";

export default function ChiSiamo() {
  return (
    <PageContainer titolo="👥 Chi siamo" sottotitolo="La nostra visione e i nostri valori">
      <div
        style={{
          width: "100%",
          minHeight: "calc(100vh - 80px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "2rem 1rem",
          boxSizing: "border-box",
          backgroundColor: "#f7f5f2",
          color: "#1c1c1c",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            width: "100%",
            textAlign: "left",
            padding: "1.25rem 0.5rem",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              marginBottom: "0.75rem",
              color: theme.colori.accento,
              textShadow: "0 1px 2px rgba(0,0,0,0.08)",
            }}
          >
            Chi siamo
          </h2>

          <p style={{ lineHeight: 1.7, fontSize: "1.05rem", color: "#2c2c2c" }}>
            <strong>Nutrition Spiral</strong> nasce dal desiderio di creare un punto d’incontro
            tra scienza, consapevolezza e benessere. È un progetto che unisce la
            conoscenza nutrizionale a un approccio umano e pratico, per guidarti
            verso una vita più equilibrata, sana e consapevole.
          </p>

          <p style={{ marginTop: "1rem", lineHeight: 1.7, fontSize: "1.05rem", color: "#2c2c2c" }}>
            <strong>Nutrition Spiral</strong> significa <em>Consapevole di ciò che ruota attorno alla nutrizione</em>:
            un metodo, una filosofia e una visione che mette la persona al centro,
            integrando alimentazione, attività fisica e benessere mentale.
          </p>

          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              marginTop: "1.5rem",
              marginBottom: "0.5rem",
              color: theme.colori.secondario,
            }}
          >
            I nostri valori
          </h3>

          <ul
            style={{
              paddingLeft: "1.2rem",
              lineHeight: 1.8,
              fontSize: "1.02rem",
              color: "#2c2c2c",
            }}
          >
            <li>
              <strong>Affidabilità</strong>: ogni contenuto è basato su studi scientifici
              e supervisionato da professionisti del settore.
            </li>
            <li>
              <strong>Consapevolezza</strong>: conoscere ciò che mangi, come ti muovi e
              come reagisce il tuo corpo è il primo passo per il cambiamento.
            </li>
            <li>
              <strong>Equilibrio</strong>: promuoviamo un approccio armonioso tra
              alimentazione, esercizio e mente, lontano dagli estremismi.
            </li>
          </ul>

          <p
            style={{
              marginTop: "1.25rem",
              lineHeight: 1.7,
              fontSize: "1.05rem",
              color: "#2c2c2c",
            }}
          >
            La missione di <strong>Nutrition Spiral</strong> è aiutarti a capire che il vero
            benessere non nasce da una dieta, ma da uno stile di vita consapevole
            e sostenibile nel tempo.
          </p>

          <blockquote
            style={{
              marginTop: "1.5rem",
              padding: "0.85rem 1rem",
              borderLeft: `4px solid ${theme.colori.accento}`,
              background: "rgba(0,0,0,0.04)",
              borderRadius: "8px",
              fontStyle: "italic",
              color: "#333",
            }}
          >
            <span style={{ display: "block", marginBottom: "0.35rem" }}>
              “La libertà è poter scegliere il proprio benessere in modo consapevole.”
            </span>
            <span style={{ fontWeight: 600, color: theme.colori.secondario }}>
              — Fondatore di NutriCoSa
            </span>
          </blockquote>
        </div>
      </div>
    </PageContainer>
  );
}
