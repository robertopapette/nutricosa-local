import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🧩 Layout principale
import AppLayout from "./layout/AppLayout";

// 🏠 Pagine principali
import Home from "./pages/Home";
import ChiSiamo from "./pages/ChiSiamo";
import ChiSeiTu from "./pages/ChiSeiTu";
import ProfiloMorfologico from "./pages/ProfiloMorfologico";
import Calcolatore from "./pages/CSUDemo";
import DieteFamose from "./pages/DieteFamose";
import Ricettario from "./pages/Ricettario";
import PrincipiNutrizione from "./pages/PrincipiNutrizione";
import AttivitaFisica from "./pages/AttivitaFisica";
import CorpoUmano from "./pages/CorpoUmano";
import Obiettivo from "./pages/Obiettivo";
import Donazione from "./pages/Donazione";
import Aiuto from "./pages/Aiuto";
import Abbonamenti from "./pages/Abbonamenti";
import Notifiche from "./pages/Notifiche";
import FontiUfficiali from "./pages/FontiUfficiali";
import Impostazioni from "./pages/Impostazioni";
import MappaSito from "./pages/MappaSito";
import Mediterranea from "././pages/diete/Mediterranea";
import Zona from "./pages/diete/Zona";
import Chetogenica from "./pages/diete/Chetogenica";
import Paleo from "./pages/diete/Paleo";
import Vegetariana from "./pages/diete/Vegetariana";
import Vegana from "./pages/diete/Vegana";
import DigiunoIntermittente from "./pages/diete/DigiunoIntermittente";
import GruppoSanguigno from "./pages/diete/GruppoSanguigno";
import DASH from "./pages/diete/DASH";
import MIND from "./pages/diete/MIND";
import Atkins from "./pages/diete/Atkins";
import Dukan from "./pages/diete/Dukan";
import LowFODMAP from "./pages/diete/LowFODMAP";
import Flexitariana from "./pages/diete/Flexitariana";
import InfoCalcolatore from "./pages/InfoCalcolatore";
import Consigli from "./pages/Consigli";
import AggiornaDati from "./pages/AggiornaDati";
import InserisciDati from "./pages/InserisciDati";

// 🆕 Nuova pagina: Legenda Icone
import LegendaIcone from "./pages/LegendaIcone";

// 🧪 Sandbox audio indipendente
import AudioSandbox from "./pages/AudioSandbox";

// 🥦 Principi nutrizione – sezioni e sottosezioni
import Premessa from "./pages/principi/Premessa";
import Proteine from "./pages/principi/Proteine";
import Glucidi from "./pages/principi/Glucidi";
import Lipidi from "./pages/principi/Lipidi";
import Vitamine from "./pages/principi/Vitamine";
import Minerali from "./pages/principi/Minerali";
import Acqua from "./pages/principi/Acqua";
import Alcool from "./pages/principi/Alcool";
import Dolci from "./pages/principi/Dolci";

