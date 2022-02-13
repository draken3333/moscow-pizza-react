import React from "react";

import testImg from "../../assets/img/section-catalog/1.png";
import plus from "../../assets/img/section-cart/free-icon-plus-149145.png";
import minus from "../../assets/img/section-cart/free-icon-minus-149146.png";

const index = ({id, imageUrl, name, size, price}) => {
  return (
    <div className="cart-card__box">
      <div className="cart-card__box-images">
        <img src={imageUrl} alt="card images" />
      </div>
      <div className="cart-card__box-description">
        <div className="cart-card__box-description-text__container">
          <h2 className="cart-card__box-description__name">{name}</h2>
          <h2 className="cart-card__box-description__name">Цена:  {price} &#8381;</h2>
          <div className="items">
            <p className="cart-card__box-description__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
              aspernatur veniam saepe magnam necessitatibus voluptatum ducimus
              provident quis dignissimos eos? Minima voluptatibus quia hic
              veniam quaerat ullam voluptate nisi. Magni!
            </p>
            <div className="cart-card__box-info">
              <img src={plus} alt="plus" />
              <span>1</span>
              <img src={minus} alt="minus" /> 
            </div>
          </div>
        </div>
      </div>

      <span className="escp">&#10006;</span>
      <span className="size">
        <div>Размер: {size}</div>
      </span>
    </div>
  );
};

export default index;
