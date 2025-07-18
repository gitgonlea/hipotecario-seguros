


import React from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';
import { FlipCardItem } from './FlippCardItem';
import styles from './FlippingCards.module.css';

const cardsData = [
  {
    iconSrc: '/images/FlippingCards/patient.svg',
    title: <>Sumá reintegros por<br />prótesis e internación</>,
    backText: 'Podés sumar a tus coberturas el reintegro por prótesis y renta por internacion diaria',
  },
  {
    iconSrc: '/images/FlippingCards/exam.svg',
    title: 'Sin exámenes médicos',
    backText: 'Sólo vas a tener que responder unas preguntas de tu salud como declaración jurada',
  },
  {
    iconSrc: '/images/FlippingCards/insurance.svg',
    title: <>Cobertura desde<br />los 18 años</>,
    backText: 'La edad de contratación es de 18 a 64 y de permanencia hasta los 65',
  },
  {
    iconSrc: '/images/FlippingCards/phone.svg',
    title: <>Todo on line,<br />incluso tu póliza</>,
    backText: 'Contratás y tu póliza las podés ver on line. Tenemos un portal de autogestión para vos.',
  },
];

export const FlippingCards = () => {

  return (
    <Container className="my-5 py-5">
      <h2 className={styles.mainTitle}>Contratá tu seguro 100% online,<br />sin trámites</h2>
      <Row className="g-4">
        {cardsData.map((card, index) => (
          <Col key={index} md={6} lg={3}>
            
            <FlipCardItem
              iconSrc={card.iconSrc}
              title={card.title}
              backText={card.backText}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};