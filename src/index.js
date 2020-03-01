import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
//import Card from './Card';
import SearchBox from './SearchBox';
import App from './App';
import CardList from './CardList';
import {robots} from './robots';
//import registerServiceWorker from './registerServiceWorker';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />,document.getElementById('root'));
//registerServiceWorker();
serviceWorker.unregister();