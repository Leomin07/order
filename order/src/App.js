import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BackToTop } from './components/BackToTop.js';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import NoMatch from './components/NoMatch.js';
import { ProtectedRoute } from './route/ProtectedRoute.js';
import CartScreen from './screens/CartScreen.js';
import CheckoutScreen from './screens/CheckoutScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import OrderHistoryScreen from './screens/OrderHistoryScreen.js';
import ProductByCategoryScreen from './screens/ProductByCategoryScreen.js';
import ProductDetailScreen from './screens/ProductDetailScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';

const App = () => {
  const token = useSelector(state => state.auth.token);
  window.onbeforeunload = function () {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
  };
  return (
    <div className="root">
      <Router>
        <Header auth={token} />
        <BackToTop />

        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductDetailScreen} exact />
          <Route
            path="/category=:id"
            component={ProductByCategoryScreen}
            exact
          />
          <Route path="/cart" component={CartScreen} />
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <ProtectedRoute path="/checkout" component={CheckoutScreen} exact />
          <ProtectedRoute
            path="/order-history"
            component={OrderHistoryScreen}
            exact
          />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
