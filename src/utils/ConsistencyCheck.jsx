// ✅ ConsistencyCheck.jsx — versione stabile aggiornata (menuTop 36px, raggio 8–12px)
import { useEffect, useState } from "react";

export default function ConsistencyCheck() {
  const [status, setStatus] = useState("checking");
  const [message, setMessage] = useState("Controllo...");
  const [visible, setVisible] = useState(false); // 👈 di default nascosto

  useEffect(() => {
    const header = document.querySelector("header");
    const menu = document.querySelector("aside");

    if (!header || !menu) {
      setStatus("error");
      setMessage("Componenti mancanti");
      return;
    }

    // Lettura proprietà reali
    const headerHeight = header.offsetHeight;
    const menuTop = parseInt(window.getComputedStyle(menu).top, 10) || 0;

    // Lettura sicura del raggio con fallback
    const rawRadius =
      window.getComputedStyle(menu).borderTopLeftRadius || "0px";
    const radiusValue = parseInt(rawRadius.replace("px", ""), 10);

    let allGood = true;
    let msg = [];

    // 🔹 Controllo altezza HeaderTop
    if (headerHeight !== 56) {
      allGood = false;
      msg.push(`Header ${headerHeight}px (atteso 56px)`);
    }

    // 🔹 Controllo allineamento verticale del menu
    if (menuTop < 30 || menuTop > 40) {
      allGood = false;
      msg.push(`Menu top=${menuTop}px`);
    }

    // 🔹 Controllo coerenza del raggio (8–12px accettati)
    if (isNaN(radiusValue) || radiusValue < 8 || radiusValue > 12) {
      allGood = false;
      msg.push(`Raggio incoerente (${rawRadius})`);
    }

    // 🔹 Esito finale
    if (allGood) {
      setStatus("ok");
      setMessage("Layout OK ✅");
    } else {
      setStatus("warn");
      setMessage(msg.join(" | "));
    }

    // 🔹 Scorciatoia Alt + L per mostrare/nascondere
    const toggleBadge = (e) => {
      if (e.altKey && e.key.toLowerCase() === "l") {
        setVisible((prev) => !prev);
      }
    };
    window.addEventListener("keydown", toggleBadge);
    return () => window.removeEventListener("keydown", toggleBadge);
  }, []);

  // 🔹 Stile badge
  const badgeStyle = {
    position: "fixed",
    bottom: "10px",
    right: "10px",
    padding: "6px 10px",
    borderRadius: "6px",
    fontSize: "0.8rem",
    fontWeight: "500",
    zIndex: 99999,
    color: "white",
    background:
      status === "ok"
        ? "rgba(0, 180, 0, 0.85)"
        : status === "warn"
        ? "rgba(200, 150, 0, 0.85)"
        : "rgba(180, 0, 0, 0.85)",
    boxShadow: "0 0 6px rgba(0,0,0,0.4)",
    backdropFilter: "blur(3px)",
    transition: "opacity 0.3s ease",
    opacity: visible ? 1 : 0,
    pointerEvents: "none", // 👈 non blocca i click sul sito
  };

  return <div style={badgeStyle}>{message}</div>;
}
