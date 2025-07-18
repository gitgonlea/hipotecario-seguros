import React from 'react';
import { Container } from 'react-bootstrap';
import { AssistItem } from './AssistItem'; 
import styles from './Assists.module.css';


const assistsData = [
  {
    iconSrc: '/images/Assists/pill.svg',
    title: 'Reintegro en farmacias',
    description: '1 medicamento recetado al mes. Hasta $8000 cada uno.',
  },
  {
    iconSrc: '/images/Assists/tooth.svg',
    title: 'Reintegro en Odontología',
    description: '2 consultas o limpieza por año. Hasta $19.000 cada una.',
  },
  {
    iconSrc: '/images/Assists/test-tube.svg',
    title: 'Estudios de laboratorio',
    description: '4 veces por año. Hasta $8000 cada uno.',
  },
  {
    iconSrc: '/images/Assists/medic.svg',
    title: 'Médico clínico a domicilio',
    description: 'Hasta 6 visitas por año.',
  },
  {
    iconSrc: '/images/Assists/computer.svg',
    title: 'Telemedicina para grupo familiar',
    description: 'Atención 24hs online para consultas y recetas.',
  },
  {
    iconSrc: '/images/Assists/checkup.svg',
    title: 'Chequeos preventivos',
    description: '2 veces al año. Hasta $29.000 cada uno.',
  },
];

export const Assists = () => {
  return (
    <Container className="my-5">
      <div className={styles.assistsCard}>
        <h2 className={styles.mainTitle}>Asistencias para tu tranquilidad</h2>
        <hr className={styles.divider} />
        <div className={styles.gridContainer}>
          {assistsData.map((item, index) => (
            <AssistItem
              key={index}
              iconSrc={item.iconSrc}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};