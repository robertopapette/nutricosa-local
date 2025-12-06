// ==============================================
// ⚙️ CALCOLI MORFOLOGICI – Nutrizione Consapevole
// ==============================================
//
// Motore validato: Hatfield & Gastelu (conversione corretta)
// Include indici morfologici, BMR, equilibrio energetico e sintesi.
// Utilizzabile in qualsiasi componente React (es. ChiSeiTu, Calcolatore).
//
// Tutti i valori in: peso (kg), altezza (cm), circonferenze (cm).
//
// ==============================================

// === 1️⃣ Hatfield & Gastelu – LBM & % Massa Grassa ===
export function calcolaHatfieldUomo(peso, vitaCm) {
  const vitaIn = vitaCm / 2.54;
  const lbmLb = (1.082 * (peso * 2.205)) - (4.15 * vitaIn) + 94.42;
  const lbmKg = lbmLb / 2.205;
  const bfPerc = ((peso - lbmKg) / peso) * 100;
  return { lbmKg, bfPerc };
}

export function calcolaHatfieldDonna(peso, polso, vita, avambraccio) {
  const lbmKg = (0.732 * peso) + 8.987 + (polso / 3.14) - (0.157 * vita) - (0.249 * avambraccio);
  const bfPerc = ((peso - lbmKg) / peso) * 100;
  return { lbmKg, bfPerc };
}

// === 2️⃣ Massa Magra e Peso Ideale Funzionale ===
export function massaMagra(peso, bfPerc) {
  return peso - ((bfPerc / 100) * peso);
}

export function pesoIdealeFunzionale(lbm, bfDesiderata) {
  return lbm / (1 - (bfDesiderata / 100));
}

// === 3️⃣ Indici Strutturali ===
export function indiceRobustezza(polso, altezza) {
  return (polso / altezza) * 100;
}

export function indiceCormico(altezzaSeduti, altezzaTotale) {
  return (altezzaSeduti / altezzaTotale) * 100;
}

// === 4️⃣ BMR – Mifflin-St Jeor ===
export function bmr(peso, altezza, eta, sesso) {
  return (10 * peso) + (6.25 * altezza) - (5 * eta) + (sesso === "M" ? 5 : -161);
}

// === 5️⃣ Correzione Morfologica ===
export function correzioneMorfologica(bfPerc, morfotipo) {
  const correzioni = {
    longilineo: -1.5,
    normolineo: 0,
    brevilineo: +2,
  };
  const corr = correzioni[morfotipo] ?? 0;
  return Math.max(bfPerc + corr, 0);
}

// === 6️⃣ Equilibrio Energetico Intelligente ===
export function interpretazioneEnergetica(inCal, outCal, pesoAttuale, pesoIdeale) {
  const diff = inCal - outCal;
  let stato = "⚖️ Equilibrio";
  if (diff > 100) stato = "📈 Surplus (+)";
  else if (diff < -100) stato = "📉 Deficit (-)";

  const distanza = pesoAttuale - pesoIdeale;
  if (distanza > 1 && diff > 100)
    stato += " ⚠️ Incoerente – peso sopra il target";
  if (distanza < -1 && diff < -100)
    stato += " ⚠️ Incoerente – peso sotto il target";
  return stato;
}

// === 7️⃣ Funzione Principale – Profilo Completo ===
export function calcolaProfiloMorfologico(dati) {
  const {
    sesso,
    peso,
    altezza,
    eta,
    vita,
    polso,
    avambraccio,
    altezzaSeduti,
    morfotipo = "normolineo",
    bfDesiderata = sesso === "M" ? 12 : 20,
    inCal = 0,
    outCal = 0,
  } = dati;

  // Hatfield corretto
  const risultatiBase =
    sesso === "M"
      ? calcolaHatfieldUomo(peso, vita)
      : calcolaHatfieldDonna(peso, polso, vita, avambraccio);

  let bfPerc = correzioneMorfologica(risultatiBase.bfPerc, morfotipo);
  const lbm = massaMagra(peso, bfPerc);
  const pesoIdeale = pesoIdealeFunzionale(lbm, bfDesiderata);
  const ir = indiceRobustezza(polso, altezza);
  const ci = indiceCormico(altezzaSeduti, altezza);
  const bmrValue = bmr(peso, altezza, eta, sesso);
  const statoEnergetico = interpretazioneEnergetica(inCal, outCal, peso, pesoIdeale);

  return {
    sesso,
    peso,
    altezza,
    eta,
    vita,
    morfotipo,
    bfPerc: +bfPerc.toFixed(1),
    lbm: +lbm.toFixed(1),
    pesoIdeale: +pesoIdeale.toFixed(1),
    indiceRobustezza: +ir.toFixed(2),
    indiceCormico: +ci.toFixed(2),
    bmr: +bmrValue.toFixed(0),
    statoEnergetico,
  };
}

// ==============================================
// ✅ ESEMPIO USO
// ==============================================
// import { calcolaProfiloMorfologico } from "./CalcoliMorfologici";
//
// const risultato = calcolaProfiloMorfologico({
//   sesso: "M",
//   peso: 80,
//   altezza: 178,
//   eta: 40,
//   vita: 85,
//   polso: 18,
//   altezzaSeduti: 93,
//   morfotipo: "normolineo",
//   bfDesiderata: 12,
//   inCal: 2500,
//   outCal: 2400,
// });
//
// console.log(risultato);
// ==============================================
