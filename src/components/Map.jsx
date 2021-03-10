import React from "react";
import './Map.css';

export const Map = () =>
{
    return (<section className='hero is-black is-bold is-fullheight map' id='map'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18945.728849115014!2d11.04328897249118!3d44.29734691958953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5faf827881090b3d!2sPieve%20di%20Roffeno%20a%20Cereglio!5e0!3m2!1sit!2sch!4v1615120832110!5m2!1sit!2sch' width='100%' height='100%' allowFullScreen loading='lazy'></iframe>
    </section>);
}
