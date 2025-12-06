import { useState, useEffect } from "react";

export default function Profile() {
  // Stato iniziale
  const [profile, setProfile] = useState({
    nome: "",
    sesso: "",
    annoNascita: "",
    altezza: "",
    peso: "",
    massaGrassa: "",
    morfologia: "",
  });

  // Carica i dati dal localStorage all'avvio
  useEffect(() => {
    const saved = localStorage.getItem("nutrity_profile");
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  // Salva automaticamente ogni modifica
  useEffect(() => {
    localStorage.setItem("nutrity_profile", JSON.stringify(profile));
  }, [profile]);

  // Calcoli automatici
  const eta =
    profile.annoNascita && !isNaN(profile.annoNascita)
      ? new Date().getFullYear() - parseInt(profile.annoNascita)
      : "";

  const bmi =
    profile.altezza && profile.peso
      ? (profile.peso / (profile.altezza / 100) ** 2).toFixed(1)
      : "";

  const bmiLabel = (() => {
    if (!bmi) return "";
    const val = parseFloat(bmi);
    if (val < 18.5) return "Sottopeso";
    if (val < 25) return "Normopeso";
    if (val < 30) return "Sovrappeso";
    return "Obesità";
  })();

  // Calcolo peso ideale stimato (solo se massa grassa disponibile)
  const pesoIdeale = profile.massaGrassa
    ? (
        (profile.peso * (1 - profile.massaGrassa / 100)) /
        (1 - 0.18)
      ).toFixed(1)
    : "";

  // Gestione input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-600">
      <h2 className="text-2xl font-bold mb-4 text-green-700">
        👤 Chi sei tu
      </h2>

      <form className="space-y-3">
        <div>
          <label className="block font-medium">Nome / Nickname</label>
          <input
            name="nome"
            value={profile.nome}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="Inserisci il tuo nome"
          />
        </div>

        <div>
          <label className="block font-medium">Sesso</label>
          <select
            name="sesso"
            value={profile.sesso}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Seleziona</option>
            <option value="M">Maschio</option>
            <option value="F">Femmina</option>
          </select>
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block font-medium">Anno di nascita</label>
            <input
              type="number"
              name="annoNascita"
              value={profile.annoNascita}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
              placeholder="es. 1985"
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium">Età</label>
            <input
              value={eta}
              disabled
              className="w-full border rounded-lg px-3 py-2 bg-gray-100"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block font-medium">Altezza (cm)</label>
            <input
              type="number"
              name="altezza"
              value={profile.altezza}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <div className="flex-1">
            <label className="block font-medium">Peso (kg)</label>
            <input
              type="number"
              name="peso"
              value={profile.peso}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium">% Massa grassa (facoltativo)</label>
          <input
            type="number"
            name="massaGrassa"
            value={profile.massaGrassa}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium">Morfologia</label>
          <select
            name="morfologia"
            value={profile.morfologia}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">Seleziona</option>
            <option value="esile">Esile</option>
            <option value="normale">Normale</option>
            <option value="robusto">Robusto</option>
          </select>
        </div>
      </form>

      <div className="mt-6 p-4 bg-green-50 rounded-xl shadow-inner">
        <h3 className="font-semibold text-green-700 mb-2">
          🧠 Mini-anamnesi automatica
        </h3>
        <ul className="text-gray-700 space-y-1 text-sm">
          {eta && <li>Età: <b>{eta} anni</b></li>}
          {bmi && (
            <li>
              BMI: <b>{bmi}</b> → <span className="italic">{bmiLabel}</span>
            </li>
          )}
          {profile.massaGrassa && (
            <li>
              Massa grassa stimata: <b>{profile.massaGrassa}%</b>
            </li>
          )}
          {pesoIdeale && (
            <li>
              Peso ideale stimato: <b>{pesoIdeale} kg</b>
            </li>
          )}
          {profile.morfologia && (
            <li>
              Morfologia: <b>{profile.morfologia}</b>
            </li>
          )}
        </ul>
      </div>

      <p className="mt-6 text-xs text-gray-500 italic">
        💾 I tuoi dati vengono salvati solo in locale, sul tuo dispositivo. Nessun invio esterno.
      </p>
    </div>
  );
}
