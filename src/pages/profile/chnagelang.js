import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        console.log(`Changing language to: ${lng}`); // Log language change to console
        i18n.changeLanguage(lng);
    };

    return (
        <div>
            <h1>{t('welcome')}</h1>
            <h1>{t('Invite')}</h1>
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('hi')}>Hindi</button>
            <button onClick={() => changeLanguage('vn')}>Vietnamese</button>
        </div>
    );
};
