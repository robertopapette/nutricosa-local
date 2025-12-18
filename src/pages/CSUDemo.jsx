import { useState } from "react";
import { ALIMENTI_DEMO } from "../data/csuDemoData";

/*
  =========================
  CSU DEMO — STEP 3/4.1
  Stato + ricerca + lista righe + stato cliccabile
  =========================
*/

export default function CSUDemo() {
  /* =========================
     FUNZIONI DI SUPPORTO
     ========================= */

  function generaUUID() {
    return crypto.randomUUID();
  }

  function generaTimestampISO() {
    return new Date().toISOString();
  }

  function getOraCorrente() {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    return `${hh}:${mm}`;
  }

  /* =========================
     STATO PRINCIPALE
     ========================= */

  const [attoCorrente, setAttoCorrente] = useState({
    righe: [],
    ora_atto: getOraCorrente(),
    analizzato: false,
    // timestamp_atto: generaTimestampISO(), // (se ti serve dopo, lo riattiviamo)
  });

  const [storicoAtti, setStoricoAtti] = useState([]);

  const [ricercaAttiva, setRicercaAttiva] = useState(false);
  const [testoRicerca, setTestoRicerca] = useState("");
  const [rigaInModifica, setRigaInModifica] = useState(null);
  const [quantitaInModifica, setQuantitaInModifica] = useState(null);


  /* =========================
     AZIONI CSU — RIGHE
     ========================= */

  function aggiungiRiga(riga) {
    setAttoCorrente((prev) => ({
      ...prev,
      righe: [...prev.righe, { ...riga, riga_id: generaUUID() }],
    }));
  }

  function aggiornaStatoPreparazione(riga_id, nuovoStato) {
    setAttoCorrente((prev) => ({
      ...prev,
      righe: prev.righe.map((r) =>
        r.riga_id === riga_id ? { ...r, cottura: nuovoStato } : r
      ),
    }));
    setRigaInModifica(null);
  }

  function aggiornaQuantita(riga_id, nuovaQuantita) {
    setAttoCorrente((prev) => ({
      ...prev,
      righe: prev.righe.map((r) =>
        r.riga_id === riga_id ? { ...r, quantita: nuovaQuantita } : r
      ),
    }));
    setQuantitaInModifica(null);
  }

  /* =========================
     RICERCA PER PREFISSO
     ========================= */

  function risultatiRicerca() {
    if (!ricercaAttiva || testoRicerca.trim() === "") return [];
    const query = testoRicerca.toLowerCase();
    return ALIMENTI_DEMO.filter((a) => a.nome.toLowerCase().startsWith(query));
  }

  function selezionaAlimento(alimento) {
    aggiungiRiga({
      alimento_id: alimento.alimento_id,
      nome: alimento.nome,
      cottura: alimento.stato_preparazione_default,
      quantita: alimento.quantita_default,
    });

    setTestoRicerca("");
    setRicercaAttiva(false);
  }

  /* =========================
     DEBUG
     ========================= */

  console.log("RIGHE CORRENTI:", attoCorrente.righe);

  /* =========================
     RENDER
     ========================= */

  return (
    <div style={{ padding: "1rem" }}>
      <h1>CSU Demo (Step 3)</h1>

      <p>
        <strong>Ora atto:</strong> {attoCorrente.ora_atto}
      </p>

      <p>
        <strong>Righe attuali:</strong> {attoCorrente.righe.length}
      </p>

      <p>
        <strong>Atti in storico:</strong> {storicoAtti.length}
      </p>

      <hr />

      {!ricercaAttiva && (
        <button onClick={() => setRicercaAttiva(true)}>Aggiungi alimento</button>
      )}

      {ricercaAttiva && (
        <div style={{ marginTop: "1rem" }}>
          <input
            type="text"
            placeholder="Scrivi alimento..."
            value={testoRicerca}
            onChange={(e) => setTestoRicerca(e.target.value)}
            autoFocus
          />

          <ul>
            {risultatiRicerca().map((a) => (
              <li key={a.alimento_id}>
                <button onClick={() => selezionaAlimento(a)}>{a.nome}</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <hr />

      <h3>Righe inserite</h3>

      {attoCorrente.righe.length === 0 ? (
        <p>Nessuna riga inserita</p>
      ) : (
        <ul>
          {attoCorrente.righe.map((riga) => {
            const alimento = ALIMENTI_DEMO.find(
              (a) => a.alimento_id === riga.alimento_id
            ) ;

            return (
              <li key={riga.riga_id} style={{ marginBottom: "0.6rem" }}>
                <strong>{riga.nome}</strong>
                {" — "}
                <em
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() =>
                    setRigaInModifica(
                      rigaInModifica === riga.riga_id ? null : riga.riga_id
                    )
                  }
                >
                  {riga.cottura}
                </em>
                {" — "}
                <span
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                  onClick={() =>
                    setQuantitaInModifica(
                      quantitaInModifica === riga.riga_id ? null : riga.riga_id
                     )
                   }
                 >
                   {riga.quantita}
                 </span>

                {rigaInModifica === riga.riga_id && alimento && (
                  <ul style={{ marginTop: "0.35rem" }}>
                    {alimento.stati_preparazione_ammessi.map((stato) => (
                      <li key={stato}>
                        <button
                          onClick={() =>
                            aggiornaStatoPreparazione(riga.riga_id, stato)
                          }
                        >
                          {stato}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                {quantitaInModifica === riga.riga_id && alimento && (
                  <ul style={{ marginTop: "0.35rem" }}>
                    {alimento.quantita_ammessa.map((q) => (
                      <li key={q}>
                        <button
                          onClick={() => aggiornaQuantita(riga.riga_id, q)}
                         >
                           {q}
                </button>
                     </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}

      {/* UI definitiva verrà costruita negli step successivi */}
    </div>
  );
}
    