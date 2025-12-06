import React from "react";
import PageContainer from "../components/PageContainer";


export default function Fitness() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md animate-fadeIn">
      <h2 className="text-2xl font-bold mb-4 text-green-700">💪 Attività fisica</h2>
      <p className="text-gray-700">
        Allenamenti mirati, esercizi funzionali e programmi personalizzabili per
        migliorare forza, postura e resistenza.
      </p>
      <p className="mt-3 text-sm text-gray-500 italic">
        In arrivo video esercizi e progressioni per ogni livello.
      </p>
    </div>
  );
}
