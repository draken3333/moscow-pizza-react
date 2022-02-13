import React from "react";
import logo from "../assets/img/common/logo.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const pizzaItem = useSelector((state) => state.pizzas.pizza);

  return (
    <header className="header-page">
      <div className="container header-page__container">
        <div className="header-page__start">
          <Link to="/" className="logo">
            <img
              className="logo__img lazy"
              src={logo}
              alt="Лого "
              width="127"
              height="21"
            />
          </Link>
        </div>
        <div className="header-page__end">
          <nav className="header-page__nav">
            <ul className="header-page__ul">
              <li className="header-page__li">
                <a className="header-page__link" href="header">
                  <span className="header-page__text">пицца</span>
                </a>
              </li>
              <li className="header-page__li">
                <a className="header-page__link" href="header">
                  <span className="header-page__text">о нас</span>
                </a>
              </li>
              <li className="header-page__li">
                <a className="header-page__link" href="header">
                  <span className="header-page__text">контакты</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="phone">
            <Link className="phone__item header-page__phone" to="/cart">
              Корзина
              <span className="cart-count">
                {pizzaItem.length > 0 &&
                pizzaItem.length}
              </span>
            </Link>
          </div>
          <div className="header-page__hamburger">
            <button className="btn-menu" type="button" data-popup="popup-menu">
              <span className="btn-menu__box">
                <span className="btn-menu__inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
