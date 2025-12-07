export default function InternationalWIP() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0f1c",
        color: "white",
        padding: "1.5rem",
      }}
    >
      <div
        style={{
          maxWidth: "650px",
          textAlign: "center",
          lineHeight: 1.5,
          padding: "1rem",
        }}
      >
        {/* TITOLO */}
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            fontWeight: "bold",
            color: "#facc15",
            marginBottom: "0.3rem",
          }}
        >
          Nutrition Spiral
        </h1>

        {/* SOTTOTITOLO */}
        <h2
          style={{
            fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
            color: "#3bb273",
            marginBottom: "2rem",
            fontWeight: 600,
          }}
        >
          The Universal Nutrition Engine
        </h2>

        {/* TESTO INTRO */}
        <p
          style={{
            fontSize: "clamp(0.95rem, 2.8vw, 1.2rem)",
            opacity: 0.9,
            marginBottom: "1rem",
          }}
        >
          We are building a new way to understand food, energy, and life.
        </p>

        <p
          style={{
            fontSize: "clamp(0.95rem, 2.7vw, 1.2rem)",
            opacity: 0.75,
            marginBottom: "2rem",
          }}
        >
          A scientific, semantic and conscious approach to nutrition — for everyone.
        </p>

        {/* MOTTO */}
        <p
          style={{
            fontSize: "clamp(1rem, 2.6vw, 1.25rem)",
            fontStyle: "italic",
            color: "#facc15",
            marginBottom: "1rem",
          }}
        >
          “Solid as granite, gentle or fierce like the wind.”
        </p>

        {/* FIRMA */}
        <p
          style={{
            opacity: 0.8,
            marginBottom: "2rem",
            fontSize: "clamp(0.9rem, 2.4vw, 1.1rem)",
          }}
        >
          — <strong>R. Papette</strong>, Founder of Nutrition Spiral
        </p>

        {/* NOTA FINALE */}
        <p
          style={{
            fontSize: "clamp(0.85rem, 2.2vw, 1rem)",
            opacity: 0.6,
          }}
        >
          Launching soon — follow the journey.
        </p>
      </div>
    </div>
  );
}
