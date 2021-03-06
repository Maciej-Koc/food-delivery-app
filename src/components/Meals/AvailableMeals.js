import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

export default function AvailableMeals(props) {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const mealArr = [];
    fetch("https://meal-639c1-default-rtdb.firebaseio.com/meals.json")
      .then((response) => response.json())
      .then((data) => {
        for (const key in data) {
          mealArr.push({
            id: key,
            key: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
        console.log("meal array", mealArr);
        setMeals(mealArr);
        setIsLoading(false);
      })
      .catch((error) => setError(error.message));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id} // this is new!
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && !error ? (
          <p className={classes.MealsLoading}>Loading...</p>
        ) : (
          <ul>{mealsList}</ul>
        )}
        {error && <p style={{ textAlign: "center" }}>{error}</p>}
      </Card>
    </section>
  );
}
