// ✅ AppLayout.jsx — versione stabile e riallineata con il nuovo menù NutriCoSa
import  React, { useState, useRef, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
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
// 📄 Import delle anteprime leggere
import HomePreview from "../previews/homepreview";
import ChiSiamoPreview from "../previews/chisiamopreview";
import ChiSeiTuPreview from "../previews/chiseitupreview";
import AggiornaDatiPreview from "../previews/aggiornadatipreview";
import CSUPreview from "../previews/csupreview";
import InfoCSUPreview from "../previews/infocsupreview";
import DieteFamosePreview from "../previews/dietefamosepreview";
import RicettarioPreview from "../previews/ricettariopreview";
import PrincipiPreview from "../previews/principipreview";
import SupplementiPreview from "../previews/supplementi";
import AttivitaFisicaPreview from "../previews/attivitafisicapreview";
import ObiettivoPreview from "../previews/obiettivopreview";
import ConsigliPreview from "../previews/consiglipreview";
import LegendaIconePreview from "../previews/legendaiconepreview";
import NotifichePreview from "../previews/notifichepreview";
import ImpostazioniPreview from "../previews/impostazionipreview";
import DonazionePreview from "../previews/donazionepreview";
import FontiPreview from "../previews/fontipreview";
import MappaSitoPreview from "../previews/mappasitopreview";


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
  const location = useLocation();
  useEffect(() => {
    const main = document.querySelector("main");
    if (main) main.scrollTo({ top: 0, behavior: "auto" });
  }, [location.pathname]);

  // 🔹 Mappa ID → componente pagina (aggiornata e coerente)
  const previewMap = {
    1: <HomePreview />,
    2: <ChiSiamoPreview  />,
    3: <ChiSeiTuPreview  />,
    4: <AggiornaDatiPreview  />, // ✅ corretto
    5: <CSUPreview  />,
    6: <InfoCSUPreview  />,
    7: <DieteFamosePreview  />,
    8: <RicettarioPreview  />,
    9: <PrincipiPreview  />,
    10: <SupplementiPreview  />,
    11: <AttivitaFisicaPreview  />,
    12: <ObiettivoPreview  />,
    13: <ConsigliPreview  />,
    14: <LegendaIconePreview  />,
    15: <NotifichePreview  />,
    16: <ImpostazioniPreview  />,
    17: <DonazionePreview />,
    18: <FontiPreview  />,
    19: <MappaSitoPreview  />,
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
        titolo="Nutrition Spiral"
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
          id="page-scroll"
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
          <div
            key={previewId ?? "contenuto-base"}
            style={{
              opacity: 0,
              animation: "fadeInFast 0.08s forwards",
              paddingTop: "56px",
            }}
          >
            {aperto && anteprima
              ? React.cloneElement(anteprima)
              : <Outlet />
          }  
          </div>  
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
