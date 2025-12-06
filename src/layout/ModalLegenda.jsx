import { iconeLegenda } from "../data/iconeLegenda";

export default function ModalLegenda({ visibile, onChiudi }) {
  if (!visibile) return null;

  return (
    <div
      onClick={onChiudi}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 3000,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          color: "#1f2937",
          borderRadius: "12px",
          padding: "1rem 1.5rem",
          minWidth: "320px",
          maxWidth: "480px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
          border: "1px solid #ddd",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0d3b66",
            fontSize: "1.1rem",
            fontWeight: "bold",
            marginBottom: "0.8rem",
          }}
        >
          🔍 Icone rapide
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "0.8rem",
          }}
        >
          {Object.entries(iconeLegenda).map(([codice, gruppo]) => (
            <button
              key={codice}
              title={gruppo.nome}
              style={{
                background: gruppo.colore,
                border: "none",
                borderRadius: "8px",
                padding: "0.5rem 0.7rem",
                color: "white",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "0.9rem",
                transition: "transform 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onClick={(e) => e.stopPropagation()}
            >
              {codice}
            </button>
          ))}
        </div>

        <p
          style={{
            marginTop: "1rem",
            fontSize: "0.8rem",
            textAlign: "center",
            color: "#6b7280",
          }}
        >
          Tocca o clicca “Icone rapide” per chiudere.
        </p>
      </div>
    </div>
  );
}
