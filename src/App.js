import logo from './logo.svg';
import './App.css';
import {useRef, useEffect} from 'react';

function App() {
  const canvasRef = useRef();

  useEffect(() => {
    if(canvasRef.current){
      // canvasRef.current.getContext('2d');
    }
  })
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <canvas width="140" height="200" ref={canvasRef}>testing canvas</canvas>
    </div>
  );
}

export default App;
