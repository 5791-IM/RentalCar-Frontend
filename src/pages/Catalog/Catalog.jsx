import { FilterForm } from "../../components/Filter/Filter.jsx";
import { CarList } from "../../components/CarList/CarList.jsx";
import Header from "../../components/Header/Header.jsx";
import css from "./Catalog.module.css";

const CatalogPage = () => {
  return (
    <div className={css.catalogPage}>
      <Header />
      <FilterForm />
      <CarList />
      <button className={css.loadMore}>Load More</button>
    </div>
  );
};

export default CatalogPage;
