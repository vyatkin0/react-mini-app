import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

let element = document.createElement('div');
document.body.replaceChildren(element);
const root = createRoot(element);
root.render(<App />);

if (module.hot) {
    module.hot.accept(['./App.js', './int.js'], function () {
        console.log('Accepting the updated module!');
        element = document.createElement('div');
        document.body.replaceChildren(element);
        const root = createRoot(element);
        root.render(<App />);
    });
}