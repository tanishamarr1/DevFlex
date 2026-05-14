import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ReferralPage() {
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        const button = e.target.querySelector('button');
        const originalText = button.textContent;
        button.textContent = t('referral.form.success');
        button.style.background = '#10b981';
        button.disabled = true;

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
            button.disabled = false;
            e.target.reset();
        }, 3000);
    };

    return (
        <>
            <Navbar />
            <main>
                <section id="contacto" className="contact" style={{ paddingTop: '10rem', minHeight: 'calc(100vh - 150px)' }}>
                    <div className="contact-container">
                        <h2 className="section-title">{t('referral.title')}</h2>
                        <p className="section-subtitle">{t('referral.subtitle')}</p>

                        <form 
                            className="contact-form animate-on-scroll visible" 
                            action="https://formsubmit.co/enmanuel02bnunez@gmail.com"
                            method="POST" 
                            target="hidden_iframe"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="_subject" value="New Referral Submission - DevFlex Solutions" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="text" name="_honey" style={{ display: 'none' }} />

                            <div className="form-group">
                                <label htmlFor="nombre">{t('referral.form.your_name')}</label>
                                <input type="text" id="nombre" name="nombre" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">{t('referral.form.your_email')}</label>
                                <input type="email" id="email" name="email" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="cliente">{t('referral.form.client_name')}</label>
                                <input type="text" id="cliente" name="cliente" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="contacto_cliente">{t('referral.form.client_contact')}</label>
                                <input type="text" id="contacto_cliente" name="contacto_cliente" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mensaje">{t('referral.form.project_details')}</label>
                                <textarea id="mensaje" name="mensaje" rows="6" required placeholder={t('referral.form.project_placeholder')}></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">{t('referral.form.submit')}</button>
                        </form>
                        <iframe name="hidden_iframe" style={{ display: 'none' }}></iframe>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
