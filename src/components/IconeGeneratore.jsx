// 🌿 IconeGeneratore.jsx – versione compatta con scroll interno
import React, { useState } from "react";
import { iconeLegenda } from "../data/iconeLegenda";
import { theme } from "../theme";

export default function IconeGeneratore({ dettagliato = false }) {
  const gruppi = Object.keys(iconeLegenda);
  const [gruppoAttivo, setGruppoAttivo] = useState(null);

  const handleClickGruppo = (nomeGruppo) => {
    setGruppoAttivo((prev) => (prev === nomeGruppo ? null : nomeGruppo));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.8rem",
        padding: dettagliato ? "1rem" : "0.4rem",
        color: "#fff",
      }}
    >
      {gruppi.map((gruppo) => (
        <div key={gruppo}>
          {/* 🔹 Pulsante gruppo */}
          <button
            onClick={() => handleClickGruppo(gruppo)}
            style={{
              background:
                gruppoAttivo === gruppo
                  ? "linear-gradient(90deg, #16a34a, #15803d)"
                  : "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "8px",
              padding: dettagliato ? "8px 12px" : "5px 8px",
              width: "100%",
              textAlign: "left",
              fontWeight: "bold",
              color: gruppoAttivo === gruppo ? "#facc15" : "#e5e5e5",
              fontSize: dettagliato ? "0.95rem" : "0.85rem",
              cursor: "pointer",
              boxShadow:
                gruppoAttivo === gruppo
                  ? "0 0 8px rgba(250,204,21,0.5)"
                  : "none",
              transition: "all 0.25s ease",
            }}
          >
            {iconeLegenda[gruppo].nome || gruppo}
          </button>

          {/* 🔸 Griglia compatta con scroll */}
          {gruppoAttivo === gruppo && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginTop: "8px",
                background: "rgba(0,0,0,0.35)",
                borderRadius: "8px",
                padding: "6px",
                justifyContent: "center",
                maxHeight: "115px", // 🔹 Mostra circa 3 righe
                overflowY: "auto", // 🔹 Scroll verticale interno
              }}
            >
              {iconeLegenda[gruppo].icone &&
                iconeLegenda[gruppo].icone.map((icona, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      width: dettagliato ? "65px" : "55px",
                      color: "#fff",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        width: dettagliato ? "42px" : "38px",
                        height: dettagliato ? "42px" : "38px",
                        borderRadius: "6px",
                        background: "rgba(255,255,255,0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: dettagliato ? "1.1rem" : "1rem",
                        boxShadow:
                          "0 0 3px rgba(250,204,21,0.3), 0 0 6px rgba(0,255,0,0.2)",
                      }}
                    >
                      {icona.simbolo}
                    </div>
                    <small
                      style={{
                        fontSize: dettagliato ? "0.7rem" : "0.65rem",
                        marginTop: "3px",
                        lineHeight: "1.1",
                        opacity: 0.85,
                        wordBreak: "keep-all",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: "100%",
                      }}
                    >
                      {icona.descrizione}
                    </small>
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
