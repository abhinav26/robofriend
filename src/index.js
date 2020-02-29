import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Hello';
import registerServiceWorker from './registerServiceWorker';
//import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();