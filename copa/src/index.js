import React from 'react';
import App from './App';
import { createRoot} from 'react-dom/client'
// import ReactDOM from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement)

root.render(
    <App />
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );