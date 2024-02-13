
import Login from "./Components/Login";
import useGetChannels from "./Hooks/useGetChannels";
import  "../src/index.css"
const App = () => {

  useGetChannels();
  return (
    <>
     <Login />
    </>
  );
};

export default App;