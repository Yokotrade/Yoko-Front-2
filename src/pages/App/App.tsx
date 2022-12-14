import Header from "components/Header";
import { useRouting } from "hooks";

const App = (): JSX.Element => {
  const Routing = useRouting();
  return (
    <>
      <Header />
      {Routing}
    </>
  );
};

export default App;
