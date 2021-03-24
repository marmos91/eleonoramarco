
import React, {useEffect, useState, useRef} from "react";
import styled from "styled-components";

import {Navbar} from './Navbar';

const Brand = styled.h1`
    font-family: 'Lato', sans-serif;
    font-weight: 100;
    font-size: 1.7rem;
    line-height: 2rem;

    color: white;
`;

const HeaderSection = styled.header`
    position: fixed;
    top: 0;

    box-sizing: border-box;
    height: 3.4rem;
    width: 100%;
    padding: 1rem;

    display: flex;
    align-items: center;

    background-color: ${props => props.open ? '#222' : 'transparent'};
`;

export const Header = () =>
{
    const [open, set_open] = useState(false);
    const header_ref = useRef(null);
    const [scrolled, set_scrolled] = useState(false);

    useEffect(() =>
    {
        if(!header_ref.current)
            return;

        window.addEventListener('scroll', () =>
        {
            if(!header_ref.current)
                return;

            if(window.scrollY > header_ref.current.clientHeight)
            {
                if(!scrolled)
                    set_scrolled(true);
            }
            else
            {
                if(scrolled)
                    set_scrolled(false);
            }
        });
    }, [header_ref, scrolled]);

    return (<HeaderSection open={open || scrolled} ref={header_ref} >
        <Brand>E & M</Brand>
        <Navbar open={open} set_open={set_open} />
    </HeaderSection>);
}
