
import Login from "./Components/Login";
import useGetChannels from "./Hooks/useGetChannels";
import  "../src/index.css"
import Feed from "./Components/Feed";
import Routings from "./Components/Routings";

const App = () => {

  useGetChannels();
 
  return (
    <>
   <Routings />
    </>
  );
};

export default App;

