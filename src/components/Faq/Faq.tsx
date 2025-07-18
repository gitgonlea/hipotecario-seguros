"use client";

import React, { useState } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './Faq.module.css';


type ContentBlock = {
  type: 'subheading' | 'paragraph' | 'list' | 'ordered-list';
  text?: string;
  items?: string[];
};
type FaqItemData = {
  eventKey: string;
  question: string;
  answer: ContentBlock[];
};

const faqData: FaqItemData[] = [
  {
    eventKey: '0',
    question: '¿Para qué me sirve?',
    answer: [
      {
        type: 'subheading',
        text: '¿Para qué me sirve el seguro del salud integral?',
      },
      {
        type: 'paragraph',
        text: 'Para respaldar tu economía ante un imprevisto de salud. Cubre la falta o complementa la prestación del sistema de salud público, tu obra social o medicina prepaga. Ante el primer diagnóstico de cáncer, infarto de miocardio, derrame e infarto cerebral, cirugía o un trasplante te pagamos una suma asegurada y con el dinero podrás hacer frente a todos los gastos adicionales e imprevistos que siempre surgen.',
      },
      {
        type: 'subheading',
        text: '¿Qué me cubre el seguro de salud?',
      },
      {
        type: 'list',
        items: [
          'Médico a domicilio por cualquier emergencia',
          'Reintegros en gastos de farmacia',
          'Videoconsultas médicas con diferentes especialistas las 24 horas para vos y tu familia. También podés perdile a los médicos recetas u órdenes de estudios que necesites',
          'Consultas médicas de cualquier especialidad',
          'Estudios de laboratorio',
          '¡Te vas a poder hacer 2 chequeos anuales preventivos!',
        ],
      },
    ],
  },
  {
    eventKey: '1',
    question: 'Coberturas y Asistencias',
    answer: [
      {
        type: 'subheading',
        text: '¿Ante qué situación tengo cobertura?',
      },
      {
        type: 'paragraph',
        text: 'Tu póliza de seguro de salud te protege ante:',
      },
      {
        type: 'list',
        items: [
          'Intervenciones quirúrgicas como: visión, otorrinolaringológicas, mamas, cardiovasculares, en el aparato digestivo y urinario, obstétricas, óseas, dermis, reparadoras y bariátricas',
          'Trasplante de órganos: médula ósea, corazón, pulmón o bipulmón, hígado, páncreas, riñones y de córnea',
          'Enfermedades críticas como: cáncer, infarto de miocardio, derrame e infarto cerebral',
          'Prótesis: traumatológicas y ortópedicas, cardiovasculares, neurológicas, oculares, auditivas y digestivas',
          'Gasto diario por internación clínica y/o quirúrgica',
        ],
      },
      {
        type: 'subheading',
        text: '¿Cómo solicitar el servicio de asistencia? ¿Quiénes pueden utilizarla?',
      },
      {
        type: 'paragraph',
        text: 'Para solicitar o consultar sobre tu asistencia podés llamar al 0810.666.0066. El servicio puede ser utilizado por el asegurado de la póliza, pero, en caso de que necesites, podés coordinar una videoconsulta con un médico especialista para vos o cualquier integrante de tu grupo familiar.',
      },
      {
        type: 'subheading',
        text: '¿Quién puede ser asegurado?',
      },
      {
        type: 'paragraph',
        text: 'Lo podés contratar si tenés entre 18 y 64 años y no hayas contraído ninguno de los padecimientos cubiertos.',
      },
      {
        type: 'subheading',
        text: 'Si tengo obra social o pre paga ¿Puedo contratar el seguro de salud?',
      },
      {
        type: 'paragraph',
        text: 'Si, lo podés contratar, es complementario al sistema de salud pública, tu obra social o prepaga.',
      },
      {
        type: 'subheading',
        text: '¿A partir de qué momento está vigente la cobertura?',
      },
      {
        type: 'paragraph',
        text: 'La vigencia de la póliza es a partir de las 0 (cero) horas del día siguiente de la contratación.',
      },
    ],
  },
  {
    eventKey: '2',
    question: 'Siniestros y denuncias',
    answer: [
      {
        type: 'subheading',
        text: '¿Cómo denuncio un siniestro?',
      },
      {
        type: 'paragraph',
        text: 'Tenés 3 opciones para tu comodidad:',
      },
      {
        type: 'ordered-list',
        items: [
          'Ingresá al portal de autogestión con tu clave y cargá on line tu denuncia las 24hs.',
          'Comunicate por WhatsApp o al 0810.666.0066 de lunes a viernes de 8 a 20hs.',
          'Descargá y completá el formulario de denuncia de siniestro, firmalo y envialo por mail a: denuncias@hipotecarioseguros.com.ar',
        ],
      },
      {
        type: 'subheading',
        text: '¿Quién pueden denunciar un siniestro?',
      },
      {
        type: 'paragraph',
        text: 'El asegurado, sus beneficiarios y cualquier persona ligada directamente al titular si éste estuviera, por caso de fuerza mayor, imposibilitado de hacerla.',
      },
      {
        type: 'subheading',
        text: '¿Qué pasa si se produce un siniestro estando impago el premio de la póliza?',
      },
      {
        type: 'paragraph',
        text: 'La cobertura se suspende en forma automática desde la hora 24 del día del vencimiento impago. Verificá en tu póliza la cláusula de cobranza, a fin de evitar un rechazo por falta de pago.',
      },
    ],
  },
  {
    eventKey: '3',
    question: 'Contacto',
    answer: [
      {
        type: 'paragraph',
        text: 'En el caso que tengas dudas comunicate con nosotros y te ayudamos a elegir la mejor opción para vos.',
      },
      {
        type: 'subheading',
        text: 'Venta telefónica',
      },
      {
        type: 'paragraph',
        text: '0810-666-0101',
      },
      {
        type: 'paragraph',
        text: 'De lunes a viernes de 9:00 a 21:00 hs',
      },
      {
        type: 'subheading',
        text: 'Atención al cliente',
      },
      {
        type: 'paragraph',
        text: '0810-666-0101',
      },
      {
        type: 'paragraph',
        text: 'De lunes a viernes de 8:00 a 20:00 hs',
      },
      {
        type: 'subheading',
        text: 'Escribinos',
      },
      {
        type: 'paragraph',
        text: 'consultas@hipotecarioseguros.com.ar',
      },
    ],
  },
];

