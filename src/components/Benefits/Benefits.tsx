import React from 'react';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { BenefitItem } from './BenefitItem';
import styles from './Benefits.module.css';


const benefitsData = [
  {
    iconSrc: '/images/Benefits/heart.svg',
    label: 'Sesiones de psicología',
  },
  {
    iconSrc: '/images/Benefits/check-heart.svg',
    label: 'Chequeos anuales',
  },
  {
    iconSrc: '/images/Benefits/check.svg',
    label: 'Recetas y órdenes',
  },
  {
    iconSrc: '/images/Benefits/teddy.svg',
    label: 'Clínica médica y pediatría',
  },
];

export const Benefits = () => {
  return (
    <Container className="my-5">
      <div className={styles.benefitsSection}>
        <h2 className={styles.mainTitle}>Más asistencias en tu seguro de salud</h2>
        <p className={styles.subTitle1}>Te acompañamos desde la prevención</p>
        <p className={styles.subTitle2}>No esperes a que te pase algo para usar todos los beneficios que tenemos</p>

        <div className={styles.gridContainer}>
          {benefitsData.map((benefit, index) => (
            <BenefitItem
              key={index}
              iconSrc={benefit.iconSrc}
              label={benefit.label}
            />
          ))}
        </div>

        <div className={styles.ctaButtonWrapper}>
          <Link href="#" className={styles.ctaButton}>
            <FontAwesomeIcon icon={faFilePdf} />
            <span>Ver PDF completo de asistencias</span>
          </Link>
        </div>
      </div>
    </Container>
  );
};