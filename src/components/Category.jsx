import React from "react";
import classNames from "classnames";

const CatalogHead = ({ typeOfCategory }) => {
  const sortType = ["грибные", "мясные", "сырные"];
  const [sortId, setSortId] = React.useState(null);

  const getSortId = (id) => {
    setSortId(id);
    typeOfCategory(id);
  };

  return (
    <header className="section__header">
      <h2 className="page-title page-title--accent">Меню</h2>
      <nav className="catalog-nav">
        <ul className="catalog-nav__wrapper">
          <li className="catalog-nav__item">
            <button
              className={classNames("catalog-nav__btn", {
                "catalog-nav__btn is-active": sortId === null,
              })}
              type="button"
              onClick={() => getSortId(null)}
            >
              все
            </button>
          </li>

          {sortType.map((sorts, id) => (
            <li key={id} className="catalog-nav__item">
              <button
                onClick={() => getSortId(id)}
                className={classNames("catalog-nav__btn", {
                  "catalog-nav__btn is-active": sortId === id,
                })}
                type="button"
              >
                {sorts}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default CatalogHead;