type AccordionSelectKey = string | string[] | null | undefined;

export const Faq = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const handleSelect = (key: AccordionSelectKey) => {
    if (typeof key === 'string') {
      setActiveKey(key === activeKey ? null : key);
    } else {
      setActiveKey(null);
    }
  };

  return (
    <Container className={styles.faqSection}>
      <h2 className={styles.mainTitle}>Preguntas Frecuentes</h2>
      <p className={styles.subTitle}>¿Te quedaron preguntas sobre el seguro de salud?</p>
      <Accordion activeKey={activeKey} onSelect={handleSelect}>
        {faqData.map((item) => {
          const isOpen = activeKey === item.eventKey;
          return (
            <Accordion.Item key={item.eventKey} eventKey={item.eventKey} className={styles.accordionItem}>
              <Accordion.Header>
                <div className={styles.faqButtonContent}>
                  <span>{item.question}</span>
                  <FontAwesomeIcon
                    icon={isOpen ? faChevronDown : faChevronRight}
                    className={styles.toggleIcon}
                  />
                </div>
              </Accordion.Header>
              <Accordion.Body className={styles.accordionBody}>
                {item.answer.map((block, index) => {
                  switch (block.type) {
                    case 'subheading':
                      return <h5 key={index} className={styles.answerSubheading}>{block.text}</h5>;
                    case 'paragraph':
                      return <p key={index} className={styles.answerParagraph}>{block.text}</p>;
                    case 'list':
                      return (
                        <ul key={index} className={styles.answerList}>
                          {block.items?.map((listItem, i) => <li key={i}>{listItem}</li>)}
                        </ul>
                      );
                    case 'ordered-list':
                      return (
                        <ol key={index} className={styles.answerList}>
                          {block.items?.map((listItem, i) => <li key={i}>{listItem}</li>)}
                        </ol>
                      );
                    default:
                      return null;
                  }
                })}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </Container>
  );
};