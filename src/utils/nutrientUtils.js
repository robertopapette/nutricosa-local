export function sumTotals(plates){
return plates.reduce((acc, p) => {
const f=p.food; const q=p.qty||0;
acc.kcal += ((f.kcal||0)*q)/100;
acc.P += ((f.protein||0)*q)/100;
acc.C += ((f.carbs||0)*q)/100;
acc.L += ((f.fat||0)*q)/100;
acc.sugars += ((f.sugars||0)*q)/100;
acc.starch += ((f.starch||0)*q)/100;
acc.sat += ((f.fat_s||0)*q)/100;
acc.mono += ((f.fat_m||0)*q)/100;
acc.poly += ((f.fat_p||0)*q)/100;
return acc;
}, {kcal:0,P:0,C:0,L:0,sugars:0,starch:0,sat:0,mono:0,poly:0});
}


export function igBadgeColor(gi){
if(!Number.isFinite(gi)) return "ig-unknown";
if(gi < 55) return "ig-low";
if(gi <= 69) return "ig-mid";
return "ig-high";
}


export function applyDietAllergyFilters(foods, { diet, intolleranze, allergeni, showExcluded }){
const flags = [...intolleranze, ...allergeni].map(x=>x.toLowerCase());
return foods.filter(f => {
const text = `${f.name} ${f.category||""} ${f.allergens||""} ${f.intolerances||""}`.toLowerCase();


// Diete (regole semplici MVP)
if(!showExcluded){
if(diet === "Vegana" && /carne|pesce|pollo|manzo|tonno|uova|latte|formaggio/i.test(text)) return false;
if(diet === "Vegetariana" && /carne|pesce|pollo|manzo|tonno/i.test(text)) return false;
if(diet === "Chetogenica" && (f.carbs||0) > (f.fat||0)) return false;
}


// Allergeni/Intolleranze
if(!showExcluded && flags.length){ if(flags.some(x => text.includes(x))) return false; }


return true;
});
}