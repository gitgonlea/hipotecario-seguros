"use client";

import React, { useState, useEffect, useCallback  } from 'react';
import { Row, Col, Form, Button, InputGroup  } from 'react-bootstrap';
import styles from '../SaludIntegral/SaludIntegral.module.css';

interface FormData {
  name: string;
  email: string;
  areaCode: string;
  phone: string;
}


interface FormErrors {
  name?: string;
  email?: string;
  areaCode?: string;
  phone?: string;
}

export const InsuranceForm = () => {
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    areaCode: '',
    phone: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const [isFormValid, setIsFormValid] = useState(false);

  const validate = useCallback(() => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) newErrors.name = "Campo requerido";

    // Email validation
    if (!formData.email) {
      newErrors.email = "Campo requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "El e-mail no es válido";
    }

    // ... (other validation logic is unchanged) ...
    const phoneNum = formData.phone.trim();
    if (!phoneNum) {
      newErrors.phone = "Campo requerido";
    } else if (phoneNum.length < 6 || phoneNum.length > 8) {
      newErrors.phone = "El número debe tener entre 6 y 8 dígitos";
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [formData]); // The function itself now depends on `formData`

  // 3. Update the useEffect hook
  useEffect(() => {
    validate();
  }, [validate]); // Now we correctly list `validate` as a dependency

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setTouched({
      ...touched,
      [id]: true,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ name: true, email: true, areaCode: true, phone: true });
    
    validate();

    if (isFormValid) {
      console.log("Form submitted!", { ...formData, phone: `15${formData.phone}` });
      alert("Formulario enviado con éxito!");
    } else {
      console.log("Form is invalid.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>Simulá tu seguro de salud integral</h3>
      
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="name">
              <Form.Label>Nombre *</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="juan" 
                className={styles.customInput}
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.name && !!errors.name}
              />
              <div className={styles.errorMessage}>
                {touched.name && errors.name}
              </div>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>E-mail *</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="juan@gmail.com" 
                className={styles.customInput}
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.email && !!errors.email}
              />
              <div className={styles.errorMessage}>
                {touched.email && errors.email}
              </div>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={5} md={4}>
            <Form.Group controlId="areaCode">
              <Form.Label>Código de área *</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="0" 
                className={styles.customInput}
                value={formData.areaCode}
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={touched.areaCode && !!errors.areaCode}
              />
              <div className={styles.errorMessage}>
                {touched.areaCode && errors.areaCode}
              </div>
            </Form.Group>
          </Col>
          <Col xs={7} md={8}>
            <Form.Group controlId="phone">
              <Form.Label>Teléfono *</Form.Label>
              <InputGroup>
                <InputGroup.Text className={styles.customInputPrefix}>15</InputGroup.Text>
                <Form.Control 
                  type="text" 
                  className={styles.customInput}
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.phone && !!errors.phone}
                  minLength={6}
                  maxLength={8}
                />
              </InputGroup>
              <div className={styles.errorMessage}>
                {touched.phone && errors.phone}
              </div>
            </Form.Group>
          </Col>
        </Row>

        <div className={`${styles.centerContent} mt-4`}>
          <Button 
            type="submit" 
            className={styles.submitButton}
            disabled={!isFormValid}
          >
            Simular
          </Button>
        </div>
        
        <p className={styles.requiredNotice}>*Datos obligatorios</p>
      </Form>
    </div>
  );
};