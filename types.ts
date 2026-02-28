
import React from 'react';

export interface ServiceFormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea';
  placeholder: string;
  required?: boolean;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  formFields?: ServiceFormField[];
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  company: string;
}

export enum InsuranceType {
  LICITANTE = 'Licitante',
  EXECUTANTE = 'Executante',
  JUDICIAL = 'Judicial',
  ADUANEIRO = 'Aduaneiro',
  IMOBILIARIO = 'Imobiliário',
  RETENCAO = 'Retenção de Pagamento'
}
