import React from "react";
import PageContainer from "../../components/PageContainer";
import BottoneIndietro from "../../components/BottoneIndietro";

export default function Dolci() {


  return (
    <PageContainer
      titolo="Dolci"
      sottotitolo="La gratificazione immediata che inganna energia e metabolismo"
    >
      <BottoneIndietro
              path="/principi"
              state={{ returnTo: "Acqua" }}
              testo="Torna ai principi"
            />

        <p>
          I <strong>dolci</strong> rappresentano una delle categorie alimentari più
          seducenti perché agiscono rapidamente sui centri del piacere del cervello.
          Zuccheri semplici e grassi combinati insieme creano una gratificazione
          immediata, ma spesso temporanea, che può portare a ricercare nuovamente
          lo stesso stimolo.
        </p>

        <p style={{ marginTop: "1rem" }}>
          La maggior parte dei dolci contiene carboidrati ad alto indice glicemico.
          Questo significa che la glicemia sale rapidamente, stimolando un forte
          rilascio di insulina. Poco dopo, però, si verifica un calo energetico
          repentino che porta a stanchezza, fame precoce e desiderio di nuovi
          zuccheri: un circolo che può diventare abituale.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Il consumo frequente di dolci può influire sul peso corporeo, sulla
          sensibilità insulinica, sulla produzione ormonale e sulla qualità
          dell’alimentazione complessiva. Non si tratta di eliminarli del tutto,
          ma di inserirli in modo intelligente, evitando che diventino la risposta
          emotiva o energetica principale della giornata.
        </p>

        <p style={{ marginTop: "1rem" }}>
          Nella filosofia <strong>Nutrition Spiral</strong>, il dolce non è un
          “nemico”, ma un alimento da riconoscere per ciò che è: un piacere
          immediato che va gestito con equilibrio, consapevolezza e senza sensi di
          colpa. Quando conosci il suo effetto reale, sei tu a guidare la spirale,
          non il contrario.
        </p>
    </PageContainer>
  );
}
