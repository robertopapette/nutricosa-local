// 🧮 FORMULE UFFICIALI – Nutrity Fase 3 (senza BMI)

// --- % Massa Grassa (Hatfield / Gastelu) ---
export function calcMassaGrassa({ sesso, peso, giroVita, avambraccio, fianchi, polso }) {
  if (!peso || !giroVita) return 0;
  let massaMagra = 0;

  if (sesso === "M") {
    const fattorePeso = (peso * 2.3) * 1.082 + 94.42;
    const fattoreVita = (giroVita * 0.39) * 4.15;
    massaMagra = fattorePeso - fattoreVita;
  } else {
    const fattorePeso = (peso * 2.3) * 0.732 + 8.987;
    const fattoreVita = giroVita / 3.14;
    const fattoreAvamb = avambraccio * 0.434;
    const fattoreFianchi = fianchi * 0.249;
    const fattorePolso = polso * 3.15;
    massaMagra = fattorePeso + fattorePolso - fattoreVita - fattoreFianchi + fattoreAvamb;
  }

  const percentualeGrasso = ((peso - massaMagra) * 100) / peso;
  return Math.max(5, Math.min(45, +percentualeGrasso.toFixed(1)));
}

// --- Robustezza ---
export function calcRobustezza(polsoCm, altezzaCm) {
  if (!polsoCm || !altezzaCm) return "";
  const rapporto = polsoCm / altezzaCm;
  if (rapporto < 0.09) return "Esile";
  if (rapporto < 0.1) return "Normale";
  return "Robusto";
}

// --- Morfologia (stimata su % massa grassa e robustezza) ---
export function calcMorfologia(massaGrassa, robustezza) {
  if (!massaGrassa || !robustezza) return "";
  if (massaGrassa < 15 && robustezza === "Esile") return "Ectomorfo";
  if (massaGrassa < 25 && robustezza === "Normale") return "Mesomorfo";
  return "Endomorfo";
}

// --- BMR (Harris-Benedict rivisitata) ---
export function calcBMR(peso, altezza, età, sesso) {
  if (!peso || !altezza || !età) return 0;
  return Math.round(
    sesso === "M"
      ? 66.5 + 13.75 * peso + 5.003 * altezza - 6.755 * età
      : 655.1 + 9.563 * peso + 1.85 * altezza - 4.676 * età
  );
}

// --- Fabbisogno energetico giornaliero ---
export function calcFabbisogno(bmr, livelloAttivita = 1.55) {
  return Math.round(bmr * livelloAttivita);
}

// --- Peso ideale (Medi Comp) ---
export function calcPesoIdealeMediComp({ sesso, altezza, polso, morfologia = "Mesomorfo" }) {
  if (!altezza || !polso) return 0;

  const fattori = {
    Ectomorfo: 0.95,
    Mesomorfo: 1.0,
    Endomorfo: 1.05,
  };

  const F = fattori[morfologia] || 1.0;
  let pesoIdeale = 0;

  if (sesso === "M") {
    pesoIdeale = (altezza - 100 + (polso - 16) * 1.3) * F;
  } else {
    pesoIdeale = (altezza - 104 + (polso - 14) * 1.3) * F;
  }

  return +pesoIdeale.toFixed(1);
}
