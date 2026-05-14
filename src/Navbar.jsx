import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, targetId) => {
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            setIsMenuOpen(false);
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            // If the target doesn't exist (we are on another page), 
            // let the default link behavior take us to the home page with the hash
            setIsMenuOpen(false);
        }
    };

    const toggleLanguage = () => {
        const newLang = i18n.language.startsWith('en') ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <header style={{ background: isScrolled ? 'rgba(0, 0, 0, 0.98)' : 'rgba(0, 0, 0, 0.95)' }}>
            <nav>
                <div className="logo"><a href="/index.html#inicio" onClick={(e) => handleNavClick(e, '#inicio')}>DevFlex</a></div>
                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><a href="/index.html#inicio" onClick={(e) => handleNavClick(e, '#inicio')}>{t('nav.home')}</a></li>
                    <li><a href="/index.html#productos" onClick={(e) => handleNavClick(e, '#productos')}>{t('nav.products')}</a></li>
                    <li><a href="/index.html#servicios" onClick={(e) => handleNavClick(e, '#servicios')}>{t('nav.services')}</a></li>
                    <li><a href="/index.html#nosotros" onClick={(e) => handleNavClick(e, '#nosotros')}>{t('nav.about')}</a></li>
                    <li><a href="/contact.html">{t('nav.contact')}</a></li>
                    <li>
                        <button 
                            onClick={toggleLanguage} 
                            className="btn-lang"
                            style={{ 
                                background: 'transparent', 
                                border: '1px solid var(--primary-color)', 
                                color: 'var(--text-primary)',
                                padding: '0.3rem 0.6rem',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                marginLeft: '1rem'
                            }}
                        >
                            {i18n.language.startsWith('en') ? 'ES' : 'EN'}
                        </button>
                    </li>
                </ul>
                <div 
                    className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
}