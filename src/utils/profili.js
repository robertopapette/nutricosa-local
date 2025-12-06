// ✅ Gestione profili utente locale – Nutrizione Consapevole
// Tutte le funzioni di creazione, lettura, aggiornamento e cancellazione
// Versione 1.0 – stabile e pronta per integrazione futura con DB/account

import { v4 as uuidv4 } from "uuid";

// 🔹 Costanti limite in base al livello
const LIMITE_PROFILI = {
  free: 1,
  plus: 5,
  pro: 15,
};

// 🔹 Recupera tutti i profili dal localStorage
export const getProfili = () => {
  return JSON.parse(localStorage.getItem("profiliUtente")) || [];
};

// 🔹 Salva la lista completa di profili
export const setProfili = (profili) => {
  localStorage.setItem("profiliUtente", JSON.stringify(profili));
};

// 🔹 Recupera il profilo attivo
export const getProfiloAttivo = () => {
  return JSON.parse(localStorage.getItem("profiloAttivo")) || null;
};

// 🔹 Imposta un profilo come attivo
export const setProfiloAttivo = (profilo) => {
  localStorage.setItem("profiloAttivo", JSON.stringify(profilo));
};

// 🔹 Crea un nuovo profilo
export const creaProfilo = (nome, livello = "free") => {
  const profili = getProfili();

  // Controlla limiti in base al livello
  const limite = LIMITE_PROFILI[livello] || 1;
  if (profili.length >= limite) {
    alert(`⚠️ Hai raggiunto il limite di ${limite} profili per il livello ${livello.toUpperCase()}.`);
    return null;
  }

  const nuovo = {
    id: uuidv4(),
    nome,
    sesso: "M",
    livello,
    dataCreazione: new Date().toISOString(),
    ultimoAccesso: null,
    dati: {},
  };

  profili.push(nuovo);
  setProfili(profili);
  return nuovo;
};

// 🔹 Aggiorna i dati di un profilo esistente
export const aggiornaProfilo = (id, nuoviDati) => {
  const profili = getProfili();
  const aggiornati = profili.map((p) =>
    p.id === id
      ? {
          ...p,
          dati: { ...p.dati, ...nuoviDati },
          ultimoAccesso: new Date().toISOString(),
        }
      : p
  );
  setProfili(aggiornati);
};

// 🔹 Elimina un profilo per ID
export const eliminaProfilo = (id) => {
  const profili = getProfili().filter((p) => p.id !== id);
  setProfili(profili);

  const attivo = getProfiloAttivo();
  if (attivo && attivo.id === id) {
    localStorage.removeItem("profiloAttivo");
  }
};

// 🔹 Seleziona un profilo e lo imposta come attivo
export const selezionaProfilo = (id) => {
  const profili = getProfili();
  const trovato = profili.find((p) => p.id === id);
  if (trovato) {
    setProfiloAttivo(trovato);
    return trovato;
  }
  return null;
};

// 🔹 Reimposta tutto (funzione di servizio, usata solo per debug o reset)
export const resetProfili = () => {
  localStorage.removeItem("profiliUtente");
  localStorage.removeItem("profiloAttivo");
};
