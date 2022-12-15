import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "constants/routing";

export const useRouting = (): JSX.Element => {
  const isAuth = false;

  return useMemo(
    () => (
      <Routes>
        {routes.map(
          ({ path, Element, isAuthValue }) =>
            isAuth === isAuthValue && (
              <Route key={path} element={<Element />} {...{ path }} />
            )
        )}
      </Routes>
    ),
    [isAuth]
  );
};
