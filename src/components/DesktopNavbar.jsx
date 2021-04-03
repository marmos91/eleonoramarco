import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components';
import {media} from '../theme';
import {useQuery} from '../App';

const DesktopNav = styled.nav`
    display: none;

    ${media.desktop`
        display: flex;
    `}
`;

const DesktopNavigation = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DesktopNavigationLink = styled.li`
    margin: auto 1rem;
`;

const ScrollToLink = styled.a`
    font-family: 'Lato', sans-serif;
    font-size: .9rem;
    font-weight: 300;

    color: white;
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
`;

export const DesktopNavbar = (props) =>
{
    const {i18n} = useTranslation();
    const query = useQuery();
    const rsvp = query.get('rsvp');

    const scroll = (event, hash) =>
    {
        event.preventDefault();

        props.set_open(false);

        history.pushState({}, '', hash);

        const section = document.querySelector(hash);

        if(section)
            section.scrollIntoView({block: 'center', behavior: 'smooth'});
    };

    const render_links = () => props.links.map((link) => (
        <DesktopNavigationLink key={link.name}>
            <ScrollToLink href={link.link} onClick={(event) => scroll(event, link.link)}>{link.name}</ScrollToLink>
        </DesktopNavigationLink>
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
        return (<DesktopNavigationLink>
            <ScrollToLink href={toggle_language()}>{i18n.language === 'it' ? 'English version' : 'Versione italiana'}</ScrollToLink>
        </DesktopNavigationLink>);
    };

    return (<DesktopNav>
        <DesktopNavigation>
            {render_links()}
            {render_language_switcher()}
        </DesktopNavigation>
    </DesktopNav>);
}
