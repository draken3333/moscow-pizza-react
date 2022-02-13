import React from "react";
import aboutBg from "../assets/img/section-about/bg.jpg";

const About = () => {
  return (
    <>
      <img className="section-about__img lazy" src={aboutBg} alt="Про" />

      <div className="container section-about__container">
        <div className="section-about__content">
          <h2 className="page-title section-about__title">О нас</h2>
          <p className="section-about__text">
            Доставим вам горячую пиццу менее чем за час или пицца бесплатно. Мы
            готовим пиццу только из свежих продуктов. Каждый день мы покупаем
            свежие овощи, грибы и мясо.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
