import 'bulma';
import './App.css';
import React from 'react';

import {Hero} from './components/Hero';
import {Location} from './components/Location';
import {Accomodation} from './components/Accomodation';
import {Footer} from './components/Footer';
import {RSVP} from './components/RSVP';
import {Map} from './components/Map';

function App()
{
    return (<>
        <div className='App'>
            <Hero />
            <Location />
            <Map />
            <Accomodation />
            <RSVP />
            <Footer />
        </div>
    </>);
}

export default App;
