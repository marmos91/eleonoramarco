import React from 'react';
import styled from 'styled-components';
import {media} from '../theme';

const StyledAccomodationCard = styled.div`
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${media.tablet`
        margin: auto;
    `}

    h1 {
        align-self: start;
        text-align: left !important;
        font-family: 'Lato', sans-serif;
        font-size: .8rem;
        line-height: 1.5rem;
        color: #75C5B1;

        padding: 1rem 1rem 0 1rem;

        ${media.tablet`
            font-size: 1.2rem;
            font-weight: 400;
            padding: 1.5rem .5rem 0 .5rem;
        `}
    }

    p {
        padding: 1rem;
        font-family: 'Libre Baskerville', serif;
        font-size: .8rem;
        line-height: 1.2rem;

        ${media.tablet`
            font-size: 1rem;
            line-height: 1.5rem;
            padding: 1.5rem .5rem;
        `}
    }
`;

const AccomodationImage = styled.div`
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.38), rgba(0, 0, 0, 0.38)), url(${props => props.image});
    background-size: cover;
    height: 11rem;
    width: 100%;

    ${media.tablet`
        height: 18rem;
        margin: auto;
    `}
`;

export const AccomodationCard = (props) =>
{
    return (<StyledAccomodationCard>
        <AccomodationImage image={props.image} />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </StyledAccomodationCard>);
}
