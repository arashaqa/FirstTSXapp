import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

//redux
import { Provider } from 'react-redux'
import store from './redux/store'

//saga

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
,
  document.getElementById('root')
);

reportWebVitals();
