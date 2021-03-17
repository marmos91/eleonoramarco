import React from 'react';
import './Hero.css';
import murren from '../assets/images/murren.jpg';
import stamp from '../assets/images/stamp.png';
import {Navbar} from './Navbar';

export const Hero = () =>
{
    return (<section className='hero is-dark is-fullheight home' id='home' style={{backgroundImage: `url(${murren})`}}>
        <div className='hero-head'>
            <Navbar />
        </div>
        <div className='hero-body'>
            <div className='columns'>
                <div className='column is-one-quarter'>
                    <img src={stamp} />
                </div>
            </div>
        </div>
    </section>);
}
