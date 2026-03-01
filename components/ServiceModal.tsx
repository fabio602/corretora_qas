
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Send, CheckCircle } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
    service: ServiceItem;
    onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKey);
        // Lock body scroll while keeping scroll position
        const scrollY = window.scrollY;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = '100%';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, scrollY);
        };
    }, [onClose]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        fetch('https://formsubmit.co/ajax/joaovictors@gmail.com', {
            method: 'POST',
            body: data,
        })
            .then((res) => res.json())
            .then(() => setSubmitted(true))
            .catch(() => setSubmitted(true));
    };

    const modal = (
        <>
            {/* Backdrop */}
            <div
                onClick={onClose}
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: 99998,
                    backgroundColor: 'rgba(0,0,0,0.78)',
                    backdropFilter: 'blur(4px)',
                }}
            />

            {/* Modal container — centered in viewport via transform */}
            <div
                role="dialog"
                aria-modal="true"
                onClick={(e) => e.stopPropagation()}
                style={{
                    position: 'fixed',
                    zIndex: 99999,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 'calc(100vw - 32px)',
                    maxWidth: '520px',
                    maxHeight: '88vh',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '24px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 32px 64px rgba(0,0,0,0.6)',
                    background: '#0d141f',
                    overflow: 'hidden',
                }}
            >
                {/* ── Header (never scrolls) ── */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px 24px',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    flexShrink: 0,
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{
                            width: '44px', height: '44px', flexShrink: 0,
                            background: 'rgba(226,180,154,0.12)',
                            borderRadius: '14px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: '#e2b49a',
                        }}>
                            {service.icon}
                        </div>
                        <div>
                            <p style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#e2b49a', margin: '0 0 2px' }}>
                                Solicitar Análise
                            </p>
                            <h2 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', margin: 0 }}>
                                {service.title}
                            </h2>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            width: '36px', height: '36px', flexShrink: 0,
                            borderRadius: '10px',
                            background: 'rgba(255,255,255,0.06)',
                            border: 'none', cursor: 'pointer', color: '#94a3b8',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                        aria-label="Fechar"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* ── Scrollable body ── */}
                <div style={{ overflowY: 'auto', padding: '24px', flex: 1 }}>
                    {submitted ? (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '32px 0', gap: '16px' }}>
                            <div style={{ width: '64px', height: '64px', background: 'rgba(74,222,128,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CheckCircle size={32} color="#4ade80" />
                            </div>
                            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', margin: 0 }}>Solicitação enviada!</h3>
                            <p style={{ color: '#94a3b8', fontSize: '14px', maxWidth: '260px', margin: 0 }}>
                                Recebemos sua mensagem sobre <strong style={{ color: '#fff' }}>{service.title}</strong>. Nossa equipe entrará em contato em breve.
                            </p>
                            <button onClick={onClose} style={{ marginTop: '8px', padding: '12px 32px', background: '#e2b49a', color: '#1a2b3c', fontWeight: 700, border: 'none', borderRadius: '12px', cursor: 'pointer', fontSize: '15px' }}>
                                Fechar
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <input type="hidden" name="_subject" value={`Solicitação de Análise - ${service.title}`} />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_cc" value="fabio@fegsegurogarantia.com.br" />
                            <input type="hidden" name="Modalidade" value={service.title} />

                            <div>
                                <label style={labelStyle}>Nome completo *</label>
                                <input name="Nome" type="text" required placeholder="Seu nome completo" style={inputStyle} />
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                                <div>
                                    <label style={labelStyle}>E-mail *</label>
                                    <input name="Email" type="email" required placeholder="seu@email.com" style={inputStyle} />
                                </div>
                                <div>
                                    <label style={labelStyle}>Telefone *</label>
                                    <input name="Telefone" type="tel" required placeholder="(99) 99999-9999" style={inputStyle} onChange={(e) => {
                                        let v = e.target.value.replace(/\D/g, '');
                                        if (v.length > 11) v = v.slice(0, 11);
                                        v = v.replace(/^(\d{2})(\d)/g, '($1) $2');
                                        v = v.replace(/(\d)(\d{4})$/, '$1-$2');
                                        e.target.value = v;
                                    }} />
                                </div>
                            </div>

                            {service.formFields?.map((field) => {
                                let handleChange = undefined;
                                if (field.name.includes('CNPJ')) {
                                    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                                        let v = e.target.value.replace(/\D/g, '');
                                        if (v.length > 14) v = v.slice(0, 14);
                                        v = v.replace(/^(\d{2})(\d)/, '$1.$2');
                                        v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3');
                                        v = v.replace(/\.(\d{3})(\d)/, '.$1/$2');
                                        v = v.replace(/(\d{4})(\d)/, '$1-$2');
                                        e.target.value = v;
                                    };
                                } else if (field.name.includes('Valor')) {
                                    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                                        let v = e.target.value.replace(/\D/g, '');
                                        if (!v) {
                                            e.target.value = '';
                                            return;
                                        }
                                        const num = Number(v) / 100;
                                        e.target.value = num.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                                    };
                                }

                                return (
                                    <div key={field.name}>
                                        <label style={labelStyle}>{field.label}{field.required ? ' *' : ''}</label>
                                        {field.type === 'textarea' ? (
                                            <textarea name={field.name} placeholder={field.placeholder} rows={3} style={{ ...inputStyle, resize: 'none' }} />
                                        ) : (
                                            <input name={field.name} type={field.type} placeholder={field.placeholder} required={field.required} style={inputStyle} onChange={handleChange} />
                                        )}
                                    </div>
                                );
                            })}

                            <button type="submit" style={submitBtnStyle}>
                                <Send size={16} />
                                Enviar Solicitação
                            </button>
                            <p style={{ textAlign: 'center', color: '#475569', fontSize: '12px', margin: 0 }}>
                                Retornaremos em até 2 horas úteis.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </>
    );

    // Portal: renders directly into document.body, escaping any CSS transform context
    return createPortal(modal, document.body);
};

const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    color: '#64748b',
    marginBottom: '6px',
};

const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    padding: '12px 16px',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
};

const submitBtnStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    width: '100%',
    padding: '16px',
    background: '#e2b49a',
    color: '#1a2b3c',
    fontWeight: 700,
    fontSize: '16px',
    border: 'none',
    borderRadius: '14px',
    cursor: 'pointer',
    marginTop: '4px',
};

export default ServiceModal;
