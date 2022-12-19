import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "constants/routing";

export const useRouting = (): JSX.Element => {
  const isAuth = true;

  return useMemo(
    () => (
      <Routes>
        {routes.map(
          ({ path, Element, isAuthValue, childrenRoutes }) =>
            isAuth === isAuthValue && (
              <Route key={path} element={<Element />} {...{ path }}>
                {childrenRoutes?.map((children) => {
                  return <Route key={children.path} element={<children.Element />} path={children.path} />
                })}
              </Route>
            )
        )}
      </Routes>
    ),
    [isAuth]
  );
};
