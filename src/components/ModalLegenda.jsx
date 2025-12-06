export default function ModalLegenda() {
  return (
    <div
      style={{
        position: "fixed",
        top: "80px",
        right: "40px",
        background: "white",
        border: "2px solid #16a34a",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
        padding: "1rem 1.5rem",
        zIndex: 999999,
        width: "260px",
      }}
    >
      <h2 style={{ color: "#16a34a", fontWeight: "bold", marginBottom: "0.5rem" }}>
        Legenda (test)
      </h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "#333" }}>
        <li>🟢 Compatibile</li>
        <li>🟡 Neutro</li>
        <li>🔴 Evitare</li>
      </ul>
    </div>
  );
}
