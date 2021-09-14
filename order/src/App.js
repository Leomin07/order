import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadUserAction } from './actions/authAction.js';
import HeaderAdmin from './components/Admin/HeaderAdmin.js';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import NoMatch from './components/NoMatch.js';
import { ProtectedRoute } from './route/ProtectedRoute.js';
import AdminCategory from './screens/Admin/AdminCategory.js';
import AdminProduct from './screens/Admin/AdminProduct.js';
import CartScreen from './screens/CartScreen.js';
import CheckoutScreen from './screens/CheckoutScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import OrderHistoryScreen from './screens/OrderHistoryScreen.js';
import ProductDetailScreen from './screens/ProductDetailScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';

const App = () => {
  const token = useSelector(state => state.auth.token);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserAction());
  }, [dispatch]);
  return (
    <div className="container">
      <Router>
        {user.isAdmin ? <HeaderAdmin /> : <Header auth={token} />}
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductDetailScreen} exact />
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
