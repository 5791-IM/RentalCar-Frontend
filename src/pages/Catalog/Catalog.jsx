import { FilterForm } from "../../components/Filter/Filter.jsx";
import { CarList } from "../../components/CarList/CarList.jsx";
import Header from "../../components/Header/Header.jsx";

const CatalogPage = () => {
  return (
    <div>
      <Header />
      <FilterForm />
      <CarList />
      {/* <LoadMore /> */}
    </div>
  );
};

export default CatalogPage;
