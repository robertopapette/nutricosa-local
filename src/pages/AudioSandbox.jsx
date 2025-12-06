// ✅ AudioSandbox.jsx — pagina di test indipendente
// 🔧 Serve per provare AudioPlayer senza toccare il layout principale

import React from "react";
import AudioPlayer from "../components/AudioPlayer";

export default function AudioSandbox() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(to bottom right, #064e3b, #065f46, #047857)",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          textShadow: "0 2px 4px rgba(0,0,0,0.4)",
        }}
      >
        🎧 Test Audio Isolato
      </h1>

      <p style={{ maxWidth: "500px", opacity: 0.9, marginBottom: "1rem" }}>
        Questa è una pagina di prova. Puoi avviare o fermare la musica,
        regolare il volume e verificare il comportamento su desktop e mobile.
        Nessun elemento del layout principale viene toccato.
      </p>

      {/* 🎵 Inserimento del player */}
      <AudioPlayer />

      <footer
        style={{
          position: "absolute",
          bottom: "1rem",
          fontSize: "0.85rem",
          opacity: 0.8,
        }}
      >
        <p>
          🔒 Sandbox indipendente — nessuna modifica al layout principale.
        </p>
      </footer>
    </div>
  );
}
