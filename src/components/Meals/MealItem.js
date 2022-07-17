import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

export default function MealItem(props) {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.price}>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
}
