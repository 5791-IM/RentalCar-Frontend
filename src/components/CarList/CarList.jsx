import { useState, useEffect } from "react";
import { CardCar } from "../CardCar/CardCar.jsx"; // твоя карточка машины
import css from "./CarList.module.css";

export const CarList = () => {
  // локальное состояние для хранения машин
  const [cars, setCars] = useState([]);
  // состояние для статуса загрузки
  const [loading, setLoading] = useState(true);
  // состояние для ошибок
  const [error, setError] = useState(null);

  // useEffect выполняется 1 раз при монтировании компонента
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch(
          "https://car-rental-api.goit.global/cars?page=1&limit=12"
        );

        if (!res.ok) {
          throw new Error("Failed to fetch cars");
        }

        const data = await res.json();

        // API возвращает объект, в котором есть поле cars (массив машин)
        setCars(data.cars);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  // пока идёт загрузка
  if (loading) {
    return <p>Loading cars...</p>;
  }

  // если ошибка
  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  // основной рендер
  return (
    <ul className={css.list}>
      {cars.map((car) => (
        <li key={car.id} className={css.item}>
          <CardCar
            brand={car.make}
            model={car.model}
            year={car.year}
            price={car.rentalPrice}
            location={car.address}
            company={car.rentalCompany}
            type={car.type}
            mileage={car.mileage}
            img={car.img}
          />
        </li>
      ))}
    </ul>
  );
};

// import { useEffect, useState } from "react";
// import { CardCar } from "../CardCar/CardCar.jsx";

// export const CarList = () => {
//   const [cars, setCars] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchCars = async () => {
//       try {
//         const res = await fetch("https://car-rental-api.goit.global/cars");

//         if (!res.ok) {
//           throw new Error("Failed to fetch cars");
//         }

//         const data = await res.json();
//         console.log("API data:", data);
//         setCars(data.cars);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCars();
//   }, []);

//   if (loading) return <p>Loading cars...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <ul>
//       {cars.map((car) => (
//         <li key={car.id}>
//           <CardCar
//             brand={car.make}
//             model={car.model}
//             year={car.year}
//             price={car.rentalPrice}
//             location={car.address}
//             company={car.rentalCompany}
//             type={car.type}
//             mileage={car.mileage}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// };
