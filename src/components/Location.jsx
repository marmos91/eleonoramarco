import React from "react";
import './Location.css';
import {FaMapMarkerAlt, FaRegClock} from 'react-icons/fa';
import Particles from 'react-particles-js';

export const Location = () =>
{
    return (
        <section className='hero is-success is-bold is-fullheight location' id='location'>
            <Particles className='particles' params={{
                particles: {
                    // eslint-disable-next-line quote-props
                    'number': {
                        value: 160,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 0
                        },
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    opacity: {
                        value: .3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0,
                            sync: false
                        }
                    },
                    size: {
                        value: 4,
                        random: true,
                        anim: {
                            enable: false,
                            speed: 4,
                            size_min: 0.3,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#00d1b2",
                        opacity: .5,
                        width: .2
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 600
                        }
                    }
                },
                retina_detect: true,
            }} />
            <div className='hero-body'>
                <div className='container has-text-centered'>
                    <h1 className='title'>
                        Location
				    </h1>
                    <div className='columns is-centered'>
                        <a className='column is-5 is-4-desktop megabutton' href=''>
                            <FaRegClock size={70} />
                            <h2 className='subtitle is-3'>when</h2>
                            <p className='subtitle is-5'>5th Jun 2021</p>
                        </a>
                        <a className='column is-5 is-4-desktop megabutton' href='#map'>
                            <FaMapMarkerAlt size={70} />
                            <h2 className='subtitle is-3'>where</h2>
                            <p className='subtitle is-5'>Antica Pieve di Roffeno<br />Vergato (BO)</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>);
}
