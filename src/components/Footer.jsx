import React from "react";
import styled from "styled-components";
import {media} from '../theme';
import stamp from '../assets/images/stamp.png';

const FooterSection = styled.footer`
    background-color: #292929;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${media.tablet`
        padding: 2rem 0;
    `}

    img {
        width: 10rem;
        margin: 2rem;

        ${media.tablet`
            width: 15rem;
        `}
    }

    span {
        color: rgba(255,255, 255, .5);
        font-family: 'Libre Baskerville', serif;
        font-size: .7rem;
        text-align: center;
        padding: .4rem 0;

        ${media.tablet`
            font-size: .9rem;
            padding: .8rem 0;
        `}
    }
`;

export const Footer = () =>
{
    return (<FooterSection>
        <img src={stamp} />
        <span>©Copyright  2021 Marco Moschettini - all rights reserved</span>
    </FooterSection>);
}
