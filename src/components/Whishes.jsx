import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

const WhishesSection = styled.section`
    padding: 2rem;
    background: #F9F9F9;


    h1 {
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        font-size: 1.5rem;
        line-height: 1.6rem;
        font-weight: 300;
        text-align: center;
        padding: 0 1rem;
    }

    p {
        font-family: 'Libre Baskerville', serif;
        line-height: 1.5rem;
        color: #222222;
        font-size: .8rem;
        padding: 1rem 0;
    }
`;

export const Whishes = (props) =>
{
    const {t} = useTranslation();

    if(props.disabled)
        return (<></>);

    return (<WhishesSection id='whishes'>
        <h1>{t('whishes.title')}</h1>
        <p>{t('whishes.p1')}</p>
        <p>{t('whishes.p2')}</p>
        <p>{t('whishes.iban')}</p>
    </WhishesSection>);
}
