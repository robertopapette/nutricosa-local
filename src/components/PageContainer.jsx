import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { theme } from "../theme";

export default function PageContainer({
  titolo,
  sottotitolo,
  children,
  wide = false,
}) {
  const location = useLocation();

  useEffect(() => {
    const container = document.getElementById("page-scroll");
    if (!container) return;

    // 🧓 Il nonno parla SOLO se arrivo dal menu
    if (location.state?.fromMenu) {
      container.scrollTop = 0;
    }

    // ❌ Se torno da una figlia → NON FARE NULLA
  }, [location.state?.fromMenu]);

  return (
    <div
      style={{
        minHeight: "calc(100vh - 56px)",
        background: "#f7f5f2",
        color: "#1c1c1c",
        padding: "80px 20px 60px",
        margin: "0 auto",
        maxWidth: wide ? "1200px" : "900px",
        fontFamily: theme.font.base,
      }}
    >
      {titolo && (
        <h1
          style={{
            color: theme.colori.accento,
            textAlign: "center",
            marginBottom: "0.75rem",
          }}
        >
          {titolo}
        </h1>
      )}

      {sottotitolo && (
        <p
          style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#555",
            fontStyle: "italic",
          }}
        >
          {sottotitolo}
        </p>
      )}

      <div>{children}</div>
    </div>
  );
}
