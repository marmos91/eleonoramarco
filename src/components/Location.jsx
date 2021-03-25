import React from "react";
import {useTranslation} from "react-i18next";
import {media} from '../theme';
import styled from "styled-components";

const LocationSection = styled.section`
    padding: 2.5rem 1.5rem;
    display: flex;
    flex-direction: column;

    ${media.desktop`
        padding: 4.5rem 1.5rem;
    `}

    p {
        font-family: 'Libre Baskerville', serif;
        line-height: 1.5rem;
        color: #222222;
        margin: 1rem;

        ${media.desktop`
            text-align: center;
        `}
    }
`;

const LocationDetails = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    ${media.tablet`
        margin: 3rem;
        grid-template-columns: 1fr 1fr;
    `}
`;

const LocationDetail = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Libre Baskerville', serif;
    margin: .8rem 0;

    h1, h2, span {
        text-align: center;
        margin: .4rem 0;
    }

    h1 {
        font-family: 'Lato', sans-serif;
        text-decoration-line: underline;
        text-transform: uppercase;
        font-weight: 300;

        color: #75C5B1;
        margin: 1rem;

        ${media.tablet`
            font-size: 1.5rem;
            margin: 1.5rem;
        `}
    }

    h2 {
        font-size: .9rem;
        font-weight: 600;

        ${media.tablet`
            font-size: 1.1rem;
        `}
    }

    span {
        font-size: .8rem;

        ${media.tablet`
            font-size: 1rem;
        `}
    }
`;

export const Location = () =>
{
    const {t} = useTranslation();

    return (<LocationSection id='location'>
        <p>{t('location.paragraph')}</p>
        <LocationDetails>
            <LocationDetail>
                <h1>{t('location.cerimony.title')}</h1>
                <h2>{t('location.cerimony.location')}</h2>
                <span>{t('location.cerimony.time')}</span>
                <span>{t('location.cerimony.address')}</span>
                <span>{t('location.cerimony.city')}</span>
            </LocationDetail>
            <LocationDetail>
                <h1>{t('location.party.title')}</h1>
                <h2>{t('location.party.location')}</h2>
                <span>{t('location.party.time')}</span>
                <span>{t('location.party.address')}</span>
                <span>{t('location.party.city')}</span>
            </LocationDetail>
        </LocationDetails>
    </LocationSection>);
}
