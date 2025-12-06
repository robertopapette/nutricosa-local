// ==============================================
// 💚💛❤️ SISTEMA INTERPRETATIVO – Nutrizione Consapevole
// ==============================================
//
// Descrizione:
// Libreria centralizzata di mapping logico per
// la rappresentazione sintetica dei risultati
// morfologici e metabolici dell’utente.
//
// Ogni funzione riceve i valori numerici calcolati
// (peso, sesso, percentuali, indici) e restituisce
// un oggetto nel formato:
//
//   { cuore: "💚", testo: "Equilibrio ottimale" }
//
// ==============================================

export const interpretazioni = {

  // 1️⃣ Percentuale Massa Grassa
  percentualeGrassa: (valore, sesso) => {
    if (sesso === "M") {
      if (valore <= 13) return { cuore: "💚", testo: "In forma – struttura atletica" };
      if (valore <= 17) return { cuore: "💚", testo: "Buona forma – composizione ideale" };
      if (valore <= 24) return { cuore: "💛", testo: "Range fisiologico – equilibrio mantenuto" };
      if (valore <= 29) return { cuore: "💛", testo: "Eccesso moderato – miglioramento graduale" };
      return { cuore: "❤️", testo: "Eccesso adiposo – riequilibrio consigliato" };
    } else {
      if (valore <= 20) return { cuore: "💚", testo: "In forma – struttura armoniosa" };
      if (valore <= 24) return { cuore: "💚", testo: "Buona forma – equilibrio ottimale" };
      if (valore <= 30) return { cuore: "💛", testo: "Range fisiologico – equilibrio mantenuto" };
      if (valore <= 35) return { cuore: "💛", testo: "Eccesso moderato – da migliorare" };
      return { cuore: "❤️", testo: "Eccesso adiposo – percorso di riequilibrio consigliato" };
    }
  },

  // 2️⃣ Massa Magra (LBM%)
  massaMagra: (percentuale) => {
    if (percentuale > 75) return { cuore: "💚", testo: "Ottima tonicità e metabolismo attivo" };
    if (percentuale >= 65) return { cuore: "💛", testo: "Equilibrio buono – mantenere costanza" };
    return { cuore: "❤️", testo: "Scarsa massa magra – aumentare allenamento e proteine" };
  },

  // 3️⃣ Robustezza Strutturale (IR)
  robustezza: (indice, sesso) => {
    if (sesso === "M") {
      if (indice < 9.6) return { cuore: "💛", testo: "Esile – struttura sottile, forza da costruire" };
      if (indice <= 10.4) return { cuore: "💚", testo: "Normale – struttura equilibrata" };
      return { cuore: "💛", testo: "Robusto – articolazioni forti, attenzione ai carichi" };
    } else {
      if (indice < 9.9) return { cuore: "💛", testo: "Esile – struttura sottile" };
      if (indice <= 10.9) return { cuore: "💚", testo: "Normale – proporzioni armoniche" };
      return { cuore: "💛", testo: "Robusta – forte, attenzione a elasticità e carichi" };
    }
  },

  // 4️⃣ Morfotipo (Indice Cormico)
  morfotipo: (indice, sesso) => {
    if (sesso === "M") {
      if (indice < 51.5) return { cuore: "💚", testo: "Longilineo – metabolismo rapido" };
      if (indice <= 54.0) return { cuore: "💚", testo: "Normolineo – equilibrio morfologico" };
      return { cuore: "💛", testo: "Brevilineo – struttura compatta, metabolismo più lento" };
    } else {
      if (indice < 52.0) return { cuore: "💚", testo: "Longilinea – metabolismo rapido" };
      if (indice <= 54.5) return { cuore: "💚", testo: "Normolinea – bilanciata" };
      return { cuore: "💛", testo: "Brevilinea – struttura compatta, metabolismo più lento" };
    }
  },

  // 5️⃣ BMR (Metabolismo Basale)
  bmr: (valore, sesso) => {
    if (sesso === "M") {
      if (valore < 1500) return { cuore: "❤️", testo: "Basso – migliorare attività e LBM" };
      if (valore <= 1800) return { cuore: "💚", testo: "Normale – buon equilibrio" };
      return { cuore: "💚", testo: "Alto – ottima efficienza metabolica" };
    } else {
      if (valore < 1300) return { cuore: "❤️", testo: "Basso – migliorare tono muscolare" };
      if (valore <= 1600) return { cuore: "💚", testo: "Normale – equilibrio energetico buono" };
      return { cuore: "💚", testo: "Alto – ottimo metabolismo" };
    }
  },

  // 6️⃣ Equilibrio Energetico (IN/OUT)
  equilibrio: (differenza) => {
    if (differenza > 100) return { cuore: "💛", testo: "Surplus – fase di crescita o recupero" };
    if (differenza >= -100) return { cuore: "💚", testo: "Equilibrio – bilanciamento ottimale" };
    return { cuore: "❤️", testo: "Deficit – fase di definizione o consumo elevato" };
  },

  // 7️⃣ Peso Ideale Funzionale
  pesoIdeale: (diff) => {
    const absDiff = Math.abs(diff);
    if (absDiff <= 2) return { cuore: "💚", testo: "Ottimale – equilibrio raggiunto" };
    if (absDiff <= 6) return { cuore: "💛", testo: "In avvicinamento – miglioramento graduale" };
    return { cuore: "❤️", testo: "Differenza marcata – percorso di riequilibrio consigliato" };
  }
};
