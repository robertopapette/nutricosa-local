// ✅ AppLayout.jsx — versione stabile e riallineata con il nuovo menù NutriCoSa
import { useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import HeaderTop from "./HeaderTop";
import MenuFisso from "./MenuFisso";
import { theme } from "../theme";

// 📄 Import pagine reali
import Home from "../pages/Home";
import ChiSiamo from "../pages/ChiSiamo";
import ChiSeiTu from "../pages/ChiSeiTu";
import AggiornaDati from "../pages/AggiornaDati"; // ✅ sostituisce Aiuto
import Calcolatore from "../pages/Calcolatore";
import InfoCalcolatore from "../pages/InfoCalcolatore";
import DieteFamose from "../pages/DieteFamose";
import Supplementi from "../pages/Supplementi";
import Ricettario from "../pages/Ricettario";
import PrincipiNutrizione from "../pages/PrincipiNutrizione";
import AttivitaFisica from "../pages/AttivitaFisica";
import Obiettivo from "../pages/Obiettivo";
import Consigli from "../pages/Consigli";
import LegendaIcone from "../pages/LegendaIcone";
import Notifiche from "../pages/Notifiche";
import Impostazioni from "../pages/Impostazioni";
import Donazione from "../pages/Donazione";
import FontiUfficiali from "../pages/FontiUfficiali";
import MappaSito from "../pages/MappaSito";

import AudioPlayer from "../components/AudioPlayer";
import IconeGeneratore from "../components/IconeGeneratore";
import ConsistencyCheck from "../utils/ConsistencyCheck";

// 🔹 Pagina neutra per voci non ancora collegate
function InCostruzione() {
  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        color: "#333",
      }}
    >
      <h2 style={{ fontSize: "1.6rem", color: "#888" }}>Pagina in costruzione</h2>
      <p>Questa sezione sarà presto disponibile.</p>
    </div>
  );
}

export default function AppLayout() {
  const [aperto, setAperto] = useState(false);
  const [previewId, setPreviewId] = useState(null);
  const [mostraAudio, setMostraAudio] = useState(false);
  const [iconeAperte, setIconeAperte] = useState(false);
  const bottoneMenuRef = useRef(null);

  // 🔹 Mappa ID → componente pagina (aggiornata e coerente)
  const previewMap = {
    1: <Home />,
    2: <ChiSiamo />,
    3: <ChiSeiTu />,
    4: <AggiornaDati />, // ✅ corretto
    5: <Calcolatore />,
    6: <InfoCalcolatore />,
    7: <DieteFamose />,
    8: <Ricettario />,
    9: <PrincipiNutrizione />,
    10: <Supplementi />,
    11: <AttivitaFisica />,
    12: <Obiettivo />,
    13: <Consigli />,
    14: <LegendaIcone />,
    15: <Notifiche />,
    16: <Impostazioni />,
    17: <Donazione />,
    18: <FontiUfficiali />,
    19: <MappaSito />,
  };

  const anteprima = previewId ? previewMap[previewId] || <InCostruzione /> : null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: theme.colori.sfondo,
        transition: theme.transizione,
      }}
    >
      {/* 🌿 Header superiore */}
      <HeaderTop
        aperto={aperto}
        setAperto={setAperto}
        titolo="NutriCoSa"
        mostraAudio={mostraAudio}
        toggleAudio={() => setMostraAudio(!mostraAudio)}
        iconeAperte={iconeAperte}
        setIconeAperte={setIconeAperte}
        bottoneMenuRef={bottoneMenuRef}
      />

      {/* ⚙️ Layout principale */}
      <div style={{ display: "flex", flex: 1 }}>
        <MenuFisso
          aperto={aperto}
          setAperto={setAperto}
          setPreviewId={setPreviewId}
          bottoneMenuRef={bottoneMenuRef}
        />

        {/* 🖥 Area contenuti */}
        <main
          style={{
            flex: 1,
            marginLeft: aperto ? theme.layout.larghezzaMenu : "0",
            marginTop: "56px",
            padding: "1.5rem",
            transition: "all 0.3s ease",
            overflowY: "auto",
            maxHeight: "100vh",
            scrollBehavior: "smooth",
            background: "rgba(255,255,255,0.95)",
          }}
        >
          {anteprima || <Outlet />}
        </main>
      </div>

      <AudioPlayer visible={mostraAudio} />

      {iconeAperte && (
        <div
          style={{
            position: "fixed",
            top: "70px",
            right: "1rem",
            width: "270px",
            maxHeight: "75vh",
            overflowY: "auto",
            background: "rgba(0, 0, 0, 0.85)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: "10px",
            zIndex: 15000,
            padding: "10px",
            backdropFilter: "blur(4px)",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          }}
        >
          <IconeGeneratore dettagliato={false} />
        </div>
      )}

      <ConsistencyCheck />
    </div>
  );
}
