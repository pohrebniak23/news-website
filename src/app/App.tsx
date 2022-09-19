import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { HomePage } from "pages/HomePage";
import { useTheme } from "shared/contexts";
import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", { hovered: true }, [theme])}>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>

      <button onClick={toggleTheme}>Toggle theme</button>

      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<HomePage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
