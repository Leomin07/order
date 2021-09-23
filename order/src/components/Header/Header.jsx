import React, { useEffect, useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { GrMenu } from 'react-icons/gr';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { RiAccountPinCircleFill } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { logoutAction } from '../../actions/authAction.js';
import { cartList } from '../../actions/cartAction.js';
import Banner from '../Banner.js';
import './styles.css';

const Header = ({ auth }) => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const carts = useSelector(state => state.cart.cartItems);
  const user = useSelector(state => state.auth.user);
  const [isShow, setIsShow] = useState(false);
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
    history.push('/login');
  };
  return (
    <header className="w-full">
      <div className="header-top">
        <p className="header-top text-center">
          Hotline Mua hàng: 0968.959.050 | Hotline CSKH: 0868.303.399
        </p>
      </div>
      <div
        className={
          scrolling
            ? 'header-main sticky'
            : 'header-main flex align-center text-center relative py-4 px-4 gap-6 md:flex md:justify-around md:align-center'
        }
      >
        <div className="w-1/2 sm:w-auto">
          <Link to="/">
            <img
              src={require('../../assets/logo.png').default}
              alt="logo"
              className="img-fluid cursor-pointer"
              width="150px"
            />
          </Link>
        </div>
        <div
          className={
            isShow
              ? 'inline bg-black-shadow z-auto w-full h-full fixed -ml-8 top-0 '
              : 'hidden sm:inline sm:bg-white md:w-auto'
          }
        >
          <div className="w-3/4 h-full fixed top-0 right-0 bg-white-100 text-left px-8 pt-8 transform translate-x-0 leading-10 z-999 sm:relative sm:bg-white sm:z-0 sm:w-full  sm:text-center sm:py-0">
            {isShow && (
              <div className="mb-11">
                <span className="text-xl">MENU</span>
                <div className="absolute inset-y-0 right-8 top-8">
                  <AiOutlineCloseSquare
                    size="2rem"
                    onClick={() => setIsShow(!isShow)}
                  />
                </div>
              </div>
            )}
            <ul className="nav w-full">
              <li className="nav-item sm:inline-block px-4">
                <Link to="/" className="nav-link ">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item sm:inline-block px-4">
                <div className="relative ">
                  <Link to="/" className="nav-link hover:text-blue">
                    Áo nam
                  </Link>
                </div>
                <div className="absolute z-50 menu bg-white text-left shadow">
                  <div className="py-2 border-b border-gray">
                    <Link to="/category=1" className="nav-link hover:text-blue">
                      Áo Phông
                    </Link>
                  </div>
                  <div className="py-2 border-b shadow border-gray">
                    <Link to="/category=2" className="nav-link hover:text-blue">
                      Áo Sơ Mi
                    </Link>
                  </div>
                </div>
              </li>
              <li className="nav-item sm:inline-block px-4">
                <div className="relative ">
                  <Link to="/" className="nav-link hover:text-blue">
                    Quần nam
                  </Link>
                </div>
                <div className="absolute z-50 menu bg-white text-left shadow">
                  <div className="py-2 border-b border-gray">
                    <Link to="/category=3" className="nav-link hover:text-blue">
                      Quần Jean
                    </Link>
                  </div>
                  <div className="py-2 border-b shadow border-gray">
                    <Link to="/category=4" className="nav-link hover:text-blue">
                      Quần Jogger
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 justify-end -ml-4 flex md:w-auto">
          <div className="cart-icon ml-4">
            {carts.length < 1 ? (
              ''
            ) : (
              <div className="w-6 h-6 bg-red text-white text-center rounded-full absolute -right-2 top-3">
                {carts.length}
              </div>
            )}
            <Link to="/cart" className="icon-link">
              <HiOutlineShoppingCart size="2rem" />
            </Link>
          </div>
          {auth && (
            <div className="user-info ml-4">
              <div className="user-name">{user.fullName} </div>
              <div className="user-actions">
                <div className="user-action_logout">
                  <Link to="/login" onClick={() => logoutHandler()}>
                    Logout
                  </Link>
                </div>
                <div className="user-action_order">
                  <Link to="/order-history">Lịch sử đặt hàng</Link>
                </div>
              </div>
            </div>
          )}
          {!auth && (
            <div className="account-icon ml-4">
              <Link to="/login" className="icon-link">
                <RiAccountPinCircleFill size="2rem" />
              </Link>
            </div>
          )}
          <div className="sm:hidden ml-4">
            <GrMenu size="2rem" onClick={() => setIsShow(!isShow)} />
          </div>
        </div>
      </div>

      {location.pathname === '/' ? <Banner /> : ''}
    </header>
  );
};

export default Header;
