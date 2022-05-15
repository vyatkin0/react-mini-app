import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const element = document.createElement('div');
document.body.appendChild(element);
const root = createRoot(element);
root.render(<App />);

if (module.hot) {
    module.hot.accept('./App.js', function () {
        console.log('Accepting the updated module!');
        document.body.removeChild(element);
        element = document.createElement('div');
        document.body.appendChild(element);
        const root = createRoot(element);
        root.render(<App />);
    });
}