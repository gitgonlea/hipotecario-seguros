import React from 'react';
import Image from 'next/image';
import styles from '../Propositions/Propositions.module.css';

interface InfoCardProps {
  iconSrc: string;
  title: string;
  textLines: string[];
  backgroundColor: string;
  textColor: string;
}

export const InfoCard = ({ iconSrc, title, textLines, backgroundColor, textColor }: InfoCardProps) => {
  return (
    <div className={styles.infoCard} style={{ backgroundColor, color: textColor }}>
      <div className={styles.iconWrapper}>
        
        <Image
          src={iconSrc}
          alt={`Icon for ${title}`}
          className="img-fluid"
          fill
          sizes="(max-width: 768px) 78px, 90px"
        />

      </div>
      <div className={styles.textWrapper}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <ul className={styles.cardText}>
          {textLines.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};