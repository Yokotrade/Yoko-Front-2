import { useRouting } from 'hooks'

const App = (): JSX.Element => {
  const Routing = useRouting()

  return <>{Routing}</>
};

export default App;
