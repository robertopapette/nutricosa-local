import React, { useState, useRef, useEffect } from "react";

// Rileva dispositivo
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Distanza pixel per un "step" della rotella
const ITEM_HEIGHT = 40;

export default function DateRotellaSemantica({ value, onChange }) {
  // Parsing della data esistente
  const yyyy = value ? value.slice(0, 4) : "1980";
  const mm = value ? value.slice(5, 7) : "01";
  const dd = value ? value.slice(8, 10) : "01";

  // Stati delle 6 rotelle
  const [g1, setG1] = useState(dd[0]);
  const [g2, setG2] = useState(dd[1]);

  const [m1, setM1] = useState(mm[0]);
  const [m2, setM2] = useState(mm[1]);

  const [y12, setY12] = useState(yyyy.slice(0, 2)); // "19" o "20"
  const [y3, setY3] = useState(yyyy[2]);
  const [y4, setY4] = useState(yyyy[3]);

  // Liste valori semantici
  const giorni1 = ["0", "1", "2", "3"];
  const giorni2 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const mesi1 = ["0", "1"];
  const mesi2 = m1 === "0" ? ["0","1","2","3","4","5","6","7","8","9"] : ["0","1","2"];

  const anni12 = ["19", "20"];
  const anni3 = ["0","1","2","3","4","5","6","7","8","9"];
  const anni4 = ["0","1","2","3","4","5","6","7","8","9"];

  // Refs alle rotelle per snap automatico
  const refG1 = useRef(null);
  const refG2 = useRef(null);
  const refM1 = useRef(null);
  const refM2 = useRef(null);
  const refY12 = useRef(null);
  const refY3 = useRef(null);
  const refY4 = useRef(null);

  // Funzione per aggiornare la data completa
  const updateDate = (g1_, g2_, m1_, m2_, y12_, y3_, y4_) => {
    const newDay = `${g1_}${g2_}`;
    const newMonth = `${m1_}${m2_}`;
    const newYear = `${y12_}${y3_}${y4_}`;

    onChange({
      target: {
        name: "dataNascita",
        value: `${newYear}-${newMonth}-${newDay}`,
      },
    });
  };

  // Funzione snap: trova la cifra più vicina alla linea centrale
  const snapToNearest = (ref, values, setState, group) => {
    if (!ref.current) return;

    const scrollTop = ref.current.scrollTop;
    const index = Math.round(scrollTop / ITEM_HEIGHT);

    const finalIndex = Math.max(0, Math.min(values.length - 1, index));
    const finalValue = values[finalIndex];

    // Scroll dolce verso l’elemento corretto
    ref.current.scrollTo({
      top: finalIndex * ITEM_HEIGHT,
      behavior: "smooth",
    });

    setState(finalValue);

    // Aggiorna la data
    const newG1 = group === "g1" ? finalValue : g1;
    const newG2 = group === "g2" ? finalValue : g2;

    const newM1 = group === "m1" ? finalValue : m1;
    const newM2 = group === "m2" ? finalValue : m2;

    const newY12 = group === "y12" ? finalValue : y12;
    const newY3 = group === "y3" ? finalValue : y3;
    const newY4 = group === "y4" ? finalValue : y4;

    updateDate(newG1, newG2, newM1, newM2, newY12, newY3, newY4);
  };

  // Aggiunge freccette solo su desktop
  const ArrowUp = ({ onClick, width }) =>
    !isMobile ? (
      <div
        onClick={onClick}
        style={{
          cursor: "pointer",
          fontSize: "1.2rem",
          textAlign: "center",
          width,
          userSelect: "none",
        }}
      >
        ▲
      </div>
    ) : null;

  const ArrowDown = ({ onClick, width }) =>
    !isMobile ? (
      <div
        onClick={onClick}
        style={{
          cursor: "pointer",
          fontSize: "1.2rem",
          textAlign: "center",
          width,
          userSelect: "none",
        }}
      >
        ▼
      </div>
    ) : null;

  // Calcolo responsive proporzionale (rotelle, font-size ecc.)
  const wheelHeight = `calc(14vh + 40px)`;
  const fontSize = `calc(1.2rem + 0.3vw)`;

  // Linea centrale nera
  const centralLine = (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: 0,
        right: 0,
        height: "2px",
        background: "black",
        transform: "translateY(-50%)",
        zIndex: 20,
        opacity: 0.75,
      }}
    />
  );

  // Generatore rotella
  const renderWheel = (label, values, stateValue, setState, ref, group) => {
    const wheel = (
      <>
        <div
          ref={ref}
          onScroll={() => {
            clearTimeout(ref.current._scrollTimeout);
            ref.current._scrollTimeout = setTimeout(() => {
              snapToNearest(ref, values, setState, group);
            }, 80);
          }}
          style={{
            position: "relative",
            width: "60px",
            height: wheelHeight,
            overflowY: "scroll",
            scrollSnapType: "y mandatory",
            border: "1px solid #aaa",
            borderRadius: "8px",
            background: "rgba(255,255,255,0.85)",
            fontSize,
          }}
        >
          <div style={{ paddingTop: wheelHeight }}>
            {values.map((v, i) => (
              <div
                key={i}
                style={{
                  height: ITEM_HEIGHT,
                  lineHeight: `${ITEM_HEIGHT}px`,
                  textAlign: "center",
                  opacity: v === stateValue ? 1 : 0.35,
                  fontWeight: v === stateValue ? "bold" : "normal",
                }}
              >
                {v}
              </div>
            ))}
          </div>
          <div style={{ paddingBottom: wheelHeight }}></div>
          {centralLine}
        </div>
      </>
    );

    return wheel;
  };

  return (
    <div style={{ width: "100%", textAlign: "center", padding: "1rem 0" }}>
      <div
        style={{
          padding: "0.4rem",
          border: "1px solid #444",
          borderRadius: "6px",
          marginBottom: "1.2rem",
          background: "#fff",
          fontWeight: "bold",
        }}
      >
        {`${g1}${g2}/${m1}${m2}/${y12}${y3}${y4}`}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
        }}
      >
        {/* GRUPPO GIORNO */}
        <div style={{ textAlign: "center" }}>
          <ArrowUp
            onClick={() => snapToNearest(refG1, giorni1, setG1, "g1")}
            width="10px"
          />
          {renderWheel("G1", giorni1, g1, setG1, refG1, "g1")}
          <ArrowDown
            onClick={() => snapToNearest(refG1, giorni1, setG1, "g1")}
            width="25px"
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <ArrowUp
            onClick={() => snapToNearest(refG2, giorni2, setG2, "g2")}
            width="25px"
          />
          {renderWheel("G2", giorni2, g2, setG2, refG2, "g2")}
          <ArrowDown
            onClick={() => snapToNearest(refG2, giorni2, setG2, "g2")}
            width="25px"
          />
        </div>

        {/* GRUPPO MESE */}
        <div style={{ textAlign: "center" }}>
          <ArrowUp
            onClick={() => snapToNearest(refM1, mesi1, setM1, "m1")}
            width="25px"
          />
          {renderWheel("M1", mesi1, m1, setM1, refM1, "m1")}
          <ArrowDown
            onClick={() => snapToNearest(refM1, mesi1, setM1, "m1")}
            width="25px"
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <ArrowUp
            onClick={() => snapToNearest(refM2, mesi2, setM2, "m2")}
            width="25px"
          />
          {renderWheel("M2", mesi2, m2, setM2, refM2, "m2")}
          <ArrowDown
            onClick={() => snapToNearest(refM2, mesi2, setM2, "m2")}
            width="25px"
          />
        </div>

        {/* GRUPPO ANNO */}
        <div style={{ textAlign: "center", marginLeft: "24px" }}>
          <ArrowUp
            onClick={() => snapToNearest(refY12, anni12, setY12, "y12")}
            width="50px"
          />
          <div style={{ display: "flex" }}>
            {renderWheel("Y12", anni12, y12, setY12, refY12, "y12")}
          </div>
          <ArrowDown
            onClick={() => snapToNearest(refY12, anni12, setY12, "y12")}
            width="50px"
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <ArrowUp
            onClick={() => snapToNearest(refY3, anni3, setY3, "y3")}
            width="25px"
          />
          {renderWheel("Y3", anni3, y3, setY3, refY3, "y3")}
          <ArrowDown
            onClick={() => snapToNearest(refY3, anni3, setY3, "y3")}
            width="25px"
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <ArrowUp
            onClick={() => snapToNearest(refY4, anni4, setY4, "y4")}
            width="25px"
          />
          {renderWheel("Y4", anni4, y4, setY4, refY4, "y4")}
          <ArrowDown
            onClick={() => snapToNearest(refY4, anni4, setY4, "y4")}
            width="25px"
          />
        </div>
      </div>
    </div>
  );
}
