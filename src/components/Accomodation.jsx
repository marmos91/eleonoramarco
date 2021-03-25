import React from "react";
import {useTranslation} from "react-i18next";
import {media} from '../theme';
import styled from "styled-components";
import falco from '../assets/images/falco.jpg';
import piana from '../assets/images/piana.jpg';
import {AccomodationCard} from "./AccomodationCard";

const AccomodationSection = styled.section`
    background: #F9F9F9;
    padding: 2.5rem 0;

    ${media.tablet`
        padding: 2.5rem 0;
    `}

    ${media.desktop`
        padding: 4.5rem 1.5rem;
    `}

    h1 {
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        font-size: 1.5rem;
        line-height: 1.6rem;
        font-weight: 300;
        text-align: center;

        ${media.desktop`
            font-size: 2rem;
            line-height: 2rem;
        `}
    }
`;

const Accomodations = styled.div`
    display: grid;
    grid-template-columns: auto;
    align-items: center;
    justify-content: center;

    ${media.tablet`
        grid-template-columns: 1fr 1fr;
        column-gap: 2rem;

        margin-top: 2rem;
        box-sizing: border-box;
        padding: 1rem;
    `}
`;

export const Accomodation = () =>
{
    const {t} = useTranslation();

    return (<AccomodationSection id='accomodation'>
        <h1>{t('accomodation.title')}</h1>
        <Accomodations>
            <AccomodationCard title={t('accomodation.locations.falco.title')} description={t('accomodation.locations.falco.description')} image={falco} />
            <AccomodationCard title={t('accomodation.locations.piana.title')} description={t('accomodation.locations.piana.description')} image={piana} />
        </Accomodations>
    </AccomodationSection>);
}
