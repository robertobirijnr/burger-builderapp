import React from "react";
import "./Burger.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredints";

const Burger = props => {
  // transforming Objects into arrays
  let transformIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredients key={ingKey + i} type={ingKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformIngredients.length === 0) {
    transformIngredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className="Burger">
      <BurgerIngredients type="bread-top" />
      {transformIngredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
