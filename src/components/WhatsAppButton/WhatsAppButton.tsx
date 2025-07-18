import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from './WhatsAppButton.module.css';

export const WhatsAppButton = () => {
  return (
    <Link href="#" target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
      <FontAwesomeIcon icon={faWhatsapp} />
    </Link>
  );
};