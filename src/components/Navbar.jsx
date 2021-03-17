import React, {useEffect, useRef} from "react";
import './Navbar.css';
import {GiWorld} from 'react-icons/gi';

export const Navbar = () =>
{
    const navbar_ref = useRef(null)
    useEffect(() =>
    {
        // eslint-disable-next-line space-before-function-paren
        document.querySelectorAll("a[href*=\\#]").forEach(anchor => anchor.addEventListener('click', function (event)
        {
            event.preventDefault();

            if(!this.hash)
                return;

            document.querySelectorAll(".navbar-burger,.navbar-menu").forEach(element => element.classList.remove("is-active"));
            document.querySelectorAll(".navbar-item").forEach(element => element.classList.remove("is-active"));
            this.classList.add('is-active');

            document.querySelector(this.hash).scrollIntoView();
        }));

        if(!navbar_ref.current)
            return;

        const observer = new window.IntersectionObserver((entries) =>
        {
            entries.forEach(entry =>
            {
                if(!entry.isIntersecting)
                    navbar_ref.current.classList.add("scrolled");
                else
                    navbar_ref.current.classList.remove("scrolled");
            })
        }, {
            threshold: 0.1
        });

        observer.observe(document.querySelector('#home'));
    }, [navbar_ref]);

    const toggle = (e) =>
    {
        const element = e.target;
        const target = element.dataset.target;
        const $target = document.getElementById(target);
        element.classList.toggle('is-active');
        $target.classList.toggle('is-active');
    }

    return (<header className='navbar' ref={navbar_ref}>
        <div className='container'>
            <div className='navbar-brand'>
                <a className='nav-item'>
                    <span>E&amp;M</span>
                </a>
                <span className='navbar-burger' onClick={toggle} data-target='navbarMenuHero'>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div>
            <div id='navbarMenuHero' className='navbar-menu'>
                <div className='navbar-end'>
                    <a className='navbar-item is-active' href='#home'>Home</a>
                    <a className='navbar-item' href='#location'>Location</a>
                    <a className='navbar-item' href='#map'>Map</a>
                    <a className='navbar-item' href='#accomodation'>Accomodation</a>
                    <a className='navbar-item' href='#rsvp'>RSVP</a>
                    <div className='navbar-item has-dropdown is-hoverable'>
                        <a className='navbar-link' >IT <GiWorld style={{marginLeft: '10px'}} /></a>
                        <div className='navbar-dropdown'>
                            <a className='navbar-item' href='#'>Engilish</a>
                            <a className='navbar-item' href='#'>Deutsch</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>);
}
