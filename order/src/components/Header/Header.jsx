import React, { useEffect, useState } from 'react';
import { GrMenu } from 'react-icons/gr';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { RiAccountPinCircleFill } from 'react-icons/ri';
// import Banner from '../Banner.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logoutAction } from '../../actions/authAction.js';
import { cartList } from '../../actions/cartAction.js';
import './styles.css';

const Header = ({ auth }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const carts = useSelector(state => state.cart.cartItems);
  const user = useSelector(state => state.auth.user);
  useEffect(() => {
    dispatch(cartList());
    window.addEventListener('scroll', handleScroll);
    return () => window.addEventListener('scroll', handleScroll);
  }, [dispatch]);
  const [scrolling, setScrolling] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset >= 120) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  const logoutHandler = () => {
    dispatch(logoutAction());
  };

  return (
    <header>
      <div className="header-top container">
        <p className="header-top text-center">
          Hotline Mua hàng: 0968.959.050 | Hotline CSKH: 0868.303.399
        </p>
      </div>
      <div className={scrolling ? 'header-main sticky' : 'header-main'}>
        <div className="header-logo">
          <Link to="/">
            <img
              src={require('../../assets/logo.png').default}
              alt="logo"
              className="img-fluid"
              width="150px"
            />
          </Link>
        </div>
        <div className="header-nav">
          <ul className="nav text-center">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Trang chủ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Áo nam
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Quần nam
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Giới thiệu
              </Link>
            </li>
          </ul>
        </div>
        <div className="header-icons">
          <div className="cart-icon">
            {carts.length < 1 ? (
              ''
            ) : (
              <div className="cart-count">{carts.length}</div>
            )}
            <Link to="/cart" className="icon-link">
              <HiOutlineShoppingCart size="2rem" />
            </Link>
          </div>
          {auth && (
            <div className="user-info">
              <div className="user-name">{user.fullName} </div>
              <div className="user-actions">
                <div className="user-action_logout">
                  <Link to="/login" onClick={() => logoutHandler()}>
                    Logout
                  </Link>
                </div>
                <div className="user-action_order">
                  <Link to="/order">Lịch sử đặt hàng</Link>
                </div>
              </div>
            </div>
          )}
          {!auth && (
            <div className="account-icon">
              <Link to="/login" className="icon-link">
                <RiAccountPinCircleFill size="2rem" />
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="header-mobile">
        <GrMenu size="2rem" />
      </div>
      {/* <Banner /> */}
    </header>
  );
};

export default Header;
