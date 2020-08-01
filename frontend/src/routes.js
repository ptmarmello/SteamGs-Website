import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import InternalPortfolio from './mysrc/pages/InternalPortfolio';


export default function routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={InternalPortfolio}/>
            </Switch>
        </BrowserRouter>
    );
}