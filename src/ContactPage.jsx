import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContactPage() {
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        const button = e.target.querySelector('button');
        const originalText = button.textContent;
        button.textContent = t('contact.form.success');
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
                        <h2 className="section-title">{t('contact.title')}</h2>
                        <p className="section-subtitle">{t('contact.subtitle')}</p>

                        <form 
                            className="contact-form animate-on-scroll visible" 
                            action="https://formsubmit.co/enmanuel02bnunez@gmail.com"
                            method="POST" 
                            target="hidden_iframe"
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="_subject" value="New Business Inquiry - DevFlex Solutions" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="text" name="_honey" style={{ display: 'none' }} />

                            <div className="form-group">
                                <label htmlFor="nombre">{t('contact.form.name')}</label>
                                <input type="text" id="nombre" name="nombre" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">{t('contact.form.email')}</label>
                                <input type="email" id="email" name="email" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="numero">{t('contact.form.phone')}</label>
                                <input type="tel" id="numero" name="numero" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="mensaje">{t('contact.form.message_label')}</label>
                                <textarea id="mensaje" name="mensaje" rows="6" required placeholder={t('contact.form.message_placeholder')}></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">{t('contact.form.submit')}</button>
                        </form>
                        <iframe name="hidden_iframe" style={{ display: 'none' }}></iframe>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
