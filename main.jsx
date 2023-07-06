import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login.jsx';
import TodoPage from './TodoPage.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <React.StrictMode>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/todos" component={TodoPage} />
      </Switch>
    </React.StrictMode>
  </Router>
);
