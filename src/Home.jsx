import React from "react";

import { Category, CatalogCard, About, Contacts, Top } from "./components/index";
import db from "./db.json";

import { addPizzas } from "./features/pizzas/pizzasSlicer";
import { useDispatch } from "react-redux";

const Home = () => {
  const [types, setTypes] = React.useState(null);

  const typeOfCategory = (type) => {
    setTypes(type);
  };  

  const dispatch = useDispatch();

  const [pizzaAdd, setPizzaAdd] = React.useState(null);



  const addToCartOnHendle = (name, price, size, imageUrl, id) => {
    setPizzaAdd({name, price, size, imageUrl, id})
  }




  React.useEffect(() => {

    dispatch(addPizzas(pizzaAdd));



  }, [pizzaAdd]);



  return (
    <>
      <Top />
      <section className="section section-catalog">
        <div className="container">
          <Category typeOfCategory={typeOfCategory} />
          <div className="catalog">
            {db.pizzas
              .filter((item) =>
                types === null ? item : item.category === types
              )
              .map((obj, index) => (
                <CatalogCard key={index} {...obj} addToCartOnHendle={addToCartOnHendle} />
              ))}
          </div>
        </div>
      </section>
      <section className="section section-about">
        <About />
      </section>
      <section className="section section-contacts">
        <Contacts />
      </section>
    </>
  );
};

export default Home;
