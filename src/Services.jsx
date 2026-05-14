import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AnimateOnScroll from './AnimateOnScroll';

export default function Services() {
    const { t } = useTranslation();
    const services = t('services.items', { returnObjects: true });

    return (
        <section id="servicios" className="services">
            <h2 className="section-title">{t('services.title')}</h2>
            <p className="section-subtitle">{t('services.subtitle')}</p>
            <div className="services-grid" id="services-grid">
                {Array.isArray(services) && services.map((service, index) => (
                    <AnimateOnScroll key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </AnimateOnScroll>
                ))}
            </div>
        </section>
    );
}