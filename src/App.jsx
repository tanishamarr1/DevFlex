import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';
import Products from './Products';
import Services from './Services';
import AnimateOnScroll from './AnimateOnScroll';

export default function App() {
    const { t } = useTranslation();

    return (
        <>
            <Navbar />
            
            <main>
                <section id="inicio" className="hero">
                    <div className="hero-content">
                        <h1>{t('hero.title')}</h1>
                        <h1>{t('hero.title2')}</h1>
                        <p>{t('hero.subtitle')}</p>
                        <div className="cta-buttons">
                            <a href="/contact.html" className="btn btn-primary">{t('hero.start')}</a>
                            <a href="#productos" className="btn btn-secondary">{t('hero.view_products')}</a>
                        </div>
                    </div>
                </section>

                <Products />
                <Services />

                <section id="nosotros" className="about">
                    <div className="about-container">
                        <AnimateOnScroll className="about-content">
                            <h2>{t('about.title')}</h2>
                            <p>{t('about.p1')}</p>
                            <p>{t('about.p2')}</p>
                            <a href="/contact.html" className="btn btn-primary">{t('about.cta')}</a>
                        </AnimateOnScroll>
                    </div>
                </section>

                <section className="cta-banner">
                    <AnimateOnScroll className="cta-banner-container cta-banner-primary">
                        <div className="cta-glow-primary"></div>
                        <h2>{t('cta.get_in_touch')}</h2>
                        <h3>{t('cta.want_to_work')}</h3>
                        <p>{t('cta.p_work')}</p>
                        <a href="/contact.html" className="btn btn-primary">{t('cta.get_started')} &rarr;</a>
                    </AnimateOnScroll>
                </section>

                <section className="cta-banner">
                    <AnimateOnScroll className="cta-banner-container cta-banner-secondary">
                        <div className="cta-glow-secondary"></div>
                        <h2>{t('cta.referral_program')}</h2>
                        <h3>{t('cta.turn_network')}</h3>
                        <p>{t('cta.p_referral')}</p>
                        <a href="/refercontact.html" className="btn btn-secondary">{t('cta.start_earning')} &rarr;</a>
                    </AnimateOnScroll>
                </section>
            </main>

            <Footer />
        </>
    );
}