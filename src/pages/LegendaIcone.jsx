// 🌿 LegendaIcone.jsx — versione automatica collegata a IconeGeneratore
import React from "react";
import IconeGeneratore from "../components/IconeGeneratore";
import { theme } from "../theme";

export default function LegendaIcone() {
  return (
    <div
      style={{
        background: theme.colori.sfondo,
        color: theme.colori.testoChiaro,
        minHeight: "100vh",
        paddingTop: "70px", // 🟩 sotto HeaderTop
        paddingBottom: "40px",
      }}
    >
      {/* 🔹 Titolo principale */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "1.5rem",
          color: theme.colori.accento,
          textShadow: "0 0 8px rgba(250,204,21,0.3)",
        }}
      >
        <h1 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
          Legenda delle icone
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: "rgba(255,255,255,0.7)",
            marginTop: "0.5rem",
          }}
        >
          Seleziona un gruppo per visualizzare le icone corrispondenti
        </p>
      </div>

      {/* 🧩 Generatore dinamico */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 0 8px rgba(0,0,0,0.4)",
        }}
      >
        <IconeGeneratore dettagliato={true} />
      </div>
    </div>
  );
}
