import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer>
            <div className="social-links">
                <a href="https://instagram.com/devflex__" aria-label="Instagram"><img src="/assets/instagram.png" width="30px" alt="Instagram" /></a>
                <a href="https://www.linkedin.com/in/carlos-nu%C3%B1ez-b21421285/" aria-label="LinkedIn"><img src="/assets/linkedin.png" width="30px" alt="LinkedIn" /></a>
                <a href="https://github.com/srhustle" aria-label="GitHub"><img src="/assets/github.png" width="30px" alt="GitHub" /></a>
            </div>
            <p>&copy; 2025 DevFlex Solutions. {t('footer.rights')}</p>
        </footer>
    );
}