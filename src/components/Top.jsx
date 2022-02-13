import React from "react";
import bg from "../assets/img/section-top/bg.jpg";

const Top = () => {
  return (
    <section className="section-top" style={{
        backgroundImage: `url(${bg})`
    }}>
      <div className="container section-top__container">
        <p className="section-top__info">от итальянского повара</p>
        <h1 className="section-top__title">Лучшая пицца в Москве</h1>
        <div className="section-top__btn">
          <button className="btn" type="button" data-scroll-to="section-catalog">
            Выбрать
          </button>
        </div>
      </div>
    </section>
  );
};

export default Top;
