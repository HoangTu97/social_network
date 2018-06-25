import './polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.html';
import App from './App';
// disable ServiceWorker
// import registerServiceWorker from './registerServiceWorker';

Meteor.startup(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
});
// disable ServiceWorker
// registerServiceWorker();