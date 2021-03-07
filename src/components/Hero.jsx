import React from 'react';
import murren from '../assets/murren.jpg';
import stamp from '../assets/stamp.png';

export const Hero = () =>
{
    return (<section className='hero is-fullheight' style={{backgroundImage: `url(${murren})`}}>
        <div className='hero-head'>
            <header className='navbar'>
                <div className='container'>
                    <div className='navbar-brand'>
                        <span className='navbar-burger' data-target='navbarMenuHeroC'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id='navbarMenuHero' className='navbar-menu'>
                        <div className='navbar-end'>
                            <a className='navbar-item is-active'>
                                Home
                            </a>
                            <a className='navbar-item'>
                                Examples
                            </a>
                            <a className='navbar-item'>
                                Documentation
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
        <div className='hero-body'>
            <div className='columns'>
                <div className='column is-one-quarter'>
                    <img src={stamp} />
                </div>
                <div className='column'></div>
                <div className='column'></div>
            </div>
        </div>
    </section>);
}
