import { Outlet } from "react-router-dom";
import Header from "components/Header";
import SideBar from "components/SideBar";
import * as Styled from "./Main.styled";

const Main = () => {
  return (
    <Styled.MainWrapper>
      <Header />
      <Styled.ActionsWrapper>
        <SideBar />
        <Styled.ContentWrapper>
          <Outlet />
        </Styled.ContentWrapper>
      </Styled.ActionsWrapper>
    </Styled.MainWrapper>
  );
};

export default Main;
