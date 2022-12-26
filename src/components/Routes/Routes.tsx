import { useMemo, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "store/hook";
import { isAuthUser } from "store/Auth";
import { deactiveModal } from "store/Modals";
import Lending from "pages/Lending";
import General from "pages/General";
import Statistics from "pages/Statistics";
import Referral from "pages/Referral";
import Commission from "pages/Commission";
import Header from "components/Header";
import SideBar from "components/SideBar";
import Footer from "components/Footer";
import {
  MAIN_PATH,
  GENERAL_PATH,
  STATISTICS_PATH,
  REFERRAL_PATH,
  COMMISSION_PATH,
} from "constants/path";
import * as Styled from "./Routing.styled";

const Routing = (): JSX.Element => {
  const isAuth = useAppSelector(isAuthUser);
  console.log(isAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(deactiveModal());
    }
  }, [isAuth]);

  return useMemo(() => {
    if (!isAuth) {
      return (
        <Routes>
          <Route path={MAIN_PATH} element={<Lending />} />
        </Routes>
      );
    } else {
      return (
        <Styled.MainWrapper>
          <Header />
          <Styled.ActionsWrapper>
            <SideBar />
            <Styled.ContentWrapper>
              <Routes>
                <Route path={GENERAL_PATH} element={<General />} />
                <Route path={STATISTICS_PATH} element={<Statistics />} />
                <Route path={REFERRAL_PATH} element={<Referral />} />
                <Route path={COMMISSION_PATH} element={<Commission />} />
              </Routes>
              <Footer />
            </Styled.ContentWrapper>
          </Styled.ActionsWrapper>
        </Styled.MainWrapper>
      );
    }
  }, [isAuth]);
};

export default Routing;
