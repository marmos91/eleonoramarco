import React from "react";
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import falco from '../assets/images/falco.jpg';
import piana from '../assets/images/piana.jpg';
import {AccomodationCard} from "./AccomodationCard";

const AccomodationSection = styled.section`
    background: #F9F9F9;
    padding: 2.5rem 0;

    h1 {
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        font-size: 1.5rem;
        line-height: 1.6rem;
        font-weight: 300;
        text-align: center;
    }
`;

const Accomodations = styled.div`
    display: grid;
    grid-template-columns: auto;
    margin-top: 2rem;
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
