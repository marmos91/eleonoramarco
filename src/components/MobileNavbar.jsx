import React from "react";
import styled from "styled-components";
import {Burger} from "./Burger";
import {media} from '../theme';
import {useTranslation} from "react-i18next";
import {useQuery} from '../App';

const MobileNav = styled.nav`
    display: block;

    ${media.desktop`
        display: none;
    `}
`;

const MobileNavigation = styled.ul`
    display: ${props => props.open ? 'flex' : 'none'};

    position: fixed;
    top: 3.4rem;
    left: 0;
    width: 100%;
    height: 100vh;

    background-color: #222;

    flex-direction: column;
    list-style: none;

    box-sizing: border-box;
    padding: 2rem;

    z-index: 999;
`;

const MobileNavigationLink = styled.li`
    color: white;
    text-align: center;
    text-transform: uppercase;
    font-weight: 100;

    padding: .8rem 0;
`;

const ScrollToLink = styled.a`
    color: white;
    cursor: pointer;
    text-decoration: none;
    font-family: 'Lato', sans-serif;
    font-size: .9rem;
    font-weight: 300;
`;

export const MobileNavbar = (props) =>
{
    const {i18n} = useTranslation();
    const query = useQuery();
    const rsvp = query.get('rsvp');

    const scroll = (event, hash) =>
    {
        event.preventDefault();

        history.pushState({}, '', hash);

        props.set_open(false);

        const section = document.querySelector(hash);

        if(section)
            section.scrollIntoView({block: 'center', behavior: 'smooth'});
    };

    const render_links = () => props.links.map((link) => (
        <MobileNavigationLink key={link.name}>
            <ScrollToLink href={link.link} onClick={(event) => scroll(event, link.link)}>{link.name}</ScrollToLink>
        </MobileNavigationLink>
    ));

    const toggle_language = () =>
    {
        let url = new URL('/', window.location.href);

        if(rsvp)
            url.searchParams.append('rsvp', rsvp);

        if(i18n.language === 'it')
            url.searchParams.append('language', 'en');
        else
            url.searchParams.delete('language');

        url.hash = window.location.hash;

        return url.toString();
    };

    const render_language_switcher = () =>
    {
        return (<MobileNavigationLink>
            <ScrollToLink href={toggle_language()}>{i18n.language === 'it' ? 'English version' : 'Versione italiana'}</ScrollToLink>
        </MobileNavigationLink>);
    };

    return (<MobileNav>
        <Burger open={props.open} set_open={props.set_open} />
        <MobileNavigation open={props.open} >
            {render_links()}
            {render_language_switcher()}
        </MobileNavigation>
    </MobileNav>);
}
