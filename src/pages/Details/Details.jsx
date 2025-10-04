import { BookingForm } from "../../components/BookingForm/BookingForm.jsx";
import { CarInfo } from "../../components/CarInfo/CarInfo.jsx";
import { DetailsCar } from "../../components/Details/Details.jsx";
import Header from "../../components/Header/Header.jsx";
import css from "./Details.module.css";

const car = {
  id: 1,
  make: "BMW",
  model: "X5",
  year: 2022,
  description: "Comfortable and stylish SUV with premium features.",
  mileage: 25000,
  price: 100,
  location: "Kyiv, Ukraine",
};

const DetailsPage = () => {
  return (
    <div className={css.container}>
      <Header />
      <div className={css.wrapper}>
        <div className={css.leftSide}>
          <div className={css.img}></div>
          <BookingForm car={car} />
        </div>

        <div className={css.rightSide}>
          <DetailsCar car={car} />
          <CarInfo car={car} />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
