import React from "react";
import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Acqua() {


  return (
    <PageContainer
      titolo="Acqua"
      sottotitolo="L’elemento essenziale alla vita e al benessere"
    >
      <BottoneIndietro
        path="/principi"
        state={{ returnTo: "Acqua" }}
        testo="Torna ai principi"
      />

        <p>
          L’<strong>acqua</strong> è il nutriente più importante e spesso il più
          sottovalutato. Costituisce oltre il 60% del corpo umano e partecipa a
          praticamente tutti i processi vitali: trasporto dei nutrienti,
          regolazione della temperatura, digestione, eliminazione delle tossine e
          mantenimento dell’equilibrio elettrolitico.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Anche una lieve disidratazione può ridurre energia, concentrazione,
          forza fisica e metabolismo. L’acqua è inoltre essenziale per la salute
          delle articolazioni, della pelle, dei reni e del sistema cardiovascolare.
          Un adeguato livello di idratazione permette al corpo di funzionare in
          modo armonioso, sostenendo ogni sistema fisiologico.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Il fabbisogno quotidiano varia in base a età, attività fisica,
          temperatura esterna, alimentazione e stato di salute. In generale, un
          apporto regolare distribuito durante la giornata è più efficace del
          bere abbondantemente in un’unica occasione.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Nella filosofia <strong>Nutrition Spiral</strong>, l’acqua è il
          fondamento dell’equilibrio: senza di essa nessun nutriente può essere
          utilizzato correttamente e nessun processo vitale può mantenersi in modo
          efficiente. Idratarsi significa dare al corpo ciò che gli permette di
          vivere, rigenerarsi e performare.
        </p>
    </PageContainer>
  );
}
