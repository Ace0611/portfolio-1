import logo from './logo.svg';
import './App.css';
import OpenAI from "openai"

function App() {
  const openai = new OpenAI({
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey: "huhabhajan",
    dangerouslyAllowBrowser: true,
  })

  console.log('what is openai key', process.env);
  console.log('what is openAI', openai);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <p>There is a competition</p>
          <p>Updating this for merging</p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
