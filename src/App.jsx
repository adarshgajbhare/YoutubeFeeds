import useGetChannels from "./Hooks/useGetChannels";
import "../src/index.css";

import Routings from "./Components/Routings";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

const App = () => {
  useGetChannels();

  return (
    <>
      <Provider store={appStore}>
        {" "}
        <Routings />
      </Provider>
    </>
  );
};

export default App;
