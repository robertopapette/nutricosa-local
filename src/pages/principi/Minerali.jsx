import React from "react";
import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Minerali() {


  return (
    <PageContainer
      titolo="Minerali"
      sottotitolo="I regolatori invisibili dell’equilibrio interno"
    >

      <BottoneIndietro
              path="/principi"
              state={{ returnTo: "Acqua" }}
              testo="Torna ai principi"
            />

        <p>
          I <strong>minerali</strong> sono micronutrienti essenziali che svolgono ruoli
          fondamentali nel mantenimento dell’equilibrio interno dell’organismo. Pur
          essendo necessari in quantità ridotte, regolano funzioni vitali come il
          ritmo cardiaco, la contrazione muscolare, la trasmissione nervosa, la
          formazione delle ossa e il bilancio dei liquidi.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Si distinguono in <strong>macrominerali</strong> (come calcio, magnesio,
          sodio, potassio e fosforo), richiesti in quantità relativamente maggiori,
          e in <strong>oligoelementi</strong> (come ferro, zinco, rame, iodio,
          selenio), presenti in tracce ma indispensabili per processi metabolici,
          produzione di ormoni e difesa dalle ossidazioni.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Una loro carenza può influenzare energia, forza muscolare, qualità del
          sonno, immunità e metabolismo. Allo stesso tempo, un eccesso può essere
          altrettanto dannoso. L’equilibrio dei minerali dipende dall’alimentazione,
          dall’idratazione, dall’attività fisica e dal corretto funzionamento degli
          organi deputati alla regolazione, come reni e ghiandole endocrine.
        </p>

        <p style={{ marginTop: "1rem" }}>
          In <strong>Nutrition Spiral</strong>, i minerali rappresentano i piccoli ma
          potenti regolatori dell’armonia biologica: senza di essi, anche i sistemi
          più complessi dell’organismo perderebbero coordinazione e stabilità.
          Comprenderli significa capire cosa mantiene vivo e bilanciato tutto il
          nostro corpo.
        </p>
    </PageContainer>
  );
}
