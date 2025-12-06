import { useState, useRef } from "react";

export default function AudioAmbientale() {
  const [attivo, setAttivo] = useState(false);
  const [brano, setBrano] = useState("pioggia");
  const audioRef = useRef(null);

  const toggle = () => {
    setAttivo(!attivo);
    if (audioRef.current) {
      attivo ? audioRef.current.pause() : audioRef.current.play();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border-2 border-black p-3 rounded-xl shadow-lg">
      <select
        className="border border-gray-400 rounded p-1 mr-2"
        value={brano}
        onChange={(e) => {
          setBrano(e.target.value);
          if (audioRef.current) audioRef.current.src = `/assets/audio/${e.target.value}.mp3`;
          if (attivo) audioRef.current.play();
        }}
      >
        <option value="cascata">🌊 Cascata</option>
        <option value="pioggia">🌧️ Pioggia</option>
        <option value="bosco">🌲 Bosco</option>
      </select>
      <button onClick={toggle} className="font-bold">
        {attivo ? "🔇 Stop" : "🎧 Play"}
      </button>
      <audio ref={audioRef} loop preload="auto" src={`/assets/audio/${brano}.mp3`} />
    </div>
  );
}
