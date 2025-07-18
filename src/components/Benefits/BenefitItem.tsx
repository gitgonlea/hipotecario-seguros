import React from 'react';
import Image from 'next/image';
import styles from './Benefits.module.css';

interface BenefitItemProps {
  iconSrc: string;
  label: string;
}

export const BenefitItem = ({ iconSrc, label }: BenefitItemProps) => {
  return (
    <div className={styles.benefitItem}>
      <Image
        src={iconSrc}
        alt={label}
        width={80}
        height={80}
      />
      <p className={styles.itemLabel}>{label}</p>
    </div>
  );
};