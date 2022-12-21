import Routes from "components/Routes";
import { useModals } from "hooks";

const App = (): JSX.Element => {
  const modal = useModals();

  return (
    <>
      {modal}
      <Routes />
    </>
  );
};

export default App;
