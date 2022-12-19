import Header from "components/Header";
import Footer from "components/Footer";
import { useRouting } from "hooks";

const App = (): JSX.Element => {
  const isAuth = true;
  const Routing = useRouting();
  console.log(Routing);
  return (
    <>
      {!isAuth && <Header />}
      {Routing}
      {!isAuth && <Footer />}
    </>
  );
};

export default App;
