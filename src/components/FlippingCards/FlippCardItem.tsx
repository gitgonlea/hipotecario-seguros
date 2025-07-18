"use client"; 

import React, { useState } from 'react'; 
import Image from 'next/image';
import styles from './FlippingCards.module.css';


interface FlipCardItemProps {
  iconSrc: string;
  title: React.ReactNode;
  backText: string;
}

export const FlipCardItem = ({ iconSrc, title, backText }: FlipCardItemProps) => {
  
  const [isFlipped, setIsFlipped] = useState(false);

  
  const handleFlip = () => {
    setIsFlipped(!isFlipped); 
  };

  return (
    
    <div className={styles.flipCard} onClick={handleFlip}>
      
      <div className={`${styles.flipCardInner} ${isFlipped ? styles.isFlipped : ''}`}>
        
        <div className={styles.flipCardFront}>
          <div className={styles.iconArea}>
            <Image src={iconSrc} alt="" width={80} height={80} />
          </div>
          <div className={styles.titleBanner}>
            <p className={styles.cardTitle}>{title}</p>
          </div>
        </div>
        
        <div className={styles.flipCardBack}>
          <p className={styles.backText}>{backText}</p>
        </div>
      </div>
    </div>
  );
};