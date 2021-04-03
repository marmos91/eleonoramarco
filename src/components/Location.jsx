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

const LocationMap = styled.iframe`
    margin: 2rem 0;
    width: 100%;
    height: 25rem;

    ${media.tablet`
        height: 40rem;
    `}
`;

const Map = () =>
{
    return (<LocationMap src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45689.46194347273!2d11.039103266232072!3d44.29779183547865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ac6147aa297fb%3A0x4995f6089b745866!2sAgriturismo%20Antica%20Pieve!5e0!3m2!1sit!2sit!4v1617472436768!5m2!1sit!2sit' style={{border: 0}} allowFullScreen='' loading='lazy'></LocationMap>);
};

export const Location = () =>
{
    const {t} = useTranslation();

    return (<LocationSection id='location'>
        <p>{t('location.paragraph')}</p>
        <LocationDetails>
            <LocationDetail>
                <h1><a href='https://goo.gl/maps/DbLua7MWip2Z5HgB6'>{t('location.cerimony.title')}</a></h1>
                <h2>{t('location.cerimony.location')}</h2>
                <span>{t('location.cerimony.time')}</span>
                <span>{t('location.cerimony.address')}</span>
                <span>{t('location.cerimony.city')}</span>
            </LocationDetail>
            <LocationDetail>
                <h1><a href='https://goo.gl/maps/DbLua7MWip2Z5HgB6'>{t('location.party.title')}</a></h1>
                <h2>{t('location.party.location')}</h2>
                <span>{t('location.party.time')}</span>
                <span>{t('location.party.address')}</span>
                <span>{t('location.party.city')}</span>
            </LocationDetail>
        </LocationDetails>
        <Map />
    </LocationSection>);
}
