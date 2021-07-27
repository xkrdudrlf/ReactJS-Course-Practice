import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useCallback, useEffect, useState } from "react";

const URL = `https://react-http-1c1fc-default-rtdb.asia-southeast1.firebasedatabase.app`;

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  const fetchMeals = useCallback(async () => {
    const res = await fetch(`${URL}/meals.json`);

    if (!res.ok) {
      throw new Error("Something went wrong!");
    }
    const data = await res.json();

    const loadedMeals = [];
    for (const key in data) {
      loadedMeals.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }

    setMeals(loadedMeals);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMeals().catch((e) => {
      setIsLoading(false);
      setHttpError(e.message);
    });
  }, [fetchMeals]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (isLoading)
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );

  if (httpError)
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
