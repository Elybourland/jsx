// 1) Import the React and ReactDOM libraries
import React from 'react';
// import * as ReactDOMClient from 'react-dom/client';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
// const root = ReactDOMClient.createRoot(el);
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  return <input style={{border: '3px solid red'}} />
}

// 5) Show the component on the screen
root.render(<App />);