// 🎧 AudioPlayer.jsx — visibilità controllata, riproduzione continua con Pausa/Riprendi
import { useEffect, useRef, useState } from "react";
import { Play, Pause, Square, Shuffle, Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer({ visible = true }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false); // 🆕 stato pausa
  const [volume, setVolume] = useState(
    parseFloat(localStorage.getItem("volume")) || 0.5
  );
  const [brano, setBrano] = useState("");

  const playlist = [
    "/assets/audio/cascata.mp3",
    "/assets/audio/No More Fighting (Remastered 2001).mp3",
    "/assets/audio/Uptown Top Ranking (Remastered 2001).mp3",
    "/assets/audio/Pitura Freska - Indiani.mp3",
    "/assets/audio/Rat Race (1986) - Bob Marley & The Wailers.mp3",
  ];

  // 🎵 Brano iniziale
  useEffect(() => {
    const casuale = Math.floor(Math.random() * playlist.length);
    if (audioRef.current) {
      audioRef.current.src = playlist[casuale];
      audioRef.current.volume = volume;
      setBrano(playlist[casuale].split("/").pop().replace(".mp3", ""));
    }
  }, []);

  // 💾 Salva volume
  useEffect(() => {
    localStorage.setItem("volume", volume.toString());
  }, [volume]);

  // ▶️ Avvio/Stop casuale
  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      setIsPaused(false);
    } else {
      const casuale = Math.floor(Math.random() * playlist.length);
      audio.src = playlist[casuale];
      setBrano(playlist[casuale].split("/").pop().replace(".mp3", ""));
      audio.play();
      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  // ⏸️ Pausa / Riprendi (non cambia brano)
  const togglePause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPaused(false);
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPaused(true);
    }
  };

  // 🔀 Random
  const randomizza = () => {
    const casuale = Math.floor(Math.random() * playlist.length);
    const audio = audioRef.current;
    audio.src = playlist[casuale];
    setBrano(playlist[casuale].split("/").pop().replace(".mp3", ""));
    if (isPlaying && !isPaused) audio.play();
  };

  // 🔊 Volume
  const cambiaVolume = (e) => {
    const nuovo = parseFloat(e.target.value);
    setVolume(nuovo);
    if (audioRef.current) audioRef.current.volume = nuovo;
  };

  const barrette = Array.from({ length: 15 }, (_, i) => i);

  return (
    <div
      style={{
        display: visible ? "block" : "none",
        position: "fixed",
        top: "70px",
        right: "1rem",
        zIndex: 12000,
        width: "240px",
        background: "linear-gradient(180deg, #222 0%, #111 100%)",
        border: "2px solid #333",
        borderRadius: "8px",
        padding: "10px",
        color: "#0ff",
        fontFamily: "monospace",
        boxShadow: "0 0 10px rgba(0,0,0,0.6)",
        userSelect: "none",
      }}
    >
      {/* 🖥️ Display titolo + equalizer */}
      <div
        style={{
          background: "linear-gradient(180deg, #000, #111)",
          border: "1px solid #0ff",
          borderRadius: "4px",
          padding: "6px",
          fontSize: "0.8rem",
          color: "#0ff",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        {isPlaying ? `▶ ${brano}` : "■ STOP"}

        <div
          style={{
            display: "flex",
            gap: "2px",
            height: "12px",
            marginTop: "4px",
            justifyContent: "center",
          }}
        >
          {barrette.map((i) => (
            <div
              key={i}
              style={{
                width: "5px",
                background: "#0ff",
                borderRadius: "2px",
                animation:
                  isPlaying && !isPaused
                    ? `eq${i % 5} 0.6s infinite ease-in-out`
                    : "none",
              }}
            ></div>
          ))}
        </div>
        <style>{`
          @keyframes eq0 { 0%,100%{height:3px;} 50%{height:12px;} }
          @keyframes eq1 { 0%,100%{height:5px;} 50%{height:10px;} }
          @keyframes eq2 { 0%,100%{height:2px;} 50%{height:8px;} }
          @keyframes eq3 { 0%,100%{height:6px;} 50%{height:11px;} }
          @keyframes eq4 { 0%,100%{height:4px;} 50%{height:9px;} }
        `}</style>
      </div>

      {/* 🎛️ Controlli */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        {/* ▶️ / ⏹️ Play / Stop */}
        <button
          onClick={toggleAudio}
          style={{
            background: "#222",
            border: "1px solid #666",
            color: isPlaying ? "#0f0" : "#f00",
            borderRadius: "50%",
            width: "34px",
            height: "34px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 0 4px rgba(0,255,255,0.4)",
          }}
        >
          {isPlaying ? <Square size={18} /> : <Play size={18} />}
        </button>

        {/* ⏸️ Pausa / Riprendi */}
        <button
          onClick={togglePause}
          style={{
            background: "#222",
            border: "1px solid #666",
            color: isPaused ? "#ff0" : "#0ff",
            borderRadius: "50%",
            width: "34px",
            height: "34px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 0 4px rgba(0,255,255,0.3)",
          }}
        >
          {isPaused ? <Play size={18} /> : <Pause size={18} />}
        </button>

        {/* 🔀 Random */}
        <button
          onClick={randomizza}
          style={{
            background: "#222",
            border: "1px solid #666",
            color: "#0ff",
            borderRadius: "50%",
            width: "34px",
            height: "34px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Shuffle size={18} />
        </button>
      </div>

      {/* 🔊 Volume */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {volume > 0 ? <Volume2 size={16} /> : <VolumeX size={16} />}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={cambiaVolume}
          style={{
            flex: 1,
            accentColor: "#0ff",
            cursor: "pointer",
            height: "4px",
          }}
        />
      </div>

      <audio ref={audioRef} loop preload="auto" />
    </div>
  );
}
