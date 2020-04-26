import React from 'react';
import './App.css';
import './MyCSS.css'
import Main from './Components/Main';

function App() {
  console.log('render App')
  // const matches = window.matchMedia('(min-width:1000px)').matches 

  const savedColor = localStorage.getItem('color') 
  if(savedColor){
    document.documentElement.setAttribute('data-theme', savedColor)
  }

  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
