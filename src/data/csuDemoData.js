// CSU DEMO DATA
// Vocabolario semantico alimenti (numeri fittizi, regole vere)

export const ALIMENTI_DEMO = [

  /* =========================
     BASE AMIDACEA
     ========================= */

  {
    alimento_id: "AL_PASTA",
    nome: "Pasta",
    ruolo: "base",
    stati_preparazione_ammessi: ["bollita", "al_forno"],
    stato_preparazione_default: "bollita",
    stati_preparazione_esclusi: ["crudo", "grigliata", "fritta"],
    quantita_ammessa: ["porzione", "porzione_piccola", "porzione_abbondante"],
    quantita_default: "porzione",
    relazioni_implicite: {
      base_alternativa: false,
      spesso_usata_con: ["condimento", "proteina", "vegetale"]
    }
  },

  {
    alimento_id: "AL_PATATA",
    nome: "Patata",
    ruolo: "base",
    stati_preparazione_ammessi: ["bollita", "al_forno", "fritta", "saltata"],
    stato_preparazione_default: "bollita",
    stati_preparazione_esclusi: ["crudo", "grigliata"],
    quantita_ammessa: ["porzione", "porzione_piccola", "porzione_abbondante"],
    quantita_default: "porzione",
    relazioni_implicite: {
      base_alternativa: true,
      assorbe_grassi: true,
      attenzione_con: ["frittura", "grassi_aggiunti"]
    }
  },

  /* =========================
     PROTEINE VEGETALI
     ========================= */

  {
    alimento_id: "AL_FAGIOLI",
    nome: "Fagioli",
    ruolo: "proteina_vegetale",
    stati_preparazione_ammessi: ["bolliti", "stufati"],
    stato_preparazione_default: "bolliti",
    stati_preparazione_esclusi: ["crudi", "fritti", "grigliati"],
    quantita_ammessa: ["porzione", "porzione_piccola"],
    quantita_default: "porzione",
    relazioni_implicite: {
      fonte_fibre: true,
      alternativa_a: ["proteina_animale"],
      attenzione_con: ["digestione_lenta"]
    }
  },

  /* =========================
     PROTEINE ANIMALI
     ========================= */

  {
    alimento_id: "AL_UOVO",
    nome: "Uovo",
    ruolo: "proteina_animale",
    stati_preparazione_ammessi: [
      "crudo",
      "strapazzato",
      "sodo",
      "alla_coque",
      "al_tegamino",
      "in_camicia"
    ],
    stato_preparazione_default: "strapazzato",
    stati_preparazione_esclusi: ["bollito", "fritto", "grigliato"],
    quantita_ammessa: ["uno", "due", "tre"],
    quantita_default: "uno",
    relazioni_implicite: {
      proteina_completa: true,
      contiene_grassi: true,
      attenzione_con: ["grassi_aggiunti"]
    }
  },

  {
    alimento_id: "AL_MANZO",
    nome: "Manzo",
    ruolo: "proteina_animale",
    stati_preparazione_ammessi: [
      "al_sangue",
      "media",
      "ben_cotta",
      "brasata",
      "stufata"
    ],
    stato_preparazione_default: "media",
    stati_preparazione_esclusi: ["crudo", "fritto", "grigliato"],
    quantita_ammessa: ["porzione", "porzione_piccola", "porzione_abbondante"],
    quantita_default: "porzione",
    relazioni_implicite: {
      elevata_densita_energetica: true,
      attenzione_con: ["grassi_aggiunti"]
    }
  },

  {
    alimento_id: "AL_POLLO",
    nome: "Pollo",
    ruolo: "proteina_animale",
    stati_preparazione_ammessi: [
      "ai_ferri",
      "al_forno",
      "in_padella",
      "lesso"
    ],
    stato_preparazione_default: "ai_ferri",
    stati_preparazione_esclusi: ["crudo"],
    quantita_ammessa: ["porzione", "porzione_piccola", "porzione_abbondante"],
    quantita_default: "porzione",
    relazioni_implicite: {
      carne_magra: true,
      attenzione_con: ["frittura"]
    }
  },

  {
    alimento_id: "AL_PESCE",
    nome: "Pesce",
    ruolo: "proteina_animale",
    stati_preparazione_ammessi: [
      "crudo",
      "al_vapore",
      "al_forno",
      "alla_griglia",
      "in_padella"
    ],
    stato_preparazione_default: "al_forno",
    stati_preparazione_esclusi: ["bollito", "fritto"],
    quantita_ammessa: ["porzione", "porzione_piccola"],
    quantita_default: "porzione",
    relazioni_implicite: {
      spesso_magro: true,
      spesso_usato_con: ["verdure", "olio"]
    }
  },

  /* =========================
     VEGETALI
     ========================= */

  {
    alimento_id: "AL_VERDURE",
    nome: "Verdure",
    ruolo: "vegetale",
    stati_preparazione_ammessi: [
      "crude",
      "bollite",
      "saltate",
      "al_forno",
      "grigliate",
      "in_pastella"
    ],
    stato_preparazione_default: "crude",
    stati_preparazione_esclusi: ["fritte"],
    quantita_ammessa: ["contorno", "porzione", "porzione_abbondante"],
    quantita_default: "contorno",
    relazioni_implicite: {
      fonte_fibre: true,
      bilanciano_piatto: true,
      attenzione_con: ["grassi_aggiunti"]
    }
  },

  /* =========================
     CONDIMENTI E GRASSI
     ========================= */

  {
    alimento_id: "AL_PESTO",
    nome: "Pesto",
    ruolo: "condimento",
    stati_preparazione_ammessi: ["condimento_pronto"],
    stato_preparazione_default: "condimento_pronto",
    stati_preparazione_esclusi: [
      "crudo",
      "bollito",
      "forno",
      "grigliato",
      "fritto"
    ],
    quantita_ammessa: ["cucchiaio", "cucchiaino", "porzione_piccola"],
    quantita_default: "porzione_piccola",
    relazioni_implicite: {
      contiene_grassi: true,
      contiene_formaggio: true,
      attenzione_con: ["grassi_aggiunti"]
    }
  },

  {
    alimento_id: "AL_OLIO_EVO",
    nome: "Olio extravergine di oliva",
    ruolo: "grasso",
    stati_preparazione_ammessi: ["crudo"],
    stato_preparazione_default: "crudo",
    stati_preparazione_esclusi: ["bollito", "fritto", "grigliato"],
    quantita_ammessa: ["filo", "cucchiaino", "cucchiaio"],
    quantita_default: "filo",
    relazioni_implicite: {
      grasso_puro: true,
      densita_energetica: "alta",
      attenzione_con: ["altri_grassi"]
    }
  },

  {
    alimento_id: "AL_PARMIGIANO",
    nome: "Parmigiano",
    ruolo: "ingrediente",
    stati_preparazione_ammessi: ["pronto"],
    stato_preparazione_default: "pronto",
    stati_preparazione_esclusi: [
      "crudo",
      "bollito",
      "forno",
      "grigliato",
      "fritto"
    ],
    quantita_ammessa: ["spolverata", "cucchiaio", "porzione_piccola"],
    quantita_default: "spolverata",
    relazioni_implicite: {
      contiene_grassi: true,
      contiene_proteine: true,
      attenzione_con: ["altri_formaggi", "grassi_aggiunti"]
    }
  }

];
