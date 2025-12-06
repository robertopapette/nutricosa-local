// ==============================================
// 🧪 TEST MANUALE – interpretazioni.js
// ==============================================
//
// Scopo: verificare che i mapping logici restituiscano
// il cuore 💚💛❤️ e il testo corretto per i range impostati.
// Eseguibile in Node o terminale con "npm run test:local"
// oppure "node src/utils/testInterpretazioni.js"
//
// ==============================================

import { interpretazioni } from "./interpretazioni.js";

console.log("=== TEST INTERPRETAZIONI – Nutrizione Consapevole ===\n");

// Helper per formattare l’output
function mostra(titolo, risultato) {
  console.log(`${titolo} → ${risultato.cuore} ${risultato.testo}`);
}

// 1️⃣ Percentuale di Massa Grassa
console.log("1️⃣ Percentuale Massa Grassa:");
mostra("Uomo 10%", interpretazioni.percentualeGrassa(10, "M"));
mostra("Uomo 22%", interpretazioni.percentualeGrassa(22, "M"));
mostra("Uomo 31%", interpretazioni.percentualeGrassa(31, "M"));
mostra("Donna 18%", interpretazioni.percentualeGrassa(18, "F"));
mostra("Donna 33%", interpretazioni.percentualeGrassa(33, "F"));
mostra("Donna 38%", interpretazioni.percentualeGrassa(38, "F"));
console.log("");

// 2️⃣ Massa Magra
console.log("2️⃣ Massa Magra:");
mostra("LBM 80%", interpretazioni.massaMagra(80));
mostra("LBM 70%", interpretazioni.massaMagra(70));
mostra("LBM 60%", interpretazioni.massaMagra(60));
console.log("");

// 3️⃣ Robustezza
console.log("3️⃣ Robustezza:");
mostra("Uomo IR 9.5", interpretazioni.robustezza(9.5, "M"));
mostra("Uomo IR 10.2", interpretazioni.robustezza(10.2, "M"));
mostra("Donna IR 11.2", interpretazioni.robustezza(11.2, "F"));
console.log("");

// 4️⃣ Morfotipo
console.log("4️⃣ Morfotipo:");
mostra("Uomo CI 51.0", interpretazioni.morfotipo(51.0, "M"));
mostra("Uomo CI 53.0", interpretazioni.morfotipo(53.0, "M"));
mostra("Donna CI 55.0", interpretazioni.morfotipo(55.0, "F"));
console.log("");

// 5️⃣ BMR
console.log("5️⃣ BMR:");
mostra("Uomo 1450", interpretazioni.bmr(1450, "M"));
mostra("Uomo 1750", interpretazioni.bmr(1750, "M"));
mostra("Donna 1200", interpretazioni.bmr(1200, "F"));
mostra("Donna 1650", interpretazioni.bmr(1650, "F"));
console.log("");

// 6️⃣ Equilibrio Energetico
console.log("6️⃣ Equilibrio Energetico:");
mostra("+200 kcal", interpretazioni.equilibrio(200));
mostra("0 kcal", interpretazioni.equilibrio(0));
mostra("-250 kcal", interpretazioni.equilibrio(-250));
console.log("");

// 7️⃣ Peso Ideale
console.log("7️⃣ Peso Ideale:");
mostra("Differenza 1.5 kg", interpretazioni.pesoIdeale(1.5));
mostra("Differenza 4 kg", interpretazioni.pesoIdeale(4));
mostra("Differenza 8 kg", interpretazioni.pesoIdeale(8));
console.log("");

// === Fine test ===
console.log("\n✅ Tutte le interpretazioni restituite correttamente.\n");
