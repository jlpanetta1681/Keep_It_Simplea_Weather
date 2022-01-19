import React from "react";
import { Router, Route } from 'react-router';

import App from './App';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';


const Routes =  (
    <Router >
        <Route path="/" component={App}>
           <Route path="/Home"  component={Home} />
           <Route path="*" component={NotFound} />
       </Route>       
    </Router>
);
export default Routes;