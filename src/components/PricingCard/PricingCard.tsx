import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import styles from '../SaludIntegral/SaludIntegral.module.css';

const CoverageRow = ({ label, amount }: { label: string; amount: string }) => (
  <div className={styles.coverageRow}>
    <span className={styles.coverageLabel}>
      {label}
      <FontAwesomeIcon icon={faInfoCircle} className={styles.infoIcon} />
    </span>
    <span className={styles.coverageAmount}>{amount}</span>
  </div>
);

export const PricingCard = () => {
  return (
    <div className={styles.pricingCard}>
      <div className={styles.cardTopBanner}>Salud Integral</div>
      <div className={styles.priceSection}>
        <span className={styles.priceSign}>$</span>
        <span className={styles.priceAmount}>5.185</span>
        <span className={styles.pricePer}>/ mes</span>
        <p className={styles.pricePerDay}>$172,83 / día</p>
      </div>
      <div className={styles.idealBanner}>
        Ideal para acompañar tu obra social ó prepaga
      </div>
      <ul className={styles.featuresList}>
        <li className={styles.featureItem}>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
          <span>Plan individual</span>
        </li>
        <li className={styles.featureItem}>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
          <span>Cobertura desde los 18 años</span>
        </li>
        <li className={styles.featureItem}>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
          <span>Ingreso sin chequeo médico</span>
        </li>
        <li className={styles.featureItem}>
          <FontAwesomeIcon icon={faCheckCircle} className={styles.checkIcon} />
          <span>Contratación fácil y 100% online</span>
        </li>
      </ul>
      <div className={styles.coverageList}>
        <div className="text-end text-muted small mb-2">Hasta</div>
        <CoverageRow label="Enfermedades críticas" amount="$1.750.000" />
        <CoverageRow label="Cirugías" amount="$1.750.000" />
        <CoverageRow label="Trasplante de órganos" amount="$3.500.000" />
      </div>
    </div>
  );
};