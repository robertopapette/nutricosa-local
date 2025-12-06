import { calcolaPesoIdealeBioenergetico } from "./calcoloPesoIdeale.js";

const risultati = calcolaPesoIdealeBioenergetico({
  peso_attuale: 72,
  percentuale_grassa_attuale: 14,
  percentuale_grassa_desiderata: 10,
  somatotipo: "mesomorfo",
  metabolismo: "normo",
});

console.log(risultati);
/*
{
  massa_magra: "61.92",
  peso_ideale_biologico: "68.80",
  peso_totale_ideale: "68.80",
  differenza: "-3.20",
  interpretazione: "Puoi ridurre leggermente la massa grassa per migliorare la qualità corporea."
}
*/
