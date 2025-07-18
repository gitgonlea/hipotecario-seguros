import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';

import { PricingCard } from '../PricingCard/PricingCard';
import { InsuranceForm } from '../InsuranceForm/InsuranceForm';
import styles from './SaludIntegral.module.css';

export const SaludIntegral = () => {
  return (
    <Container className="my-5">
      <div className={styles.responsiveGrid}>
        
        <div className={styles.pricingCardWrapper}>
          <PricingCard />
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.protectionPill}>
            <Image
              src="/images/SaludIntegral/megaphone.svg"
              alt="Icono de nueva protección"
              width={49}
              height={56}
            />
            <span>¡Nueva protección!</span>
          </div>
          <h1 className={`${styles.mainHeading} mt-3`}>
            Respaldá tu economía ante un imprevisto de salud
          </h1>
          <p className={`${styles.subHeading} mt-3 mb-4`}>
            Funciona como un complemento al sistema de salud público, obras sociales y prepagas y aporta un beneficio adicional para utilizarlo como necesites.
          </p>
          <InsuranceForm />
        </div>

      </div>
    </Container>
  );
};