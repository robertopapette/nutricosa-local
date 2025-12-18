import React from "react";
import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Proteine() {




  return (
    <PageContainer
      titolo="Proteine"
      sottotitolo="Il mattone fondamentale del corpo umano"
    >
    <BottoneIndietro
      path="/principi"
      state={{ returnTo: "Proteine" }}
      testo="Torna ai principi"
    />


      <p>
        Le <strong>proteine</strong> sono i mattoni fondamentali dell’organismo umano.
        Ogni cellula, tessuto e organo dipende dalla loro presenza per crescere,
        ripararsi e funzionare correttamente. Sono coinvolte in processi vitali
        come la costruzione muscolare, la produzione di enzimi, ormoni,
        anticorpi e nel trasporto di molte sostanze essenziali.
      </p>

      <p style={{ marginTop: "1rem" }}>
        Le proteine alimentari sono costituite da <strong>amminoacidi</strong>, alcuni
        dei quali sono definiti “essenziali” perché il corpo non è in grado di
        produrli autonomamente. Per questo motivo devono essere assunti tramite la
        dieta.
      </p>

      <p style={{ marginTop: "1rem" }}>
        Le fonti animali possiedono proteine complete, mentre molte fonti vegetali
        hanno profili amminoacidici più variabili. Tuttavia, attraverso combinazioni
        intelligenti, anche una dieta vegetale può garantire un apporto proteico
        eccellente.
      </p>

      <p style={{ marginTop: "1rem" }}>
        Comprendere il ruolo delle proteine significa imparare a nutrire
        correttamente muscoli, metabolismo e sistema immunitario.
      </p>
    </PageContainer>
  );
}
