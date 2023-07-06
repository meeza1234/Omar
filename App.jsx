
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './SignUp.jsx';
import TodoPage from './todoPage.jsx'; 
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/todos" component={TodoPage} />
      </Switch>
    </Router>
  );
}

export default App;
{
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Play-On</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR.
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more.
      </p>
    </>
  );
}

export default App;
