import React from "react";
import './Accomodation.css';

export const Accomodation = () =>
{
    return (<section className='hero is-warning is-bold is-fullheight accomodation' id='accomodation'>
        <div className='hero-body'>
            <div className='container has-text-centered'>
                <h1 className='title truncate is-1'>Accomodation</h1>
                <div className='columns is-centered'>
                    <div className='column is-10 is-8-desktop'>
                        <p className='subtitle is-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum incidunt saepe odit sed illo hic corporis nesciunt reprehenderit ut iure, fuga libero adipisci dolore dicta minima minus provident quae est!</p>
                        <div className='columns' >
                            <div className='column'>
                                <ul>
                                    <li><a href='#'>Hotel 1</a></li>
                                    <li><a href='#'>Hotel 2</a></li>
                                    <li><a href='#'>Hotel 3</a></li>
                                </ul>
                            </div>
                            <div className='column'>
                                <ul>
                                    <li><a href='#'>Hotel 1</a></li>
                                    <li><a href='#'>Hotel 2</a></li>
                                    <li><a href='#'>Hotel 3</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}
