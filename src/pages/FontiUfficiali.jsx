import React from "react";
import PageContainer from "../components/PageContainer";

export default function FontiUfficiali() {
  return (
    <PageContainer
  titolo="Fonti ufficiali"
  sottotitolo="Riferimenti scientifici e database nutrizionali"
>
  <div style={{ maxWidth: "900px", margin: "0 auto", lineHeight: 1.7 }}>
    <p>
      Le informazioni nutrizionali presenti in <strong>Nutrition Spiral</strong>
      si basano esclusivamente su <strong>fonti scientifiche ufficiali</strong>,
      database riconosciuti a livello internazionale e letteratura validata.
    </p>

    <p>
      L’obiettivo non è creare nuove tabelle nutrizionali, ma raccogliere,
      confrontare e organizzare dati esistenti in modo coerente, trasparente e
      verificabile, rispettando l’origine di ogni informazione.
    </p>

    <p>
      Tra le principali fonti di riferimento utilizzate e studiate nel progetto
      rientrano:
    </p>

    <ul style={{ marginLeft: "1.5rem" }}>
      <li>
        <strong>USDA</strong> – United States Department of Agriculture, uno dei
        database nutrizionali più completi e strutturati a livello mondiale.
      </li>
      <li>
        <strong>INFOODS</strong> – International Network of Food Data Systems,
        coordinato dalla FAO, che promuove standard internazionali per i dati
        alimentari.
      </li>
      <li>
        <strong>CIQUAL</strong> – Database ufficiale francese sugli alimenti,
        curato da ANSES, con particolare attenzione alla qualità dei dati
        europei.
      </li>
      <li>
        <strong>FINELI</strong> – Database nutrizionale finlandese, noto per la
        precisione e l’aggiornamento continuo delle informazioni.
      </li>
      <li>
        <strong>AJCN</strong> – American Journal of Clinical Nutrition, punto di
        riferimento per la letteratura scientifica in ambito nutrizionale e
        clinico.
      </li>
    </ul>

    <p>
      Oltre ai database alimentari, vengono considerati anche documenti e linee
      guida di enti istituzionali e scientifici internazionali, come
      <strong>WHO</strong> ed <strong>EFSA</strong>, per garantire coerenza con le
      raccomandazioni ufficiali.
    </p>

    <p>
      <strong>Nutrition Spiral</strong> nasce con l’intento di rendere questi
      dati complessi <strong>comprensibili, interrogabili e confrontabili</strong>,
      senza semplificazioni fuorvianti, mantenendo sempre un collegamento chiaro
      con la fonte originale.
    </p>

    <p style={{ marginTop: "1.5rem", fontStyle: "italic", opacity: 0.8 }}>
      Sezione in evoluzione — l’elenco delle fonti e le modalità di integrazione
      verranno progressivamente ampliate e documentate.
    </p>
  </div>
    </PageContainer>
  );
}
