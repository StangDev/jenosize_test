import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './routes';
import Header from './Layout/header'
import Footer from './Layout/footer'
import './index.css';

ReactDOM.render(
  <div>
<Header/>
  <Routes history={browserHistory} />
  <Footer />
  </div>,
  document.getElementById('root')
);