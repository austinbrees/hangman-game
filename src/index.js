import React from 'react';
import './index.css';
import App from './App';

import { createRoot } from 'react-dom';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
