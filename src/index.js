import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';
import { CubbyContextProvider } from './CubbyContext';

ReactDOM.render(
  <BrowserRouter>
    <CubbyContextProvider>
      <App />
    </CubbyContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
