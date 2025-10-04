import { useState } from "react";
import css from "./Filter.module.css";

export const FilterForm = () => {
  const [values, setValues] = useState({
    brand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
  });

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setValues({
      brand: "",
      price: "",
      mileageFrom: "",
      mileageTo: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div>
        <p>Car brand</p>
        <input
          type="text"
          name="brand"
          value={values.brand}
          onChange={handleChange}
          placeholder="Choose a brand"
        />
      </div>
      <div>
        <p>Price/ 1 hour</p>
        <input
          type="number"
          name="price"
          value={values.price}
          onChange={handleChange}
          placeholder="Choose a price"
        />
      </div>
      <div>
        <p>Car mileage / km</p>
        <input
          type="number"
          name="mileageFrom"
          value={values.mileageFrom}
          onChange={handleChange}
          placeholder="From"
        />
        <input
          type="number"
          name="mileageTo"
          value={values.mileageTo}
          onChange={handleChange}
          placeholder="To"
        />
      </div>
      <button type="submit">Search</button>
    </form>
  );
};
