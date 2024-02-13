
import Login from "./Components/Login";
import useGetChannels from "./Hooks/useGetChannels";
import  "../src/index.css"
import Feed from "./Components/Feed";

const App = () => {

  useGetChannels();
 
  return (
    <>
     {/* <Login /> */}
      <Feed/>
    </>
  );
};

export default App;

