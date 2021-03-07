import React from 'react';
import pieve from '../assets/pieve.jpg';

export const Invite = () =>
{
    return (<section className='section container'>
        <h1 className='title'>Welcome</h1>
        <div className='columns'>
            <div className='column'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vitae officia dignissimos at quaerat quis accusamus facere.
                Totam dolorem iure voluptate voluptates ratione sapiente hic odit reiciendis, excepturi earum corrupti.
            </div>
            <div className='column'>
                <figure className='image is-128x128'>
                    <img className='is-rounded' src={pieve} />
                </figure>
            </div>
        </div>
    </section>);
}
