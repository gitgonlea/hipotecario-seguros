import React from 'react';
import Image from 'next/image';
import styles from './Assists.module.css';

interface AssistItemProps {
  iconSrc: string;
  title: string;
  description: string;
}

export const AssistItem = ({ iconSrc, title, description }: AssistItemProps) => {
  return (
    <div className={styles.assistItem}>
      <div className={styles.iconWrapper}>
        <Image
          src={iconSrc}
          alt={title}
          width={70}
          height={70}
        />
      </div>
      <div className={styles.textWrapper}>
        <h4 className={styles.itemTitle}>{title}</h4>
        <p className={styles.itemDescription}>{description}</p>
      </div>
    </div>
  );
};