import React from "react";
import GaugeEquilibrio from "../components/GaugeEquilibrio";

const TestFeature = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-3xl font-bold mb-6 text-green-400">
        Analizzatore NutriCoSa – Gauge di equilibrio
      </h1>
      <GaugeEquilibrio valore={85} />
    </div>
  );
};

export default TestFeature;
