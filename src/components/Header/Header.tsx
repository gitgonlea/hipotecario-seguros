"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { Container, Navbar, Nav, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

const productsData = [
  { href: '/hogar', iconSrc: '/images/Header/house.svg', title: 'Hogar', subtitle: 'Es más que una casa, es tu casa.' },
  { href: '/salud', iconSrc: '/images/Header/umbrella.svg', title: 'Salud', subtitle: 'Respaldá tu economía ante un imprevisto de salud.' },
  { href: '/accidentes', iconSrc: '/images/header/injured.svg', title: 'Accidentes personales', subtitle: 'La vida es una sola, no te pierdas de nada.' },
  { href: '/bienes', iconSrc: '/images/Header/phone.svg', title: 'Bienes móviles', subtitle: 'Las cosas están para usarlas.' },
  { href: '/movilidad', iconSrc: '/images/Header/bike.svg', title: 'Movilidad', subtitle: 'Viajá seguro a toda hora.' },
  { href: '/caucion', iconSrc: '/images/Header/keys.svg', title: 'Caución', subtitle: 'Inquilino tranquilo y propietario seguro.' },
];

export const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isExpanded]);

  return (
    <header className="bg-white shadow-sm sticky-top">
      <Navbar 
        expand="lg" 
        className={`p-0 ${styles.navbarWrapper}`}
        expanded={isExpanded}
        onToggle={() => setIsExpanded(!isExpanded)}
      >
        <Container>
          <Link href="/" className="navbar-brand py-0 me-auto" onClick={() => setIsExpanded(false)}>
            <Image src="/images/Header/hs-logo.svg" alt="Hipotecario Seguros" width={190} height={68} className="img-fluid" priority />
          </Link>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav" className={styles.mobileMenuOverlay}>
            
            <Nav className="ms-auto d-none d-lg-flex align-items-center">
              <div className={styles.productsDropdownWrapper}>
                <div className={styles.productsDropdownToggle}>
                  PRODUCTOS <FontAwesomeIcon icon={faChevronDown} width={12} className="ms-1" />
                </div>
                <div className={styles.megaMenu}>
                  {productsData.map((item) => (
                    <Link key={item.href} href={item.href} className={`dropdown-item ${styles.menuItem}`}>
                      <Image src={item.iconSrc} alt="" width={55} height={55} />
                      <div className={styles.menuItemTextWrapper}>
                        <span className={styles.menuItemTitle}>{item.title}</span>
                        <span className={styles.menuItemSubtitle}>{item.subtitle}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="d-flex align-items-center gap-4 mx-4">
                <Link href="#" className={styles.navLink}>BLOG</Link>
                <Link href="#" className={styles.navLink}>DENUNCIAR SINIESTRO</Link>
                <Link href="#" className={styles.navLink}>CONTACTO</Link>
              </div>
             <div className="d-flex align-items-center gap-3">
                <Link 
                  href="#" 
                  className={`btn rounded-pill btn-mi-cuenta d-flex align-items-center gap-2 ${styles.desktopButton}`}
                >
                  <FontAwesomeIcon icon={faUser} width={14} /> MI CUENTA
                </Link>
                <Link 
                  href="#" 
                  className={`btn rounded-pill btn-pas d-flex align-items-center ${styles.desktopButton}`}
                >
                  P.A.S. <FontAwesomeIcon icon={faChevronRight} width={5} className="ms-1" />
                </Link>
              </div>
            </Nav>

            <Nav className="d-lg-none flex-column">
              <div className={styles.mobileNavContainer}>
                <Accordion flush className="mobile-accordion-products">
                  <Accordion.Item eventKey="0" className={styles.mobileAccordionItem}>
                    <Accordion.Header data-theme="products">
                      PRODUCTOS <FontAwesomeIcon icon={faChevronRight} />
                    </Accordion.Header>
                    <Accordion.Body className={styles.mobileAccordionBody}>
                      {productsData.map((item) => (
                        <Link 
                          key={item.href} 
                          href={item.href} 
                          className={styles.mobileSubLink}
                          onClick={() => setIsExpanded(false)}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Link href="#" className={styles.mobileNavLink} onClick={() => setIsExpanded(false)}>BLOG</Link>
                <Link href="#" className={styles.mobileNavLink} onClick={() => setIsExpanded(false)}>DENUNCIAR SINIESTRO</Link>
                <Link href="#" className={styles.mobileNavLink} onClick={() => setIsExpanded(false)}>CONTACTO</Link>
                
                <div className={styles.mobileActionButtons}>
                  <Link href="#" className="btn rounded-pill btn-mi-cuenta d-flex align-items-center justify-content-between" onClick={() => setIsExpanded(false)}>
                    <span className="d-flex align-items-center gap-2">
                      <FontAwesomeIcon icon={faUser} width={15} /> 
                      MI CUENTA
                    </span>
                    <span></span>
                  </Link>
                  <Link href="#" className="btn rounded-pill btn-pas d-flex align-items-center justify-content-between" onClick={() => setIsExpanded(false)}>
                    P.A.S. <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                </div>
              </div>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};