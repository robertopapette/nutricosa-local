import React from "react";
import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function OrmonaliDopanti() {
  return (
    <PageContainer
      titolo="🚫 Ormonali e Dopanti"
      sottotitolo="Comprendere i rischi per proteggere la salute"
    >

        <BottoneIndietro
                path="/supplementi"
                state={{ returnTo: "Ormonali e dopanti" }}
                testo="Torna a Diete famose"
              />

        <p style={{ marginTop: "1.5rem" }}>
          I <strong>supplementi ormonali e dopanti</strong> comprendono sostanze
          che agiscono direttamente o indirettamente sull’equilibrio ormonale
          dell’organismo o sulle prestazioni fisiche, spesso al di fuori delle
          normali capacità fisiologiche.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Queste sostanze non supportano il corpo, ma ne forzano i meccanismi.
          L’apparente miglioramento delle prestazioni o dell’aspetto fisico è
          spesso il risultato di un’alterazione artificiale dei processi
          biologici, ottenuta a scapito dell’equilibrio interno e della salute
          a medio e lungo termine.
        </p>

        <p style={{ marginTop: "1rem" }}>
          L’utilizzo di composti ormonali o dopanti può interferire con la
          produzione endogena di ormoni, con il sistema cardiovascolare, con il
          metabolismo e con l’equilibrio psico-fisico. Gli effetti collaterali
          non sono sempre immediati e, in molti casi, diventano evidenti solo
          dopo la sospensione o con il passare del tempo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Oltre ai rischi per la salute, molte di queste sostanze sono vietate
          dalle normative sportive e, in alcuni casi, dalla legge. Il loro uso
          espone a conseguenze legali, etiche e personali che vanno ben oltre il
          contesto dell’allenamento o della performance.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, le sostanze ormonali e dopanti
          vengono trattate esclusivamente in chiave informativa e preventiva.
          La vera forza non nasce dal forzare il corpo, ma dal rispettarlo.
          Comprendere i rischi significa scegliere consapevolmente la salute,
          la longevità e un percorso di crescita autentico.
        </p>
    </PageContainer>
  );
}
