import React, {useCallback, useEffect, useState} from 'react';
import {Header} from './components/Header';
import {Helmet} from 'react-helmet';

import {Hero} from './components/Hero';
import {Invite} from './components/Invite';
import {SaveTheDate} from './components/SaveTheDate';
import {Location} from './components/Location';
import {Accomodation} from './components/Accomodation';
import {RSVP} from './components/RSVP';
import {Whishes} from './components/Whishes';
import {Footer} from './components/Footer';
import {useTranslation} from 'react-i18next';

function useQuery()
{
    return new URLSearchParams(window.location.search);
}

function App()
{
    const {t, i18n} = useTranslation();
    const [translated, set_translated] = useState(false);
    const query = useQuery();
    const language = query.get('language');

    const translate = useCallback(async () =>
    {
        switch(language)
        {
            case 'en':
                await i18n.changeLanguage('en');
                break;
            default:
                await i18n.changeLanguage('it');
                break;
        }
        set_translated(true);
    }, [i18n, language, set_translated]);

    useEffect(() =>
    {
        if(!translated)
            translate();

    }, [translated, translate]);

    const sections = [
        {
            name: t('menu.home'),
            link: '#home',
        },
        {
            name: t('menu.location'),
            link: '#location',
        },
        {
            name: t('menu.accomodation'),
            link: '#accomodation',
        },
        {
            name: t('menu.rsvp'),
            link: '#rsvp',
        },
        {
            name: t('menu.whishes'),
            link: '#whishes',
        }
    ];

    return (<React.Fragment>
        <Helmet>
            <html lang='en' />
            <meta charSet='utf-8' />
            <title>Eleonora & Marco</title>
            <link rel='preconnect' href='https://fonts.gstatic.com' />
            <link href='https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&family=Libre+Baskerville:wght@400;700&display=swap' rel='stylesheet' />
        </Helmet>
        <React.Fragment>
            <Header links={sections} />
            <Hero />
            <Invite />
            <SaveTheDate />
            <Location />
            <Accomodation />
            <RSVP />
            <Whishes disabled={sections[4] === undefined} />
            <Footer />
        </React.Fragment>
    </React.Fragment>);
}

export default App;
