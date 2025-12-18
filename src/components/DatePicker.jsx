import { useState } from "react";

export default function DatePicker({ value, onChange }) {
  const [open, setOpen] = useState(false);

  const formatted =
    value && !isNaN(Date.parse(value))
      ? new Date(value).toLocaleDateString("it-IT")
      : "";

  const handleManual = (e) => {
    onChange({
      target: { name: "dataNascita", value: e.target.value },
    });
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* campo visivo */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          padding: "0.45rem",
          borderRadius: "6px",
          border: "1px solid #444",
          background: "#fff",
          cursor: "pointer",
          fontSize: "0.95rem",
          userSelect: "none",
        }}
      >
        {formatted || "Seleziona data"}
      </div>

      {/* pannello interno */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "105%",
            left: 0,
            right: 0,
            background: "#fff",
            border: "1px solid #444",
            borderRadius: "6px",
            padding: "0.6rem",
            zIndex: 60,
            display: "flex",
            flexDirection: "column",
            gap: "0.4rem",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          <input
            type="text"
            placeholder="yyyy-mm-dd"
            value={value}
            onChange={(e) => handleManual(e)}
            style={{
              padding: "0.4rem",
              borderRadius: "6px",
              border: "1px solid #666",
              fontSize: "0.95rem",
            }}
          />
        </div>
      )}
    </div>
  );
}
