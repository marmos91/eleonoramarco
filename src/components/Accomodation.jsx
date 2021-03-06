import React from "react";
import {useTranslation} from "react-i18next";
import {media} from '../theme';
import styled from "styled-components";
import falco from '../assets/images/falco.jpg';
import piana from '../assets/images/piana.jpg';
import sapori from '../assets/images/sapori.jpg';
import fenice from '../assets/images/fenice.jpg';
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
            <AccomodationCard title={t('accomodation.locations.sapori.title')} link='http://www.albergosapori.it/' description={t('accomodation.locations.sapori.description')} image={sapori} />
            <AccomodationCard title={t('accomodation.locations.falco.title')} link='https://www.booking.com/hotel/it/falco-d-oro-tole1.it.html' description={t('accomodation.locations.falco.description')} image={falco} />
            <AccomodationCard title={t('accomodation.locations.fenice.title')} link='http://www.lafeniceagritur.it/home/' description={t('accomodation.locations.fenice.description')} image={fenice} />
            <AccomodationCard title={t('accomodation.locations.piana.title')} link='https://www.booking.com/hotel/it/la-piana-dei-castagni.it.html' description={t('accomodation.locations.piana.description')} image={piana} />
        </Accomodations>
    </AccomodationSection>);
}
