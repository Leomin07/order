import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import HomePage from './screens/HomePage.js';
import Banner from './components/Banner.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Banner />
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
