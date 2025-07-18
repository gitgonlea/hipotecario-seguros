"use client";

import React, { useState } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './InsuranceInfo.module.css';

interface ContentItem {
  subTitle: string;
  description?: string;
  listItems?: string[];
}
interface AccordionDataItem {
  eventKey: string;
  title: string;
  content: ContentItem[];
}

const accordionData: AccordionDataItem[] = [
  {
    eventKey: '0',
    title: 'Atención cubierta',
    content: [
      {
        subTitle: 'Médico a domicilio',
      },
      {
        subTitle: 'Reintegros en farmacias todos los meses',
      },
      {
        subTitle: 'Sesiones de psicología virtual o presencial',
      },
      {
        subTitle: 'Atención odontológica',
        description: 'Atención ante urgencias odontológicas, incluyendo radiografías (Periapicales y Coronales), Endodoncia (Tratamiento de Conducto), Operatoria Dental (Obturación simple compuesta y compleja), Periodoncia (Tratamiento gingivitis), Cirugías: dientes (permanentes/temporales); (radiculares/fracturados), Limpieza.',
      },
      {
        subTitle: 'Asistencia nutricional',
        description: 'Con planes orientativos de alimentación saludable indicando calorías recomendadas en cada comida, Información práctica de recetas clásicas adaptadas a las distintas patologías (por ejemplo, celiaquía y diabetes) y asesoramiento sobre productos disponibles en el mercado para cada caso.',
      },
      {
        subTitle: 'Alquiler de aparatos ortopédicos',
      }
    ],
  },
  {
    eventKey: '1',
    title: 'Exámenes',
    content: [
      {
        subTitle: 'Consultas médicas de cualquier especialidad',
        description: 'Con especialistas como Kinesiología, Dermatología, Gastroenterología, Nutrición, Oftalmología, Psicología, Otorrinolaringología, Odontología, Nefrología, Neurología, Neumología, Endocrinología, Cardiología, Traumatología, Reumatología, Cirugía General y Hepatología.',
      },
      {
        subTitle: 'Chequeos preventivos',
        description: 'Que incluye electrocardiograma, hemograma y análisis de orina completo, RX de tórax, ecografía abdominal y ecografía Doppler. Control médico anual por prevención/control con un especialista en estudios de:',
        listItems: [
          'Endoscopia',
          'Colonoscopia',
          'Examen prostático',
          'PET / CT (Estudio de Cáncer)',
        ],
      },
      {
        subTitle: 'Estudios de laboratorio',
        description: 'Vas a poder realizarte estudios de laboratorio, hemograma y análisis de orina completo entre otros.',
      },
    ],
  },
  {
    eventKey: '2',
    title: 'Telemedicina',
    content: [
      {
        subTitle: 'Consultas médicas para vos y tu familia',
        description: 'Te sumamos el más completo servicio de telemedicina para vos y para tu grupo familiar, las 24hs, los 365 días del año.',
      },
      {
        subTitle: 'Atención on line las 24 hs.',
        description: 'Sin límite de llamados.',
      },
      {
        subTitle: 'Clínica médica y pediatría',
        description: 'Ante una duda, mejor acudir rápidamente antes de salir de casa.',
      },
      {
        subTitle: 'Recetas y órdenes de estudios totalmente digital',
        description: 'Con registro de historia clínica y derivación a diferentes especialidades.',
      },
    ],
  },
];

export const InsuranceInfo = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  return (
    <Container className="my-5 py-5">
      <h2 className={styles.mainTitle}>¿Qué me cubre la asistencia del seguro de salud?</h2>
      <p className={styles.subTitle}>
        Este servicio es el complemento a la cobertura que contratás con tu seguro y te permite contar con:
      </p>
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key === activeKey ? null : (key as string))}>
        {accordionData.map((item) => {
          const isOpen = activeKey === item.eventKey;
          return (
            <div key={item.eventKey} className={styles.itemWrapper}>
              <Accordion.Item eventKey={item.eventKey} className={styles.accordionItem}>
                <Accordion.Header>
                  <div className={styles.customButton}>
                    <span className={styles.accordionTitle}>{item.title}</span>
                    <span className={styles.toggleText}>
                      {isOpen ? 'Ver menos' : 'Ver más'}
                      <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} />
                    </span>
                  </div>
                </Accordion.Header>
                <Accordion.Body className={styles.accordionBody}>
                  {item.content.map((contentItem, index) => (
                    <div key={index} className={styles.contentItem}>
                      <h5 className={styles.contentTitle}>{contentItem.subTitle}</h5>
                      {contentItem.description && (
                        <p className={styles.contentDescription}>{contentItem.description}</p>
                      )}
                      {contentItem.listItems && contentItem.listItems.length > 0 && (
                        <ul className={styles.bulletList}>
                          {contentItem.listItems.map((listItem, i) => (
                            <li key={i}>{listItem}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            </div>
          );
        })}
      </Accordion>
    </Container>
  );
};