import React from 'react';
import blackCard from '../../img/card-black.png';
import whiteCard from '../../img/card-white.png';

const Banner = () => {
  return(
    <section className="banner">
      <div className="banner__wrapper">
        <img className="banner__card banner__card--white" src={whiteCard} width="335" height="226" alt="Белая банковская карта" />
        <img className="banner__card banner__card--black" src={blackCard} width="335" height="226" alt="Черная банковская карта" />
        
        <h2 className="banner__title text-margin">Лига Банк</h2>
        <p className="banner__description text-margin">Кредиты на любой случай</p>
        <a className="banner__button link" href="#">Рассчитать кредит</a>
      </div>
    </section>
  );
};

export default Banner;
