import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

const footerColumns = [
  {
    title: 'EMPRESA',
    links: [
      { text: 'Quienes somos', href: '/quienes-somos' },
      { text: 'Banco Hipotecario', href: '/banco-hipotecario' },
      { text: 'Trabajá en HS', href: '/trabaja' },
    ],
    showQr: true, 
  },
  {
    title: 'SEGUROS',
    links: [
      { text: 'Hogar', href: '/seguros/hogar' },
      { text: 'Accidentes personales', href: '/seguros/accidentes' },
      { text: 'Bienes móviles', href: '/seguros/bienes-moviles' },
      { text: 'Salud', href: '/seguros/salud' },
      { text: 'Caución', href: '/seguros/caucion' },
      { text: 'Movilidad', href: '/seguros/movilidad' },
      { text: 'Asistencias', href: '/seguros/asistencias' },
      { text: 'Condiciones generales', href: '/condiciones' },
    ],
  },
  {
    title: 'SERVICIOS',
    links: [
      { text: 'Mi cuenta', href: '/mi-cuenta' },
      { text: 'Denunciar siniestro', href: '/denunciar-siniestro' },
      { text: 'Blog', href: '/blog' },
      { text: 'Preguntas frecuentes', href: '/faq' },
      { text: 'Contacto', href: '/contacto' },
      { text: 'Servicio de Atención al Asegurado (SAA)', href: '/saa' },
    ],
  },
  {
    title: 'LEGAL',
    links: [
      { text: 'Botón de arrepentimiento / baja', href: '/legal/baja' },
      { text: 'Defensa del consumidor', href: '/legal/consumidor' },
      { text: 'Términos y condiciones: BHN Seguros Generales', href: '/legal/terminos-bhn' },
      { text: 'Términos y condiciones: BHN Vida', href: '/legal/terminos-vida' },
      { text: 'Res. N° 35.678 SSN', href: '/legal/resolucion' },
      { text: 'Clientes PEP', href: '/legal/pep' },
      { text: 'Protección de datos personales SSN', href: '/legal/datos-personales' },
      { text: 'Prevención del fraude', href: '/legal/fraude' },
      { text: 'Libro de quejas, agradecimientos, sugerencias y reclamos', href: '/legal/quejas' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Row>
          <Col lg={3} md={6} className={`${styles.footerColumn} mb-4 mb-lg-0`}>
            <div className="d-flex align-items-center">
              <Image
                src="/images/Footer/hs-footer-logo.svg"
                alt="Hipotecario Seguros Logo"
                width={200}
                height={64}
              />
            </div>
            <div className={styles.contactSectionTitle}>CENTRO DE ATENCIÓN TELEFÓNICA</div>
            <a href="tel:08106660101" className={styles.contactPhone}>0810-666-0101</a>
            <div className={styles.contactHours}>De Lunes a Viernes de 9:00 a 21:00 hs</div>
            <div className={styles.socialIcons}>
              <Link href="#" className={styles.socialLink}><FontAwesomeIcon icon={faFacebookF} /></Link>
              <Link href="#" className={styles.socialLink}><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link href="#" className={styles.socialLink}><FontAwesomeIcon icon={faYoutube} /></Link>
              <Link href="#" className={styles.socialLink}><FontAwesomeIcon icon={faLinkedinIn} /></Link>
            </div>
            <div className={styles.copyright}>
              Todos los derechos reservados.<br />
              © 2025 Es marca registrada.
            </div>
          </Col>

          
          {footerColumns.map((column, index) => (
            <Col key={index} lg={index === 3 ? 3 : 2} md={6} className={`${styles.footerColumn} mb-4 mb-lg-0`}>
              <h5 className={styles.columnTitle}>{column.title}</h5>
              <ul className={styles.linkList}>
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className={styles.footerLink}>{link.text}</Link>
                  </li>
                ))}
              </ul>
              {column.showQr && (
                <div className={styles.qrCodeWrapper}>
                   <Image
                    src="/images/Footer/pdp.webp"
                    alt="PDP Logo"
                    width={60}  
                    height={24} 
                    className={styles.pdpLogo} 
                  />
                  
                  <div className={styles.qrCodesRow}>
                    <Image src="/images/Footer/qr1.jpg" alt="Data Fiscal QR Code" width={60} height={60} className={styles.qrCode} />
                    <Image src="/images/Footer/qr2.jpg" alt="Data Fiscal QR Code" width={60} height={60} className={styles.qrCode} />
                  </div>
                </div>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  );
};