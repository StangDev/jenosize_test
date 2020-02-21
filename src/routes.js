import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import NotFound from './components/NotFound';
import MathTest from './components/MathTest';
import Math24 from './components/Math24';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/jenosize" component={MathTest} />
    <Route path="/math24" component={Math24} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;

