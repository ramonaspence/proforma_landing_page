import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// fonts
import './static/media/Gobold_Bold.ttf';
import './static/media/MinionPro-Regular.otf';
import './static/media/Univers-Bold.otf';
import './static/media/UniversLTStd-Light.otf';
import './static/media/UniversLTStd-UltraCn.otf';


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
