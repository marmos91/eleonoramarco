import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import pieve from '../assets/images/pieve.jpg';

const SaveTheDateSection = styled.section`
    color: white;
    height: 100vh;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)), url(${pieve});
    background-position: 50% 30%;
    background-size: 150%;
    background-repeat:no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        font-size: 3.4rem;
        font-weight: 100;
        text-align: center;
        padding: 1rem;
        line-height: 3.5rem;
    }

    h2 {
        font-family: 'Libre Baskerville', serif;
        text-align: center;
        font-weight: 200;
        padding: 1rem;
        line-height: 1.5rem;
    }
`;

export const SaveTheDate = () =>
{
    const {t} = useTranslation();

    return (<SaveTheDateSection id='save_date'>
        <h1>{t('save.title')}</h1>
        <h2>{t('save.subtitle')}</h2>
    </SaveTheDateSection>);
}
