import logo from './logo.svg';
import './App.css';
import OpenAI from "openai"

function App() {
  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  })

  console.log('what is process env', process.env);
  console.log('what is openAI', openai);

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
