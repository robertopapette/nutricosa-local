import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";


export default function ChartAmino({ plates }){
// Placeholder: ripartiamo le proteine sui 9 essenziali
const totalP = plates.reduce((s,p)=> s + ((p.food.protein||0) * (p.qty||0))/100, 0);
const aa = ["Leu","Ile","Val","Lys","Met","Thr","Trp","Phe","His"];
const base = totalP ? (totalP/aa.length) : 0;
const data = aa.map(name => ({ name, value: Math.min(120, base) }));


// Colori soglia (rosso <75, giallo 75-99, verde >=100)
function barFill(v){ if(v < 75) return "#ffebee"; if(v < 100) return "#fff8e1"; return "#e8f5e9"; }


return (
<div className="chartcard">
<h3>Spettro aminoacidi essenziali</h3>
<ResponsiveContainer width="100%" height={220}>
<BarChart data={data}>
<XAxis dataKey="name" />
<YAxis domain={[0,120]} />
<Tooltip />
{data.map((d,idx)=> (
<Bar key={idx} dataKey={() => d.value} fill={barFill(d.value)} />
))}
<ReferenceLine y={100} strokeDasharray="3 3" />
<ReferenceLine y={75} strokeDasharray="3 3" />
</BarChart>
</ResponsiveContainer>
<p className="legend">🟢 ≥100% • 🟡 75–99% • 🔴 &lt;75% — in futuro calcoleremo i valori reali per ogni amminoacido.</p>
</div>
);
}