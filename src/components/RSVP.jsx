import React from "react"
import {useTranslation} from "react-i18next";
import {media} from '../theme';
import styled from "styled-components";

const RSVPSection = styled.section`
    padding: 2.5rem;

    ${media.tablet`
        margin: 3rem 8rem;
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
            font-size: 1.8rem;
            line-height: 1.6rem;
            padding: 1.5rem 1rem;
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
            line-height: 1.5rem;

            padding: 1.5rem 0;
        `}
    }
`;

const RSVPForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
        height: 3rem;
        margin: .3rem 0;
        border: 1px solid #75C5B1;
        box-sizing: border-box;
        text-align: center;

        ${media.tablet`
            height: 4rem;
        `}

        ::placeholder {
            font-family: 'Lato', sans-serif;
            text-align: center;
            text-transform: uppercase;

            ${media.tablet`
                font-size: 1rem;
            `}
        }
    }

    button {
        font-family: 'Lato', sans-serif;
        color: white;
        height: 2.8rem;
        border: 0;
        background: #85B5E1;
        text-transform: uppercase;
        margin: .3rem 0;

        ${media.tablet`
            height: 4rem;
            font-size: 1rem;
        `}
    }
`;

const FormSelect = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SelectButton = styled.button`
    border: 1px solid #75C5B1 !important;
    box-sizing: border-box;
    width: 48%;
    color: ${props => props.selected ? 'white' : '#75C5B1'} !important;
    background-color: ${props => props.selected ? '#75C5B1' : 'transparent'} !important;
`;

export const RSVP = (props) =>
{
    const {t} = useTranslation();

    return (<RSVPSection id='rsvp'>
        <h1>{t('rsvp.title')}</h1>
        <p>{t('rsvp.paragraph')}</p>
        <RSVPForm>
            <input placeholder={t('rsvp.input')} disabled={props.disabled} />
            <input placeholder={t('rsvp.email')} disabled={props.disabled} />
            <FormSelect>
                <SelectButton selected disabled={props.disabled}>{t('rsvp.confirm')}</SelectButton>
                <SelectButton disabled={props.disabled}>{t('rsvp.not_confirm')}</SelectButton>
            </FormSelect>
            <button disabled={props.disabled}>{t('rsvp.submit')}</button>
        </RSVPForm>
    </RSVPSection>);
};
