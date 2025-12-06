import React from "react";
import { motion } from "framer-motion";

/**
 * GaugeEquilibrio.jsx – versione micro
 * Dimensione allineata alla scritta "Analizzatore" (~15% originale)
 */

const GaugeEquilibrio = ({ valore = 85 }) => {
  const percentuale = Math.min(Math.max(valore, 0), 120);
  const angolo = (percentuale / 100) * 180;
  const colore =
    percentuale < 80 ? "#facc15" : percentuale <= 100 ? "#22c55e" : "#ef4444";

  return (
    <div className="flex flex-col items-center justify-center select-none scale-[0.45]">
      {/* Testo sopra */}
      <div className="text-center mb-0.5 leading-none">
        <p className="text-[8px] font-bold" style={{ color: colore }}>
          {percentuale}%
        </p>
        <p className="text-gray-400 text-[7px]">Equilibrio</p>
      </div>

      {/* Mini semicerchio */}
      <div className="relative w-12 h-6 mt-[1px]">
        <svg
          viewBox="0 0 100 50"
          className="w-full h-full translate-y-[3px]"
        >
          <defs>
            <linearGradient
              id="gaugeGradient"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="50%" stopColor="#22c55e" />
              <stop offset="100%" stopColor="#ef4444" />
            </linearGradient>
          </defs>
          <path
            d="M 5 45 A 45 45 0 0 1 95 45"
            fill="none"
            stroke="url(#gaugeGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>

        {/* Lancetta */}
        <motion.div
          className="absolute bottom-0 left-1/2 origin-bottom"
          style={{
            width: "1px",
            height: "15px",
            backgroundColor: colore,
            borderRadius: "1px",
            transform: `translateX(-50%) rotate(${angolo - 90}deg)`,
          }}
        />

        {/* Punto centrale */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[3px] h-[3px] bg-gray-800 rounded-full border border-white"></div>
      </div>
    </div>
  );
};

export default GaugeEquilibrio;
