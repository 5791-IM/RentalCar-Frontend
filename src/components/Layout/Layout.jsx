import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar/NavBar.jsx";
import css from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={css.container}>
      <NavBar />
      <main className={css.main}>
        <Outlet />
      </main>
    </div>
  );
};
