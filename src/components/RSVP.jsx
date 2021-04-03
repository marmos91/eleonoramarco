import React, {useCallback, useState} from "react"
import {useTranslation} from "react-i18next";
import {media} from '../theme';
import {useQuery} from '../App';
import styled from "styled-components";

const RSVPSection = styled.section`
    padding: 2.5rem;

    ${media.tablet`
        margin: 3rem 8rem;
    `}

    ${media.desktop`
        width: 40%;
        margin: 3rem auto;
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

    button {
        cursor: pointer;
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

const FormSelectDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SelectButton = styled.button`
    cursor: pointer;
    border: 1px solid #75C5B1 !important;
    box-sizing: border-box;
    width: 48%;
    color: ${props => props.selected ? 'white' : '#75C5B1'} !important;
    background-color: ${props => props.selected ? props.negative ? '#c57575' : '#75C5B1' : 'transparent'} !important;
`;

const StyledInput = styled.input`
    font-family: 'Lato', sans-serif;
    height: 3rem;
    margin: .3rem 0;
    border: ${props => '2px solid ' + (props.error ? 'red' : '#75C5B1')};
    box-sizing: border-box;
    text-align: center;

    ${media.tablet`
        height: 4rem;
    `}

    ::placeholder {
        font-family: 'Lato', sans - serif;
        text-align: center;
        text-transform: uppercase;

        ${media.tablet`
            font-size: 1rem;
        `}
    }
`;

const Status = styled.span`
    display: ${props => props.show ? 'block' : 'none'};
    margin-top: 2rem;
    text-align: center;
    font-family: 'Libre Baskerville', serif;
    font-size: .9rem;

    color: ${props => props.error ? 'red' : '#75C5B1'};
`;

const FormSelect = (props) =>
{
    const {t} = useTranslation();

    const toggle = (event, confirm) =>
    {
        event.preventDefault();
        props.on_change(confirm);
    };

    return (<FormSelectDiv>
        <SelectButton selected={props.confirm} disabled={props.disabled} onClick={(event) => toggle(event, true)}>{t('rsvp.confirm')}</SelectButton>
        <SelectButton negative={true} selected={!props.confirm} disabled={props.disabled} onClick={(event) => toggle(event, false)}>{t('rsvp.not_confirm')}</SelectButton>
    </FormSelectDiv>);
}

export const RSVP = (props) =>
{
    const {t} = useTranslation();
    const [name, set_name] = useState('');
    const [email, set_email] = useState('');
    const [confirm, set_confirm] = useState(true);
    const [name_error, set_name_error] = useState(false);
    const [email_error, set_email_error] = useState(false);
    const [server_error, set_server_error] = useState(false);
    const [status, set_status] = useState('');
    const query = useQuery();
    const rsvp = query.get('rsvp');
    const show = (rsvp === 'true');

    const submit_form = useCallback(async (event) =>
    {
        event.preventDefault();

        if(server_error)
            set_server_error(false);

        if(name === '')
        {
            set_status(t('error.name'));
            set_name_error(true);
            return false;
        }

        if(email === '')
        {
            set_status(t('error.email'));
            set_email_error(true);
            return false;
        }

        try
        {
            const endpoint = process.env.NODE_ENV === 'development' ? 'http://localhost:4444' : 'https://eleomarco.herokuapp.com';

            const response = await fetch(`${endpoint}/confirm`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    confirm,
                })
            });

            if(response.status !== 201)
                throw new Error(`Wrong status ${response.status}`);

            console.log('Request sent', response.statusText);
            set_status(t('success'));
        }
        catch(error)
        {
            console.error(error);
            set_status(t('error.server'));
            set_server_error(true);
        }

        return false;
    }, [name, email, set_name_error, confirm, set_server_error, server_error, set_email_error, t]);

    const on_name_change = useCallback((event) =>
    {
        if(server_error)
            set_server_error(false);

        if(name_error)
            set_name_error(false);

        set_name(event.target.value);
    }, [set_name_error, name_error, server_error, set_server_error, set_name]);

    const on_email_change = useCallback((event) =>
    {
        if(server_error)
            set_server_error(false);

        if(email_error)
            set_email_error(false);

        set_email(event.target.value);
    }, [set_email_error, email_error, server_error, set_server_error, set_email]);

    if(!show)
        return (<></>);

    return (<RSVPSection id='rsvp'>
        <h1>{t('rsvp.title')}</h1>
        <p>{t('rsvp.paragraph')}</p>
        <RSVPForm onSubmit={submit_form}>
            <StyledInput placeholder={t('rsvp.input')} error={name_error} disabled={props.disabled} value={name} onChange={on_name_change} />
            <StyledInput placeholder={t('rsvp.email')} error={email_error} disabled={props.disabled} value={email} onChange={on_email_change} />
            <FormSelect on_change={set_confirm} confirm={confirm} />
            <button disabled={props.disabled || name === '' || email === ''}>{t('rsvp.submit')}</button>
            <Status show={status !== ''} error={name_error || email_error || server_error}>{status}</Status>
        </RSVPForm>
    </RSVPSection>);
};
