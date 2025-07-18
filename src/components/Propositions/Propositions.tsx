import React from 'react';
import { Container } from 'react-bootstrap';
import { InfoCard } from '../InfoCard/InfoCard';
import styles from './Propositions.module.css';

export const Propositions = () => {
  return (
    <Container className="my-5">
      <div className={styles.cardContainer}>
        <InfoCard
          backgroundColor="#2a4b7c"
          textColor="white"
          iconSrc="/images/InfoCard/hand.svg"
          title="Te pagamos los gastos que tu obra social no te cubre"
          textLines={[
            "¿Quién va a pagar los viáticos?",
            "¿Quién le paga a la niñera?",
            "¿Quién te cuida?"
          ]}
        />

        <InfoCard
          backgroundColor="#a8dce5"
          textColor="#2a4b7c"
          iconSrc="/images/InfoCard/lens.svg"
          title="Si no tenés cobertura de salud, nosotros te asistimos"
          textLines={[
            "Ante una urgencia, tenemos prestadores que pueden ayudarte"
          ]}
        />
      </div>
    </Container>
  );
};