// Katch-McArdle se disponibile %BF, altrimenti Mifflin-St Jeor
export function computeBMR({ peso, altezza, eta, sesso, pbf }){
if(pbf != null && !isNaN(pbf)){
const ffm = peso * (1 - pbf/100); // fat-free mass
return 370 + (21.6 * ffm);
}
const s = (sesso === "M") ? 5 : -161;
return (10*peso) + (6.25*altezza) - (5*eta) + s;
}


export function computeTEE({ bmr, activityKcal }){
// TEE = BMR + kcal attività (MVP)
return Math.max(0, (bmr||0) + (activityKcal||0));
}


// Peso ideale = Massa magra ÷ [1 - (targetBF)]
export function computeIdealWeight({ peso, pbf, targetBf }){
if(pbf==null || isNaN(pbf) || peso<=0 || targetBf==null) return null;
const ffm = peso * (1 - pbf/100);
const ideal = ffm / (1 - targetBf);
return ideal>0 ? ideal : null;
}