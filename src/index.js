//import react library core
import React from 'react';
// react dom allows us to write JSX for web broswers 
import ReactDOM from 'react-dom/client';
//to use a component u have to import first 
import App from './App';
// ^ when we export default, we import w just the filename 
import './global.css'

  
//index.html is where all of our compiled react gets injected, and into the div w id root, so this is doing that
const root = ReactDOM.createRoot(document.getElementById('root'));

// telling it to render the topmost parent component called App 
root.render(<App />);

