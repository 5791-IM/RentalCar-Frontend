import { Accessories } from "../Accessories/Accessories.jsx";
import { Conditions } from "../Conditions/Conditions.jsx";
import { Specifications } from "../Specifications/Specifications.jsx";

export const CarInfo = ({ car }) => {
  return (
    <>
      <Conditions conditions={car.conditions} />
      <Specifications specificatons={car.specificatons} />
      <Accessories accessories={car.accessories} />
    </>
  );
};
