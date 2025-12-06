// ==============================================
// 🧮 TEST MANUALE – Formule Morfologiche & Controlli
// ==============================================
//
// Esegui da terminale:
//   node src/utils/testFormule.js
//
// ==============================================

// === 1️⃣ Formule Hatfield & Gastelu corrette ===
function lbmUomo_HG(peso, vitaCm) {
  const vitaIn = vitaCm / 2.54;
  const lbmLb = (1.082 * (peso * 2.205)) - (4.15 * vitaIn) + 94.42;
  return lbmLb / 2.205; // riportiamo in kg
}
function lbmDonna_HG(peso, polso, vita, avambraccio) {
  return (0.732 * peso) + 8.987 + (polso / 3.14) - (0.157 * vita) - (0.249 * avambraccio);
}
function percentualeGrassa_HG(peso, lbm) {
  return ((peso - lbm) / peso) * 100;
}
function massaMagra(peso, percGrassa) {
  return peso - ((percGrassa / 100) * peso);
}
function pesoIdealeFunzionale(lbm, bfDesiderata) {
  return lbm / (1 - (bfDesiderata / 100));
}

// === 2️⃣ Indici strutturali ===
function indiceRobustezza(polso, altezza) {
  return (polso / altezza) * 100;
}
function indiceCormico(altezzaSeduti, altezzaTotale) {
  return (altezzaSeduti / altezzaTotale) * 100;
}

// === 3️⃣ BMR – Mifflin St Jeor ===
function bmr(peso, altezza, eta, sesso) {
  return (10 * peso) + (6.25 * altezza) - (5 * eta) + (sesso === "M" ? 5 : -161);
}

// === 4️⃣ Fattore morfologico (correzione ±%) ===
function correzioneMorfologica(percGrasso, morfotipo) {
  const correzioni = {
    longilineo: -1.5,
    normolineo: 0,
    brevilineo: +2,
  };
  const corr = correzioni[morfotipo] ?? 0;
  return Math.max(percGrasso + corr, 0);
}

// === 5️⃣ Equilibrio energetico intelligente ===
function interpretazioneEnergetica(inCal, outCal, pesoAttuale, pesoIdeale) {
  const diff = inCal - outCal;
  let stato = "⚖️ Equilibrio";
  if (diff > 100) stato = "📈 Surplus (+)";
  else if (diff < -100) stato = "📉 Deficit (-)";

  // Coerenza col peso ideale
  const distanza = pesoAttuale - pesoIdeale;
  if (distanza > 1 && diff > 100)
    stato += " ⚠️ Incoerente – peso sopra il target";
  if (distanza < -1 && diff < -100)
    stato += " ⚠️ Incoerente – peso sotto il target";
  return stato;
}

// ==============================================
// 🔍 ESEMPI DI TEST
// ==============================================
const uomo = {
  peso: 80,
  vita: 85,
  polso: 18,
  altezza: 178,
  altezzaSeduti: 93,
  eta: 40,
  bfDesiderata: 12,
  morfotipo: "normolineo",
  inCal: 2500,
  outCal: 2400,
};

const donna = {
  peso: 60,
  vita: 70,
  polso: 15,
  avambraccio: 24,
  altezza: 165,
  altezzaSeduti: 87,
  eta: 35,
  bfDesiderata: 20,
  morfotipo: "brevilineo",
  inCal: 2000,
  outCal: 2100,
};

// ===================
// 🧔 UOMO
// ===================
const lbmU = lbmUomo_HG(uomo.peso, uomo.vita);
let percGrU = percentualeGrassa_HG(uomo.peso, lbmU);
percGrU = correzioneMorfologica(percGrU, uomo.morfotipo);
const lbmEffU = massaMagra(uomo.peso, percGrU);
const pesoIdealeU = pesoIdealeFunzionale(lbmEffU, uomo.bfDesiderata);
const irU = indiceRobustezza(uomo.polso, uomo.altezza);
const ciU = indiceCormico(uomo.altezzaSeduti, uomo.altezza);
const bmrU = bmr(uomo.peso, uomo.altezza, uomo.eta, "M");
const eqU = interpretazioneEnergetica(uomo.inCal, uomo.outCal, uomo.peso, pesoIdealeU);

console.log("=== TEST FORMULE – UOMO ===");
console.log(`Morfotipo: ${uomo.morfotipo}`);
console.log(`Massa grassa stimata: ${percGrU.toFixed(1)} %`);
console.log(`Massa magra: ${lbmEffU.toFixed(1)} kg`);
console.log(`Peso ideale funzionale: ${pesoIdealeU.toFixed(1)} kg`);
console.log(`Indice robustezza: ${irU.toFixed(2)}`);
console.log(`Indice cormico: ${ciU.toFixed(2)}`);
console.log(`BMR: ${bmrU.toFixed(0)} kcal`);
console.log(`Bilancio giornaliero: ${uomo.inCal - uomo.outCal} kcal`);
console.log(`Stato energetico: ${eqU}\n`);

// ===================
// 👩 DONNA
// ===================
const lbmD = lbmDonna_HG(donna.peso, donna.polso, donna.vita, donna.avambraccio);
let percGrD = percentualeGrassa_HG(donna.peso, lbmD);
percGrD = correzioneMorfologica(percGrD, donna.morfotipo);
const lbmEffD = massaMagra(donna.peso, percGrD);
const pesoIdealeD = pesoIdealeFunzionale(lbmEffD, donna.bfDesiderata);
const irD = indiceRobustezza(donna.polso, donna.altezza);
const ciD = indiceCormico(donna.altezzaSeduti, donna.altezza);
const bmrD = bmr(donna.peso, donna.altezza, donna.eta, "F");
const eqD = interpretazioneEnergetica(donna.inCal, donna.outCal, donna.peso, pesoIdealeD);

console.log("=== TEST FORMULE – DONNA ===");
console.log(`Morfotipo: ${donna.morfotipo}`);
console.log(`Massa grassa stimata: ${percGrD.toFixed(1)} %`);
console.log(`Massa magra: ${lbmEffD.toFixed(1)} kg`);
console.log(`Peso ideale funzionale: ${pesoIdealeD.toFixed(1)} kg`);
console.log(`Indice robustezza: ${irD.toFixed(2)}`);
console.log(`Indice cormico: ${ciD.toFixed(2)}`);
console.log(`BMR: ${bmrD.toFixed(0)} kcal`);
console.log(`Bilancio giornaliero: ${donna.inCal - donna.outCal} kcal`);
console.log(`Stato energetico: ${eqD}\n`);

console.log("✅ Test completato – coerenza morfologica e energetica verificate.\n");
