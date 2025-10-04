import css from "./CardCar.module.css";

export const CardCar = ({
  brand,
  model,
  year,
  price,
  location,
  company,
  type,
  mileage,
}) => {
  return (
    <article className={css.card}>
      <div className={css.content}>
        <div className={css.img}></div>
        <div className={css.title}>
          <h3>
            {brand} {model}, {year}
          </h3>
          <span className={css.price}>${price}</span>
        </div>

        <div>
          <p>
            {location} | {company}
          </p>

          <p>
            {type}|{mileage} km
          </p>
        </div>
      </div>
      <button type="button" className={css.btn}>
        Read More
      </button>
    </article>
  );
};
