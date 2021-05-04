import React from 'react';
import {useTranslation} from 'react-i18next';
import {media} from '../theme';
import invite from '../assets/images/invite.png';
import styled from 'styled-components';

const InviteSection = styled.section`
    padding: 2rem 1.8rem;
    display: flex;
    flex-direction: column;

    ${media.desktop`
        padding: 4rem 1.8rem;
    `}

    h1 {
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        font-size: 1.5rem;
        line-height: 1.6rem;
        font-weight: 300;
        text-align: center;

        margin-bottom: 1.5rem;

        ${media.tablet`
            margin: 3rem;
            font-size: 1.8rem;
            line-height: 2rem;
        `}

        ${media.desktop`
            font-size: 2rem;
            line-height: 2rem;
        `}
    }
`;

const InviteGrid = styled.div`
    ${media.tablet`
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        align-items: center;
        column-gap: 3rem;

        margin: 4rem 2rem;

        ${media.desktop`
            margin: 4rem;
        `}
    `}

    img {
        display: none;

        margin: auto;
        width: 15rem;

        ${media.tablet`
            display: block;
        `}

        ${media.desktop`
            width: 25rem;
        `}
    }

    p {
        margin: 2rem auto;
        font-family: 'Libre Baskerville', serif;
        line-height: 1.5rem;
        color: #222222;

        ${media.tablet`
            font-size: 1.2rem;
            line-height: 1.8rem;
        `}

        strong {
            font-weight: bold;
        }
    }
`;

export const Invite = () =>
{
    const {t} = useTranslation();

    return (<InviteSection id='invite'>
        <h1>{t('invite.title')}</h1>
        <InviteGrid>
            <img src={invite} />
            <div>
                <p>{t('invite.paragraph')}</p>
                <p><strong>{t('invite.paragraph2')}</strong></p>
            </div>
        </InviteGrid>
    </InviteSection>);
}