// Sottosezioni Digestione
import Digestione from "./pages/principi/digestione/Digestione";
import Masticazione from "./pages/principi/digestione/Masticazione";
import Saliva from "./pages/principi/digestione/Saliva";
import Deglutizione from "./pages/principi/digestione/Deglutizione";
import SuccoGastrico from "./pages/principi/digestione/SuccoGastrico";
import MovimentiStomaco from "./pages/principi/digestione/MovimentiStomaco";
import ControlloMotilita from "./pages/principi/digestione/ControlloMotilita";
import SuccoPancreatico from "./pages/principi/digestione/SuccoPancreatico";
import Bile from "./pages/principi/digestione/Bile";
import SuccoIntestinale from "./pages/principi/digestione/SuccoIntestinale";
import MovimentiIntestinoTenue from "./pages/principi/digestione/MovimentiIntestinoTenue";
import BatteriIntestinali from "./pages/principi/digestione/BatteriIntestinali";
import SecrezioneColon from "./pages/principi/digestione/SecrezioneColon";
import MovimentiColon from "./pages/principi/digestione/MovimentiColon";
import Defecazione from "./pages/principi/digestione/Defecazione";
import Feci from "./pages/principi/digestione/Feci";
import TestFeature from "./pages/TestFeature";
import Supplementi from "./pages/Supplementi";
import Proteici from "./pages/supplementi/Proteici";
import Energetici from "./pages/supplementi/Energetici";
import Dimagrimento from "./pages/supplementi/Dimagrimento";
import Massa from "./pages/supplementi/Massa";
import NaturaliLegali from "./pages/supplementi/NaturaliLegali";
import OrmonaliDopanti from "./pages/supplementi/OrmonaliDopanti";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Layout generale con Header + Menu */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/chi-sei-tu" element={<ChiSeiTu />} />
          <Route path="/profilo-morfologico" element={<ProfiloMorfologico />} />
          <Route path="/calcolatore" element={<Calcolatore />} />
          <Route path="/diete-famose" element={<DieteFamose />} />
          <Route path="/ricettario" element={<Ricettario />} />
          <Route path="/testfeature" element={<TestFeature />} />

          {/* === Principi della Nutrizione Consapevole === */}
          <Route path="/principi-nutrizione" element={<PrincipiNutrizione />} />
          <Route path="/principi" element={<PrincipiNutrizione />} />
          <Route path="/principi/premessa" element={<Premessa />} />
          <Route path="/principi/proteine" element={<Proteine />} />
          <Route path="/principi/glucidi" element={<Glucidi />} />
          <Route path="/principi/lipidi" element={<Lipidi />} />
          <Route path="/principi/vitamine" element={<Vitamine />} />
          <Route path="/principi/minerali" element={<Minerali />} />
          <Route path="/principi/acqua" element={<Acqua />} />
          <Route path="/principi/alcool" element={<Alcool />} />
          <Route path="/principi/dolci" element={<Dolci />} />
          <Route path="/principi/digestione" element={<Digestione />} />

          {/* === Digestione (sottosezioni) === */}
          <Route path="/principi/digestione" element={<Digestione />} />
          <Route path="/principi/digestione/masticazione" element={<Masticazione />} />
          <Route path="/principi/digestione/saliva" element={<Saliva />} />
          <Route path="/principi/digestione/deglutizione" element={<Deglutizione />} />
          <Route path="/principi/digestione/succo-gastrico" element={<SuccoGastrico />} />
          <Route path="/principi/digestione/movimenti-stomaco" element={<MovimentiStomaco />} />
          <Route path="/principi/digestione/controllo-motilita" element={<ControlloMotilita />} />
          <Route path="/principi/digestione/succo-pancreatico" element={<SuccoPancreatico />} />
          <Route path="/principi/digestione/bile" element={<Bile />} />
          <Route path="/principi/digestione/succo-intestinale" element={<SuccoIntestinale />} />
          <Route path="/principi/digestione/movimenti-intestino-tenue" element={<MovimentiIntestinoTenue />} />
          <Route path="/principi/digestione/batteri-intestinali" element={<BatteriIntestinali />} />
          <Route path="/principi/digestione/secrezione-colon" element={<SecrezioneColon />} />
          <Route path="/principi/digestione/movimenti-colon" element={<MovimentiColon />} />
          <Route path="/principi/digestione/defecazione" element={<Defecazione />} />
          <Route path="/principi/digestione/feci" element={<Feci />} />
          
          {/* Diete famose */}
          <Route path="/dieta/mediterranea" element={<Mediterranea />} />
          <Route path="/dieta/zona" element={<Zona />} />
          <Route path="/dieta/chetogenica" element={<Chetogenica />} />
          <Route path="/dieta/paleo" element={<Paleo />} />
          <Route path="/dieta/vegetariana" element={<Vegetariana />} />
          <Route path="/dieta/vegana" element={<Vegana />} />
          <Route path="/dieta/digiuno-intermittente" element={<DigiunoIntermittente />} />
          <Route path="/dieta/gruppo-sanguigno" element={<GruppoSanguigno />} />
          <Route path="/dieta/dash" element={<DASH />} />
          <Route path="/dieta/mind" element={<MIND />} />
          <Route path="/dieta/atkins" element={<Atkins />} />
          <Route path="/dieta/dukan" element={<Dukan />} />
          <Route path="/dieta/flexitariana" element={<Flexitariana />} />
          <Route path="/dieta/low-fodmap" element={<LowFODMAP />} />

          {/* Supplementi */}
          <Route path="/supplementi" element={<Supplementi />} />
          <Route path="/supplementi/proteici" element={<Proteici />} />
          <Route path="/supplementi/energetici" element={<Energetici />} />
          <Route path="/supplementi/dimagrimento" element={<Dimagrimento />} />
          <Route path="/supplementi/massa" element={<Massa />} />
          <Route path="/supplementi/naturali-legali" element={<NaturaliLegali />} />
          <Route path="/supplementi/ormonali-dopanti" element={<OrmonaliDopanti />} />

          {/* Altre pagine */}
          <Route path="/attivita-fisica" element={<AttivitaFisica />} />
          <Route path="/corpo-umano" element={<CorpoUmano />} />
          <Route path="/obiettivo" element={<Obiettivo />} />
          <Route path="/donazione" element={<Donazione />} />
          <Route path="/aiuto" element={<Aiuto />} />
          <Route path="/aggiorna-dati" element={<AggiornaDati />} />
          <Route path="/aggiorna-i-tuoi-dati" element={<AggiornaDati />} />
          <Route path="/inserisci-i-tuoi-dati" element={<InserisciDati />} />
          <Route path="/info-calcolatore" element={<InfoCalcolatore />} />
          <Route path="/consigli" element={<Consigli />} />
          <Route path="/aggiorna-dati/inserisci" element={<InserisciDati />} />
          <Route path="/legenda-icone" element={<LegendaIcone />} />
          <Route path="/abbonamenti" element={<Abbonamenti />} />
          <Route path="/notifiche" element={<Notifiche />} />
          <Route path="/fonti-ufficiali" element={<FontiUfficiali />} />
          <Route path="/impostazioni" element={<Impostazioni />} />
          <Route path="/mappa-sito" element={<MappaSito />} />

          {/* 🧪 Pagina sandbox audio (fuori produzione) */}
          <Route path="/sandbox-audio" element={<AudioSandbox />} />
        </Route>
      </Routes>
    </Router>
  );
}
