import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// fonts
import './media/Gobold_Bold.ttf';
import './media/MinionPro-Regular.otf';
import './media/Univers-Bold.otf';
import './media/UniversLTStd-Light.otf';
import './media/UniversLTStd-UltraCn.otf';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
