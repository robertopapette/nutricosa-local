import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


export default function ChartFats({ plates }){
const poly = plates.reduce((s,p)=> s + ((p.food.fat_p||0) * (p.qty||0))/100, 0);
const omega3 = plates.reduce((s,p)=> s + ((p.food.omega3||0) * (p.qty||0))/100, 0);
const omega6 = plates.reduce((s,p)=> s + ((p.food.omega6||0) * (p.qty||0))/100, 0);
const data = [ { name: "Polinsaturi", value: poly }, { name: "Omega-3", value: omega3 }, { name: "Omega-6", value: omega6 } ];


return (
<div className="chartcard">
<h3>Acidi grassi essenziali</h3>
<ResponsiveContainer width="100%" height={220}>
<BarChart data={data}>
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Bar dataKey="value" />
</BarChart>
</ResponsiveContainer>
<p className="legend">In futuro aggiungeremo ⭐/🙂 rispetto ai target consigliati.</p>
</div>
);
}