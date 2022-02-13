import React from "react";
import classNames from "classnames";

const CatalogCart = ({
  id,
  imageUrl,
  name,
  sizes,
  price,
  addToCartOnHendle,
}) => {
  const [size, setSize] = React.useState(sizes[0]);

  const hendleSize = (num) => {
    setSize(num);
  };

  
  return (
    <div className="catalog__item" data-category="mushrooms">
      <div className="product catalog__product">
        <img src={imageUrl} alt="Пицца" />

        <div className="product__content">
          <h3 className="product__title">{name}</h3>

          <p className="product__description">
            Салями, картофель и морковь, огурцы маринованные, моцарелла,
            цыпленок, ветчина и французский соус
          </p>
        </div>

        <footer className="product__footer">
          <div className="product__sizes">
            {sizes.map((s, index) => (
              <button
                onClick={() => hendleSize(s)}
                key={index}
                className={classNames("product__size", {
                  "is-active": size === s,
                })}
              >
                {s}см
              </button>
            ))}
          </div>

          <div className="product__bottom">
            <div className="product__price">
              <span className="product__price-value">{price}</span>
              <span className="product__currency">&#8381;</span>
            </div>

            <button
              className="btn product__btn"
              type="button"
              onClick={() => addToCartOnHendle(name, price, size, imageUrl, id)}
            >
              заказать
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CatalogCart;
