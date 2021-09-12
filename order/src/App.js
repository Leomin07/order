import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadUserAction } from './actions/authAction.js';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header/Header.jsx';
import NoMatch from './components/NoMatch.js';
import AdminCategory from './screens/Admin/AdminCategory.js';
import AdminProduct from './screens/Admin/AdminProduct.js';
import CartScreen from './screens/CartScreen.js';
import CheckoutScreen from './screens/CheckoutScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import LoginScreen from './screens/LoginScreen.js';
import ProductDetailScreen from './screens/ProductDetailScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';

const App = () => {
  const auth = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserAction());
  }, [dispatch]);
  return (
    <Router>
      <Header auth={auth} />
      <Switch>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductDetailScreen} exact />
        <Route path="/cart" component={CartScreen} />
        <Route path="/checkout" component={CheckoutScreen} />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/register" component={RegisterScreen} exact />
        <Route path="/admin/product" component={AdminProduct} exact />
        <Route path="/admin/category" component={AdminCategory} exact />
        {/* <PrivateRoute path="/" /> */}
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
