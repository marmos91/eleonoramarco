import React from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';

const InviteSection = styled.section`
    padding: 2rem 1.8rem;
    display: flex;
    flex-direction: column;

    h1 {
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        font-size: 1.5rem;
        line-height: 1.6rem;
        font-weight: 300;
        text-align: center;

        margin-bottom: 1.5rem;
    }

    p {
        font-family: 'Libre Baskerville', serif;
        line-height: 1.5rem;
        color: #222222;
    }
`;

export const Invite = () =>
{
    const {t} = useTranslation();

    return (<InviteSection id='invite'>
        <h1>{t('invite.title')}</h1>
        <p>{t('invite.paragraph')}</p>
    </InviteSection>);
}
