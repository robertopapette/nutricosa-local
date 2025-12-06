import React from "react";
import { theme } from "../theme";

export default function PageContainer({ titolo, sottotitolo, children, wide = false }) {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 56px)",
        // 🟢 MODIFICA: sfondo bianco sporco coerente con AppLayout
        background: "#f7f5f2",
        // 🟢 MODIFICA: testo scuro su chiaro
        color: "#1c1c1c",
        // 🟢 MODIFICA: padding più naturale, centrato visivamente
        padding: "80px 20px 60px",
        // 🟢 MODIFICA: rimosso raggio angoli
        borderRadius: 0,
        // 🟢 MODIFICA: rimosse ombre e bordi
        boxShadow: "none",
        border: "none",
        margin: "0 auto",
        maxWidth: wide ? "1200px" : "900px",
        fontFamily: theme.font.base,
        transition: theme.transizione,
      }}
    >
      {/* Titolo principale */}
      {titolo && (
        <h1
          style={{
            color: theme.colori.accento,
            marginBottom: "0.75rem",
            textAlign: "center",
            fontSize: theme.font.dimensione?.titolo || "1.8rem",
            fontWeight: "bold",
            letterSpacing: "0.3px",
            textShadow: "0 1px 2px rgba(0,0,0,0.1)", // 🟢 MODIFICA: più leggera
          }}
        >
          {titolo}
        </h1>
      )}

      {/* Sottotitolo */}
      {sottotitolo && (
        <p
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#555", // 🟢 MODIFICA: testo più neutro su chiaro
            fontSize: theme.font.dimensione?.base || "1rem",
            fontStyle: "italic",
          }}
        >
          {sottotitolo}
        </p>
      )}

      {/* Contenuto */}
      <div style={{ marginTop: "1rem" }}>{children}</div>
    </div>
  );
}
