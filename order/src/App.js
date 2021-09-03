import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import HomePage from './screens/HomePage.js';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
