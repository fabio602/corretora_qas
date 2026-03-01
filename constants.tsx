
import React from 'react';
import {
  ShieldCheck,
  Gavel,
  Building2,
  Globe,
  HardHat,
  FileCheck2,
  TrendingUp,
  Award,
  Users,
  Clock,
  Smartphone,
  Star,
  Wifi
} from 'lucide-react';
import { ServiceItem } from './types';

export const COLORS = {
  navy: '#1a2b3c',
  gold: '#e2b49a',
  navyDark: '#0f1a24'
};

export const CONTACT_INFO = {
  phone: '+55 (15) 99861 8659',
  email: 'fabio@fegsegurogarantia.com.br',
  address: {
    street: '',
    city: 'Boituva - SP'
  }
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/fg_segurogarantia?igsh=ODhmc2F5MnhpMTRs&utm_source=qr',
  linkedin: 'https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A107618467&keywords=f%20%26%20g%20corretora%20de%20seguros&origin=RICH_QUERY_SUGGESTION&position=1&searchId=2c7d0511-e4cb-4a8b-bfe9-7cbb2e1e1c48&sid=sT4&spellCorrectionEnabled=false',
  facebook: '#'
};

export const SERVICES: ServiceItem[] = [
  {
    title: 'Garantia Licitante',
    description: 'Essencial para empresas que participam de concorrências públicas ou privadas, garantindo a assinatura do contrato.',
    icon: <FileCheck2 className="w-8 h-8" />,
    formFields: [
      { name: 'CNPJ', label: 'Seu CNPJ', type: 'text', placeholder: 'Ex: 00.000.000/0001-00', required: true },
      { name: 'Numero_Edital', label: 'Número do edital / pregão', type: 'text', placeholder: 'Ex: Pregão 001/2025' },
      { name: 'Valor_Contrato', label: 'Valor estimado do contrato (R$)', type: 'text', placeholder: 'Ex: 500.000,00' },
    ]
  },
  {
    title: 'Garantia Executante',
    description: 'Assegura o cumprimento integral das obrigações contratuais de construção, fornecimento ou prestação de serviços.',
    icon: <HardHat className="w-8 h-8" />,
    formFields: [
      { name: 'CNPJ', label: 'Seu CNPJ', type: 'text', placeholder: 'Ex: 00.000.000/0001-00', required: true },
      { name: 'Tomador_Servico', label: 'Tomador / Contratante', type: 'text', placeholder: 'Nome da empresa contratante', required: true },
      { name: 'Objeto_Contrato', label: 'Objeto do contrato', type: 'text', placeholder: 'Ex: Construção civil, fornecimento...' },
      { name: 'Valor_Garantia', label: 'Valor da garantia (R$)', type: 'text', placeholder: 'Ex: 100.000,00' },
      { name: 'Prazo_Contrato', label: 'Prazo do contrato', type: 'text', placeholder: 'Ex: 12 meses' },
    ]
  },
  {
    title: 'Garantia Judicial',
    description: 'Substitui depósitos recursais ou cauções em processos judiciais, preservando o fluxo de caixa da sua empresa.',
    icon: <Gavel className="w-8 h-8" />,
    formFields: [
      { name: 'CNPJ_Tomador', label: 'CNPJ do Tomador', type: 'text', placeholder: 'Ex: 00.000.000/0001-00', required: true },
      { name: 'Numero_Processo', label: 'Número do processo', type: 'text', placeholder: 'Ex: 1234567-89.2024.8.26.0001' },
      { name: 'Vara_Tribunal', label: 'Vara / Tribunal', type: 'text', placeholder: 'Ex: 3ª Vara Cível de Sorocaba' },
      { name: 'Valor_Deposito', label: 'Valor do depósito a substituir (R$)', type: 'text', placeholder: 'Ex: 80.000,00' },
    ]
  },
  {
    title: 'Garantia Imobiliária',
    description: 'Garante a entrega de unidades habitacionais ou comerciais em regimes de incorporação imobiliária.',
    icon: <Building2 className="w-8 h-8" />,
    formFields: [
      { name: 'Nome_Empreendimento', label: 'Nome do empreendimento', type: 'text', placeholder: 'Ex: Residencial Parque Verde', required: true },
      { name: 'Numero_Unidades', label: 'Quantidade de unidades', type: 'number', placeholder: 'Ex: 50' },
      { name: 'Valor_Global', label: 'Valor global do empreendimento (R$)', type: 'text', placeholder: 'Ex: 5.000.000,00' },
    ]
  },
  {
    title: 'Garantia Aduaneira',
    description: 'Assegura o pagamento de tributos em operações de importação e exportação sob regimes especiais.',
    icon: <Globe className="w-8 h-8" />,
    formFields: [
      { name: 'Regime_Especial', label: 'Regime aduaneiro especial', type: 'text', placeholder: 'Ex: Drawback, Recof, Admissão temporária', required: true },
      { name: 'CNPJ_Empresa', label: 'CNPJ da empresa', type: 'text', placeholder: 'Ex: 00.000.000/0001-00' },
      { name: 'Valor_Garantia', label: 'Valor da garantia necessária (R$)', type: 'text', placeholder: 'Ex: 200.000,00' },
    ]
  },
  {
    title: 'Depósito Recursal',
    description: 'Substitui os depósitos recursais e te dá liberdade para discurtir sua ação em juízo com tranquilidade.',
    icon: <ShieldCheck className="w-8 h-8" />,
    formFields: [
      { name: 'CNPJ_Tomador', label: 'CNPJ do Tomador', type: 'text', placeholder: 'Ex: 00.000.000/0001-00', required: true },
      { name: 'Numero_Processo', label: 'Número do processo trabalhista', type: 'text', placeholder: 'Ex: 0001234-56.2024.5.15.0001' },
      { name: 'Tribunal', label: 'Tribunal Regional do Trabalho (TRT)', type: 'text', placeholder: 'Ex: TRT 15ª Região' },
      { name: 'Valor_Deposito', label: 'Valor do depósito recursal (R$)', type: 'text', placeholder: 'Ex: 15.000,00' },
    ]
  },
  {
    title: 'Seguro Cyber',
    description: 'Proteção completa contra ataques hackers, ransomware, vazamento de dados e multas da LGPD. Blindagem digital 24h para sua empresa.',
    icon: <Wifi className="w-8 h-8" />,
    link: '/seguro-cyber'
  }
];


export const STATS = [
  { label: 'Resposta Imediata', value: '2h', icon: <Clock /> },
  { label: 'Seguradoras Líderes', value: '25+', icon: <Users /> },
  { label: 'Processos Digitais', value: '100%', icon: <Smartphone /> },
  { label: 'Satisfação', value: '4.9★', icon: <Star /> }
];

export const TESTIMONIALS = [
  {
    name: 'Roberto Silva',
    role: 'Diretor Financeiro',
    company: 'Construtora Horizonte',
    content: 'A F&G transformou nossa gestão de garantias. O atendimento é ágil e as taxas são as melhores do mercado.'
  },
  {
    name: 'Ana Paula Mendes',
    role: 'CEO',
    company: 'Logística Brasil S.A.',
    content: 'O Seguro Garantia Judicial da F&G nos permitiu manter investimentos críticos sem comprometer o caixa.'
  },
  {
    name: 'Carlos Eduardo',
    role: 'Gerente Jurídico',
    company: 'Tech Solutions',
    content: 'Profissionalismo e seriedade. Recomendo a F&G para qualquer empresa que busque segurança contratual.'
  }
];
