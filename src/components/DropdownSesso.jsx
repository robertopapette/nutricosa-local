import { useState } from "react";

export default function DropdownSesso({ value, onChange }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (v) => {
    onChange({ target: { name: "sesso", value: v } });
    setOpen(false);
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          padding: "0.45rem",
          borderRadius: "6px",
          border: "1px solid #444",
          background: "#fff",
          cursor: "pointer",
          fontSize: "0.95rem",
        }}
      >
        {value === "M" ? "Maschio" : "Femmina"}
      </div>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            marginTop: "0.2rem",
            background: "#fff",
            border: "1px solid #444",
            borderRadius: "6px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            zIndex: 50,
          }}
        >
          <div
            onClick={() => handleSelect("M")}
            style={{
              padding: "0.45rem",
              cursor: "pointer",
              background: value === "M" ? "#e3f9e5" : "#fff",
            }}
          >
            Maschio
          </div>
          <div
            onClick={() => handleSelect("F")}
            style={{
              padding: "0.45rem",
              cursor: "pointer",
              background: value === "F" ? "#e3f9e5" : "#fff",
            }}
          >
            Femmina
          </div>
        </div>
      )}
    </div>
  );
}
