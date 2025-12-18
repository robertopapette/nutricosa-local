import { useState, useEffect } from "react";

const PREVIEW_TOKEN = import.meta.env.VITE_PREVIEW_ACCESS_TOKEN;
const ACCESS_KEY = "ns_preview_access";

export default function WorkInProgressGate({ children }) {
  const [unlocked, setUnlocked] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  // Controlla se l'utente ha già sbloccato l'accesso
  useEffect(() => {
    const hasAccess = localStorage.getItem(ACCESS_KEY) === "true";
    if (hasAccess) {
      setUnlocked(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PREVIEW_TOKEN) {
      localStorage.setItem(ACCESS_KEY, "true");
      setUnlocked(true);
    } else {
      setError("Password errata");
    }
  };

  // Se sbloccato → mostra l'app
  if (unlocked) return children;

  // Altrimenti mostra il Work in Progress + password
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#020617",
        color: "#f9fafb",
        padding: "1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: 420,
          width: "100%",
          background: "#0f172a",
          borderRadius: "1rem",
          padding: "1.5rem",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", marginBottom: "0.75rem", color: "#facc15" }}>
          Nutrition Spiral / NutriCoSa
        </h1>

        <p style={{ marginBottom: "1rem", lineHeight: 1.5 }}>
          Area privata – versione <strong>Work in Progress</strong>.
          <br />
          Inserisci la password per accedere.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={input}
            placeholder="Password"
            onChange={(e) => {
              setInput(e.target.value);
              setError("");
            }}
            style={{
              width: "100%",
              padding: "0.6rem 0.8rem",
              borderRadius: "0.5rem",
              border: "1px solid #475569",
              marginBottom: "0.75rem",
              fontSize: "1rem",
              background: "#1e293b",
              color: "#f1f5f9",
            }}
          />

          {error && (
            <div style={{ color: "#f87171", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
              {error}
            </div>
          )}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.7rem",
              borderRadius: "0.5rem",
              border: "none",
              background: "#facc15",
              color: "#111827",
              fontWeight: "600",
              fontSize: "1.1rem",
              cursor: "pointer",
            }}
          >
            Entra
          </button>
        </form>

        <p
          style={{
            marginTop: "1rem",
            fontSize: "0.8rem",
            opacity: 0.6,
            textAlign: "center",
          }}
        >
          Accesso riservato al fondatore.
        </p>
      </div>
    </div>
  );
}
