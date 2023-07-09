import logo from './logo.svg';
import './App.css';
import {useRef, useEffect} from 'react';
import YouTubeBackground from './components/YoutubeBackground';

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
      {/* <figure>
        <video autoplay loop muted>
        <source src="/static/videos/pays-des-lacs_h265_04.mp4" type="video/mp4; codecs=&quot;hvc1&quot;"/>
        </video>
      </figure> */}
      <YouTubeBackground/>
    </div>
  );
}

export default App;
