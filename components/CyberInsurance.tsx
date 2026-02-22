
import React, { useState, useEffect } from 'react';
import {
    Shield, AlertTriangle, Database, TrendingDown, Megaphone,
    Gavel, Lock, ChevronDown, CheckCircle, ExternalLink, Wifi,
    Activity, Heart, Scale, ShoppingBag, FileText
} from 'lucide-react';
import VulnerabilityChecklist from './VulnerabilityChecklist';

const CyberInsurance: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [attackCount, setAttackCount] = useState(0);

    // Live attack counter — 1 attack every 39 seconds globally
    useEffect(() => {
        const startCount = Math.floor(Date.now() / 39000);
        setAttackCount(startCount % 100000);
        const interval = setInterval(() => {
            setAttackCount((prev) => prev + 1);
        }, 39000);
        return () => clearInterval(interval);
    }, []);

    const coverages = [
        {
            icon: <Lock className="w-8 h-8" />,
            title: 'Extorsão por Ransomware',
            desc: 'Pagamento e negociação com criminosos que sequestram seus dados e sistemas, impedindo suas operações.',
        },
        {
            icon: <Database className="w-8 h-8" />,
            title: 'Restauração de Dados',
            desc: 'Custos de recuperação, perícia digital forense e restauração dos sistemas comprometidos pelo ataque.',
        },
        {
            icon: <TrendingDown className="w-8 h-8" />,
            title: 'Lucros Cessantes',
            desc: 'Cobertura da receita perdida durante a paralisação das operações causada pelo incidente cibernético.',
        },
        {
            icon: <Megaphone className="w-8 h-8" />,
            title: 'Danos à Reputação',
            desc: 'Assessoria de imprensa especializada e ações de gestão de crise para proteger sua imagem no mercado.',
        },
        {
            icon: <Gavel className="w-8 h-8" />,
            title: 'Defesa Jurídica',
            desc: 'Cobertura de honorários advocatícios, indenizações a terceiros e multas de órgãos regulatórios.',
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: 'Multas LGPD',
            desc: 'Proteção financeira contra sanções da ANPD por vazamento de dados — até 2% do faturamento anual.',
        },
    ];

    const sectors = [
        {
            icon: <Heart className="w-6 h-6" />,
            sector: 'Clínicas e Hospitais',
            risk: 'Dados de saúde (prontuários) são os mais valiosos no mercado negro.',
            solution: 'Cobertura prioritária para notificação de pacientes e multas da ANS/ANPD.',
        },
        {
            icon: <Scale className="w-6 h-6" />,
            sector: 'Advocacia e Contabilidade',
            risk: 'Escritórios possuem dados financeiros e segredos de centenas de clientes.',
            solution: 'Proteção de sigilo profissional e cobertura de responsabilidade civil digital.',
        },
        {
            icon: <ShoppingBag className="w-6 h-6" />,
            sector: 'E-commerce e Varejo',
            risk: 'Dados de cartão, endereços e histórico de compras de milhares de clientes.',
            solution: 'Cobertura para fraudes em pagamentos online e notificação de consumidores.',
        },
    ];

    const faqs = [
        {
            q: 'Minha empresa é pequena demais para ser alvo de hackers.',
            a: '43% de todos os ataques cibernéticos visam pequenas e médias empresas — justamente por terem menos proteção. Hackers usam botnets automatizados que varrem a internet buscando vulnerabilidades. Tamanho não importa.',
        },
        {
            q: 'Já tenho antivírus e firewall. Preciso de seguro?',
            a: 'Ferramentas técnicas reduzem o risco, mas não eliminam. 95% das violações de dados envolvem erro humano (phishing, senhas fracas). O seguro cobre o custo financeiro do que acontece APÓS a falha de segurança.',
        },
        {
            q: 'Quanto custa um Seguro Cyber para PMEs?',
            a: 'Apólices para pequenas empresas partem de R$ 1.500/ano — menos de R$ 4,50 por dia. Para médias empresas, entre R$ 5.000 e R$ 20.000/ano. O custo médio de um incidente no Brasil é de R$ 4,2 milhões.',
        },
        {
            q: 'O que acontece se eu não tiver o seguro e sofrer um ataque?',
            a: 'Sem cobertura, você arca com 100% dos custos: recuperação de sistemas (média R$ 300k), multas LGPD (até 2% do faturamento), indenizações a clientes, perda de receita durante paralisação e danos à marca.',
        },
        {
            q: 'A LGPD realmente se aplica à minha empresa?',
            a: 'Sim. A LGPD se aplica a qualquer pessoa física ou jurídica que processe dados pessoais no Brasil, independente do porte. Desde 2021, a ANPD já aplicou multas e advertências a empresas de todos os tamanhos.',
        },
    ];

    return (
        <div className="bg-[#0a0f16] min-h-screen pt-24">
            {/* ══════ HERO SECTION ══════ */}
            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-red-900/5 blur-[150px]" />
                {/* Animated digital rain effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute top-0 text-xs font-mono text-red-400/10 animate-pulse"
                            style={{
                                left: `${10 + i * 12}%`,
                                animationDelay: `${i * 0.7}s`,
                                fontSize: '10px',
                                lineHeight: '1.8',
                            }}
                        >
                            {['01001000', '01000001', '01000011', '01001011', '01000101', '01010010', 'ERROR', 'ACCESS'][i]}
                        </div>
                    ))}
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        {/* Live counter badge */}
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                            </span>
                            <span className="text-red-400 text-xs font-bold uppercase tracking-widest">
                                {attackCount.toLocaleString('pt-BR')}+ ataques detectados hoje no mundo
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                            O Brasil é o <span className="text-red-400">2º maior alvo</span>
                            <br />
                            <span className="text-fg-gold italic font-serif">cibernético do mundo.</span>
                            <br />
                            <span className="text-3xl md:text-4xl text-slate-300 font-light">Sua empresa está protegida?</span>
                        </h1>

                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-4">
                            <strong className="text-white">Seus dados são valiosos — e vulneráveis.</strong> Um ataque hacker acontece
                            a cada 39 segundos. Não espere a paralisação das suas operações para descobrir o custo de um vazamento.
                        </p>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12">
                            O Seguro Cyber oferece <strong className="text-fg-gold">blindagem digital e suporte técnico 24h</strong> para
                            sua empresa seguir crescendo com segurança.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="https://wa.me/5515998618659?text=Ol%C3%A1!%20Quero%20agendar%20uma%20consultoria%20gratuita%20sobre%20Seguro%20Cyber."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group bg-fg-gold text-fg-navy px-10 py-5 rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-3 justify-center"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                <Shield className="w-5 h-5" />
                                Agendar Consultoria Gratuita
                            </a>
                            <a
                                href="#diagnostico"
                                className="px-10 py-5 rounded-xl border border-white/20 text-white font-bold text-lg hover:bg-white/5 transition-all inline-flex items-center gap-3 justify-center"
                            >
                                <Activity className="w-5 h-5 text-fg-gold" />
                                Receber Diagnóstico de Risco
                            </a>
                        </div>

                        {/* Urgency stats */}
                        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                            {[
                                { value: '39s', label: 'Entre cada ataque' },
                                { value: '2%', label: 'Multa LGPD máxima' },
                                { value: '43%', label: 'Ataques a PMEs' },
                                { value: 'R$ 4,2M', label: 'Custo médio de incidente' },
                            ].map((stat, i) => (
                                <div key={i} className="glass-card rounded-2xl p-4 border-white/5">
                                    <div className="text-2xl font-bold text-fg-gold">{stat.value}</div>
                                    <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════ LGPD EDUCATION SECTION ══════ */}
            <section className="py-24 bg-[#080d13] relative overflow-hidden">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="reveal-left">
                                <div className="inline-block px-4 py-1 rounded-full border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
                                    LGPD em Vigor
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                    A Lei que pode custar
                                    <br />
                                    <span className="text-amber-400 italic font-serif">até 2% do seu faturamento</span>
                                </h2>
                                <p className="text-slate-400 text-lg leading-relaxed mb-6">
                                    A Lei Geral de Proteção de Dados (LGPD) obriga toda empresa que coleta dados de brasileiros a manter padrões rígidos de segurança. Em caso de vazamento, a ANPD pode:
                                </p>
                                <div className="space-y-4">
                                    {[
                                        'Aplicar multa de até 2% do faturamento bruto anual',
                                        'Bloquear ou eliminar banco de dados da empresa',
                                        'Suspender parcialmente ou totalmente as atividades',
                                        'Publicizar a infração — dano reputacional público',
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                                            <span className="text-slate-300 text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="reveal-right">
                                <div className="glass-card rounded-3xl p-8 border-amber-500/20 border">
                                    <div className="w-14 h-14 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
                                        <Shield className="w-8 h-8 text-amber-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Como o Seguro Cyber protege você</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                        Além de cobrir as multas, o seguro garante acesso a consultores especializados em LGPD, que orientam as notificações obrigatórias aos titulares e à ANPD, reduzindo drasticamente o valor das sanções.
                                    </p>
                                    <div className="space-y-3">
                                        {[
                                            'Cobertura de multas regulatórias',
                                            'Advogados especializados em LGPD',
                                            'Suporte para notificação aos titulares',
                                            'Gestão de crise e comunicação',
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 text-sm">
                                                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                                                <span className="text-slate-300">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════ COVERAGES GRID ══════ */}
            <section className="py-24 bg-[#0a0f16]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 reveal">
                        <div className="inline-block px-4 py-1 rounded-full border border-fg-gold/30 text-fg-gold text-xs font-bold uppercase tracking-widest mb-4">
                            Coberturas
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            O que o Seguro Cyber <span className="text-fg-gold italic font-serif">cobre</span>
                        </h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Uma apólice abrangente que protege sua empresa em todas as dimensões de um incidente cibernético.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {coverages.map((cov, i) => (
                            <div
                                key={i}
                                className="group glass-card rounded-3xl p-8 border-white/5 hover:border-fg-gold/30 transition-all duration-300 hover:-translate-y-1 reveal"
                            >
                                <div className="w-14 h-14 bg-fg-gold/10 rounded-2xl flex items-center justify-center text-fg-gold mb-6 group-hover:bg-fg-gold/20 transition-colors">
                                    {cov.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3">{cov.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{cov.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════ SOCIAL PROOF / CASE STUDIES ══════ */}
            <section className="py-24 bg-[#080d13]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 reveal">
                        <div className="inline-block px-4 py-1 rounded-full border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
                            Casos Reais
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Isso acontece com empresas <span className="text-red-400 italic font-serif">como a sua</span>
                        </h2>
                        <p className="text-red-300/70 text-sm font-medium">
                            ⚠ 43% dos ataques cibernéticos são direcionados a pequenas e médias empresas
                        </p>
                    </div>

                    {/* Featured case study */}
                    <div className="max-w-4xl mx-auto mb-16 reveal">
                        <div className="glass-card rounded-3xl p-8 md:p-12 border border-red-500/15 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-[60px]" />
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-1 bg-red-500/10 rounded-full border border-red-500/20 mb-6">
                                    <AlertTriangle className="w-4 h-4 text-red-400" />
                                    <span className="text-red-400 text-xs font-bold uppercase tracking-widest">Caso Documentado</span>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    A contadora que perdeu 12 anos de dados em uma noite
                                </h3>
                                <p className="text-slate-400 leading-relaxed mb-4">
                                    Um escritório de contabilidade com 8 colaboradores foi vítima de um ataque de ransomware por e-mail de phishing. Em menos de 6 horas, todos os dados de 340 clientes foram criptografados. Sem backup externo funcional, os criminosos exigiram R$ 85.000 em criptomoedas. O escritório ficou paralisado por 3 semanas, perdeu 28% dos clientes e gastou R$ 180.000 entre o pagamento, a recuperação parcial e honorários jurídicos.
                                </p>
                                <p className="text-fg-gold font-medium text-sm">
                                    ✓ Com o Seguro Cyber, todo esse custo seria coberto pela apólice — incluindo o pagamento aos criminosos e a perda de receita durante a paralisação.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sector-specific blocks */}
                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {sectors.map((sec, i) => (
                            <div key={i} className="glass-card rounded-3xl p-6 border-white/5 hover:border-fg-gold/20 transition-all reveal">
                                <div className="w-12 h-12 bg-fg-gold/10 rounded-xl flex items-center justify-center text-fg-gold mb-4">
                                    {sec.icon}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{sec.sector}</h3>
                                <div className="mb-3">
                                    <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Risco principal</span>
                                    <p className="text-slate-400 text-sm mt-1">{sec.risk}</p>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-green-400 uppercase tracking-widest">Nossa cobertura</span>
                                    <p className="text-slate-400 text-sm mt-1">{sec.solution}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════ VULNERABILITY CHECKLIST (LEAD MAGNET) ══════ */}
            <div id="diagnostico">
                <VulnerabilityChecklist />
            </div>

            {/* ══════ FAQ ══════ */}
            <section className="py-24 bg-[#080d13]">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16 reveal">
                            <div className="inline-block px-4 py-1 rounded-full border border-fg-gold/30 text-fg-gold text-xs font-bold uppercase tracking-widest mb-4">
                                FAQ
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Perguntas <span className="text-fg-gold italic font-serif">frequentes</span>
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className={`glass-card rounded-2xl border transition-all duration-300 ${openFaq === i ? 'border-fg-gold/30' : 'border-white/5'
                                        }`}
                                >
                                    <button
                                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    >
                                        <span className="font-semibold text-white text-sm">{faq.q}</span>
                                        <ChevronDown
                                            className={`w-5 h-5 text-fg-gold flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-6' : 'max-h-0'
                                            }`}
                                    >
                                        <p className="px-6 text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ══════ FINAL CTA ══════ */}
            <section className="py-24 bg-[#0a0f16] relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-fg-gold/8 rounded-full blur-[120px]" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="max-w-2xl mx-auto reveal">
                        <div className="w-16 h-16 bg-fg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                            <Shield className="w-8 h-8 text-fg-gold" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            Proteja sua empresa antes
                            <br />
                            <span className="text-fg-gold italic font-serif">que seja tarde</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            Consultoria gratuita de 30 minutos com nosso especialista em Seguro Cyber. Sem compromisso, sem jargões técnicos — apenas clareza sobre os riscos e como mitigá-los.
                        </p>
                        <a
                            href="https://wa.me/5515998618659?text=Ol%C3%A1!%20Quero%20agendar%20uma%20consultoria%20gratuita%20sobre%20o%20Seguro%20Cyber%20para%20minha%20empresa."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group bg-fg-gold text-fg-navy px-12 py-5 rounded-xl font-bold text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-3"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            <Shield className="w-6 h-6" />
                            Agendar Consultoria Gratuita
                        </a>
                        <p className="text-slate-600 text-xs mt-6">
                            ✓ Sem custos &nbsp;✓ Sem pressão &nbsp;✓ Resultado em 24h
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CyberInsurance;
