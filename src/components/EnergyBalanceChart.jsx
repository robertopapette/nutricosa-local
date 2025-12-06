import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";


export default function EnergyBalanceChart({ intake, tee }){
const data = [
{ name: "Introdotte", value: Math.max(0, intake) },
{ name: "Consumate (TEE)", value: Math.max(0, tee) }
];
return (
<div className="chartcard">
<h3>Equilibrio energetico</h3>
<ResponsiveContainer width="100%" height={220}>
<BarChart data={data}>
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Bar dataKey="value" />
</BarChart>
</ResponsiveContainer>
</div>
);
}