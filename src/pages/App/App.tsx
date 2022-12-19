import Header from "components/Header";
import Footer from "components/Footer";
import { useRouting } from "hooks";

const App = (): JSX.Element => {
  const isAuth = false;
  const Routing = useRouting();
  return (
    <>
      <Header />
      {Routing}
      {!isAuth && <Footer />}
    </>
  );
};

export default App;
