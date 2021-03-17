import React from "react"
import './RSVP.css';

export const RSVP = () =>
{
    return (<section className='hero is-info is-bold is-fullheight rsvp' id='rsvp'>
        <div className='hero-body'>
            <div className='container has-text-centered'>
                <h1 className='title is-1'>RSVP</h1>
                <div className='columns is-centered'>
                    <div className='column is-10 is-8-desktop'>
                        <p className='subtitle is-5'>Our time has finally come, let us know if you will be able to join our celebration!</p>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}
