import { useSelector } from "react-redux";
import BottomNavbar from "./BottomNavbar";

const SearchResult = () => {
  const searchData = useSelector((store) => store.searchData?.items[0]?.snippet);
 
  
  return (
    <>
      <div>
        <h1 className="text-5xl text-black"> {
        `Hi ${searchData?.channelTitle}`} 
        </h1>
        <img src={searchData?.thumbnails?.default?.url} />
         <p>{searchData?.description}</p>
      </div>
      <BottomNavbar />
    </>
  );
};

export default SearchResult;
