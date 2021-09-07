import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import NoMatch from './components/NoMatch.js';
import HomeScreen from './screens/HomeScreen.js';
import CartScreen from './screens/CartScreen.js';
import ProductDetailScreen from './screens/ProductDetailScreen.js';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductDetailScreen} exact />
        <Route path="/cart" component={CartScreen} />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
