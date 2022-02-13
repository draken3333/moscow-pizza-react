import React from "react";
import { useSelector } from "react-redux";
import "./Cart.scss";
import CartItem from "./CartItem/index";

const Cart = () => {
  const pizzaItem = useSelector((state) => state.pizzas.pizza);

  console.log(pizzaItem);
 
  return (
    <>
      <div className="section-cart">
        <div className="container">
          <h1 className="cart-title">Ваши Заказы:</h1>
          <div className="cart-column">
            {pizzaItem.length > 0 ? (
              pizzaItem.map((item, index) => <CartItem key={index} {...item} />)
            ) : (
              <center>
           
                <h2 className="centre">Список ваших заказов пуст......</h2>
              </center>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
