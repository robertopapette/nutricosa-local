import { useState, useRef } from "react";
import { Menu } from "lucide-react";

export default function HeaderTop({ titolo, onLegenda, onMenuToggle }) {
  const [audioOn, setAudioOn] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audioOn) audio.pause();
    else audio.play().catch(() => {});
    setAudioOn(!audioOn);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "56px",
        backgroundColor: "#0d3b66",
        color: "white",
        borderBottom: "2px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
        zIndex: 9999,
      }}
    >
      {/* 🎵 Audio ambiente */}
      <audio ref={audioRef} loop>
        <source src="/assets/audio/cascata.mp3" type="audio/mpeg" />
      </audio>

      {/* 🍔 Pulsante menù a sinistra */}
      <button
        onClick={onMenuToggle}
        title="Apri menù"
        style={{
          position: "absolute",
          left: "1.2rem",
          top: "50%",
          transform: "translateY(-50%)",
          background: "rgba(255,255,255,0.15)",
          border: "none",
          borderRadius: "8px",
          padding: "6px 10px",
          color: "#facc15",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Menu size={22} />
      </button>

      {/* 🌿 Titolo centrato */}
      <h1
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          fontWeight: "bold",
          color: "#facc15",
          fontSize: "1.125rem",
          whiteSpace: "nowrap",
          userSelect: "none",
        }}
      >
        {titolo}
      </h1>

      {/* 🔘 Pulsanti a destra */}
      <div
        style={{
          position: "absolute",
          right: "1.5rem",
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        {/* 🔸 Pulsante legenda temporaneamente disattivato
        {onLegenda && (
          <button
            onClick={() => {
              console.log("🟢 Bottone legenda cliccato!");
              onLegenda();
            }}
            title="Legenda"
            style={{
              color: "#fde68a",
              background: "transparent",
              fontSize: "1.1rem",
              border: "none",
              cursor: "pointer",
            }}
          >
            ℹ️
          </button>
        )} */}

        <button
          title="Login / Profilo"
          style={{
            background: "rgba(255,255,255,0.2)",
            border: "none",
            padding: "4px 8px",
            borderRadius: "6px",
            cursor: "pointer",
            color: "white",
          }}
        >
          👤 Login
        </button>

        <button
          onClick={toggleAudio}
          title={audioOn ? "Disattiva suono" : "Attiva suono ambientale"}
          style={{
            background: "rgba(255,255,255,0.2)",
            border: "none",
            padding: "4px 8px",
            borderRadius: "6px",
            cursor: "pointer",
            color: "white",
          }}
        >
          {audioOn ? "🔊" : "🔇"}
        </button>
      </div>
    </header>
  );
}
