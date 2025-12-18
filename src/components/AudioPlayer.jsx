// 🎧 AudioPlayer.jsx — play continuo, loop e random ON/OFF
import { useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  Square,
  Shuffle,
  Volume2,
  VolumeX,
  Repeat,
} from "lucide-react";

export default function AudioPlayer({ visible = true }) {
  const audioRef = useRef(null);

  const playlist = [
    "/assets/audio/cascata.mp3",
    "/assets/audio/No More Fighting (Remastered 2001).mp3",
    "/assets/audio/Uptown Top Ranking (Remastered 2001).mp3",
    "/assets/audio/Pitura Freska - Indiani.mp3",
    "/assets/audio/Rat Race (1986) - Bob Marley & The Wailers.mp3",

    
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [isRandom, setIsRandom] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [volume, setVolume] = useState(
    parseFloat(localStorage.getItem("volume")) || 0.5
  );
  const [brano, setBrano] = useState("");

  // 🎵 Avvio iniziale casuale
  useEffect(() => {
    const start = Math.floor(Math.random() * playlist.length);
    setCurrentIndex(start);
    if (audioRef.current) {
      audioRef.current.src = playlist[start];
      audioRef.current.volume = volume;
      setBrano(playlist[start].split("/").pop().replace(".mp3", ""));
    }
  }, []);

  // 💾 Salva volume
  useEffect(() => {
    localStorage.setItem("volume", volume.toString());
  }, [volume]);

  // ▶️ Play / Stop
  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
      setIsPaused(false);
    } else {
      audio.src = playlist[currentIndex];
      audio.play();
      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  // ⏸️ Pausa / Riprendi
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

  // 🔀 Shuffle manuale (salta subito)
  const randomizza = () => {
    const casuale = Math.floor(Math.random() * playlist.length);
    const audio = audioRef.current;
    setCurrentIndex(casuale);
    audio.src = playlist[casuale];
    setBrano(playlist[casuale].split("/").pop().replace(".mp3", ""));
    if (isPlaying && !isPaused) audio.play();
  };

  // ⏭️ Gestione fine brano
  const handleEnded = () => {
    if (isLoop) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      return;
    }

    let nextIndex = currentIndex;

    if (isRandom) {
      do {
        nextIndex = Math.floor(Math.random() * playlist.length);
      } while (nextIndex === currentIndex && playlist.length > 1);
    } else {
      nextIndex = (currentIndex + 1) % playlist.length;
    }

    setCurrentIndex(nextIndex);
    audioRef.current.src = playlist[nextIndex];
    setBrano(playlist[nextIndex].split("/").pop().replace(".mp3", ""));
    audioRef.current.play();
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
        color: "rgba(218, 229, 16, 1)",
        fontFamily: "monospace",
        boxShadow: "0 0 10px rgba(0,0,0,0.6)",
        userSelect: "none",
      }}
    >
      {/* 🖥️ Display */}
      <div
        style={{
          background: "linear-gradient(180deg, #000, #111)",
          border: "1px solid rgba(9, 205, 19, 1)",
          borderRadius: "4px",
          padding: "6px",
          fontSize: "0.8rem",
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
                background: "rgba(248, 1, 1, 1)",
                borderRadius: "2px",
                animation:
                  isPlaying && !isPaused
                    ? `eq${i % 5} 0.6s infinite ease-in-out`
                    : "none",
              }}
            />
          ))}
        </div>
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
        {/* Play / Stop */}
        <button onClick={toggleAudio}>
          {isPlaying ? <Square size={18} /> : <Play size={18} />}
        </button>

        {/* Pausa */}
        <button onClick={togglePause}>
          {isPaused ? <Play size={18} /> : <Pause size={18} />}
        </button>

        {/* Shuffle manuale */}
        <button onClick={randomizza}>
          <Shuffle size={18} />
        </button>

        {/* Shuffle auto */}
        <button
          onClick={() => setIsRandom(!isRandom)}
          style={{ color: isRandom ? "rgba(207, 207, 10, 1)" : "rgba(8, 58, 58, 1)" }}
        >
          <Shuffle size={18} />
        </button>

        {/* Loop */}
        <button
          onClick={() => setIsLoop(!isLoop)}
          style={{ color: isLoop ? "rgba(183, 183, 12, 1)" : "rgba(8, 58, 58, 1)" }}
        >
          <Repeat size={18} />
        </button>
      </div>

      {/* Volume */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {volume > 0 ? <Volume2 size={16} /> : <VolumeX size={16} />}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={cambiaVolume}
          style={{ flex: 1 }}
        />
      </div>

      <audio ref={audioRef} preload="auto" onEnded={handleEnded} />
    </div>
  );
}
