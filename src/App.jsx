import 'bulma';
import './App.css';
import React from 'react';

import {Hero} from './components/Hero';
import {Invite} from './components/Invite';
import {Location} from './components/Location';
import {Accomodation} from './components/Accomodation';
import {Footer} from './components/Footer';

function App()
{
    return (<div className='App'>
        <Hero />
        <Invite />
        <Location />
        <Accomodation />
        <Footer />
    </div>);
}

export default App;
