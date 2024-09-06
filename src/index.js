import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../src/Components/Redux/store';
import App from './App';
import 'aos/dist/aos.css'; 
import AOS from 'aos';


AOS.init();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
