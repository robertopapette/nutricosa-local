import { useEffect, useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

export default function ChartDemo() {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    async function loadFoods() {
      try {
        const res = await fetch("http://localhost:3000/api/foods")
        const data = await res.json()
        // Prendiamo solo i primi 10 alimenti per il grafico
        setFoods(data.slice(0, 10))
      } catch (err) {
        console.error("Errore nel fetch:", err)
      }
    }
    loadFoods()
  }, [])

  return (
    <div style={{ padding: "1rem" }}>
      <h1>📊 Calorie dei primi 10 alimenti</h1>
      <BarChart width={700} height={400} data={foods}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="kcal" fill="#82ca9d" />
      </BarChart>
    </div>
  )
}
