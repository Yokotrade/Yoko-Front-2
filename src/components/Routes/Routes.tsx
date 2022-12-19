import { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import Lending from "pages/Lending";
import Main from "pages/Main";
import General from "pages/General";
import Statistics from "pages/Statistics";
import Referral from "pages/Referral";
import Commission from "pages/Commission";
import {
  MAIN_PATH,
  GENERAL_PATH,
  STATISTICS_PATH,
  REFERRAL_PATH,
  COMMISSION_PATH,
} from "constants/path";

const Routing = (): JSX.Element => {
  const isAuth = true;
  return useMemo(() => {
    if (!isAuth) {
      return (
        <Routes>
          <Route path={MAIN_PATH} element={<Lending />} />
        </Routes>
      );
    } else {
      return (
        <Routes>
          <Route path={MAIN_PATH} element={<Main />}>
            <Route index key={GENERAL_PATH} element={<General />} />
            <Route path={STATISTICS_PATH} element={<Statistics />} />
            <Route path={REFERRAL_PATH} element={<Referral />} />
            <Route path={COMMISSION_PATH} element={<Commission />} />
          </Route>
        </Routes>
      );
    }
  }, [isAuth]);
};

export default Routing;
