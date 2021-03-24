import React from "react";
import {useTranslation} from "react-i18next";
import styled from "styled-components";

const LocationSection = styled.section`
    padding: 2.5rem 1.5rem;
    display: flex;
    flex-direction: column;

    p {
        font-family: 'Libre Baskerville', serif;
        line-height: 1.5rem;
        color: #222222;
        margin: 1rem;
    }
`;

const LocationDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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
    }

    h2 {
        font-size: .9rem;
        font-weight: 600
    }

    span {
        font-size: .8rem;
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
