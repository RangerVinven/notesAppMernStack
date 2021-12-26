import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const getNotes = () => {
    console.log("Hello World!");
  };

  return (
    <div className="App">
      <div>Notes Application</div>
      <div>
        <button onClick={getNotes}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
