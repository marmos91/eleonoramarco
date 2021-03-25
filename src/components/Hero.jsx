import React from 'react';
import murren from '../assets/images/murren.jpg';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {media} from '../theme';

const HeroSection = styled.section`
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: radial-gradient(36.91% 36.91% at 50.03% 63.09%, rgba(158, 158, 158, 0.4) 0%, rgba(154, 154, 154, 0) 33.85%),
        linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        url(${murren});

    background-size: cover;
    background-position: 50% 100%;
`;

const HeroTitle = styled.div`
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    text-align: center;
    color: white;
    margin-top: 8rem;

    ${media.tablet`
        margin-top: 20rem;
    `}

    h1 {
        font-size: 2.5rem;
        line-height: 3rem;

        ${media.tablet`
            font-size: 3rem;
            line-height: 3.2rem;
        `}
    }

    h2 {
        font-size: 1rem;
        padding: 1.3rem 0;
        line-height: 1rem;

        ${media.tablet`
            font-size: 1.5rem;
            line-height: 2rem;
        `}
    }
`;

export const Hero = () =>
{
    const {t} = useTranslation();

    return (<HeroSection id='home'>
        <HeroTitle>
            <h1>MARCO & ELEONORA</h1>
            <h2>{t('welcome')}</h2>
        </HeroTitle>
    </HeroSection>);
}
