import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

//passing in the App component and grabbing the element that has the id "root" which is in
//public/index.html 
ReactDOM.render(<App />, document.getElementById('root'))