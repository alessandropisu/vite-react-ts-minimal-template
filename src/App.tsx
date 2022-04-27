import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Vite + React + TypeScript + Airbnb + Husky = 🔥</p>
        <p>
          <button className="rainbow-button" type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
          {' | '}
          <a className="App-link" href="https://github.com/typicode/husky" target="_blank" rel="noopener noreferrer">
            Husky Docs
          </a>
          {' | '}
          <a className="App-link" href="https://github.com/airbnb/javascript" target="_blank" rel="noopener noreferrer">
            Airbnb JS Style Guide
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://github.com/airbnb/javascript/tree/master/react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Airbnb React Style Guide
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://github.com/alessandropisu/vite-react-ts-minimal-template"
            target="_blank"
            rel="noopener noreferrer"
          >
            Template repository
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
