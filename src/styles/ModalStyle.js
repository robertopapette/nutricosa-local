// src/styles/ModalStyle.js

// 🎨 Stile base per finestre modali fluttuanti
export const modalBoxStyle = {
  position: "fixed",
  width: "280px",
  background: "rgba(255,255,255,0.97)",
  borderRadius: "14px",
  padding: "1rem 1.25rem",
  zIndex: 999999,
  cursor: "move",
  userSelect: "none",

  /* 🌈 Cornice sfumata diagonale (verde → giallo → rosso) */
  border: "2px solid transparent",
  backgroundImage:
    "linear-gradient(white, white), linear-gradient(135deg, green 0%, #fad015ff 65%, red 85%)",
  backgroundOrigin: "border-box",
  backgroundClip: "content-box, border-box",

  /* 💡 Effetto luce interna calda e ombra esterna */
  boxShadow:
    "0 3px 10px rgba(0,0,0,0.25), inset -3px -3px 6px rgba(255,255,180, 0.15)",
};
