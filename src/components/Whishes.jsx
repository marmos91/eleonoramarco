import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import {media} from '../theme';

const WhishesSection = styled.section`
    padding: 2rem;
    background: #F9F9F9;

    ${media.tablet`
        padding: 4rem;
    `}

    ${media.desktop`
        padding: 4rem 20rem;
    `}

    h1 {
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        font-size: 1.5rem;
        line-height: 1.6rem;
        font-weight: 300;
        text-align: center;
        padding: 0 1rem;

        ${media.tablet`
            font-size: 1.9rem;
            line-height: 2rem;
            margin-bottom: 1.5rem;
        `}
    }

    p {
        font-family: 'Libre Baskerville', serif;
        font-size: .8rem;
        line-height: 1.5rem;
        color: #222222;
        padding: 1rem 0;

        ${media.tablet`
            font-size: 1rem;
            line-height: 2rem;
        `}

        ${media.desktop`
            text-align: center;
        `}
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
