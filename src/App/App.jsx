import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout.jsx";

const HomePage = lazy(() => import("../pages/Home/Home.jsx"));
const CatalogPage = lazy(() => import("../pages/Catalog/Catalog.jsx"));
const DetailsPage = lazy(() => import("../pages/Details/Details.jsx"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="catalog/:id" element={<DetailsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
