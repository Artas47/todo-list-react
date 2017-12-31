import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App.js';

const Run = function() {
    return  <ul><App /></ul>;
}

ReactDOM.render(<Run />, document.querySelector('.root'));