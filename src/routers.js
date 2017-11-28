import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter } from 'react-keeper'

import PageHome from 'pages/home/';
const rootRoute =
    <HashRouter>
        <div>
            <PageHome.route />
        </div>
    </HashRouter>;

ReactDOM.render( rootRoute, document.getElementById('App') );
