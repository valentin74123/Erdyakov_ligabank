import React from "react";
import MainLogo from '../main-logo/main-logo';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper padding">
        <MainLogo />

        <nav className="header__navigation navigation">
          <ul className="navigation__list list">
            <li className="navigation__item">
              <a className="navigation__item-link link" href="#">Услуги</a>
            </li>

            <li className="navigation__item">
              <a className="navigation__item-link link" href="#">Рассчитать кредит</a>
            </li>

            <li className="navigation__item">
              <a className="navigation__item-link navigation__item-link--active link" href="#">Конвертер валют</a>
            </li>

            <li className="navigation__item">
              <a className="navigation__item-link link" href="#">Контакты</a>
            </li>

            <li className="navigation__item">
              <a className="navigation__item-link link" href="#">Задать вопрос</a>
            </li>
          </ul>
        </nav>

        <div className="header__login">
          <a  className="header__login-link link" href="#">Войти в Интернет-банк</a>
        </div>
      </div>    
    </header>
  );
};

export default Header;
