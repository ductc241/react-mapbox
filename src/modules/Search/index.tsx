import SearchRecommend from "./SearchRecommend";
import MapBox from "./MapSearch";
import SearchBar from "./SearchBar";
import { ToastContainer } from "react-toastify";

const Search = () => {
  return (
    <div className="bg-[#4f4a9e2b] lg:h-screen p-5 lg:p-10">
      <div className="h-full bg-white rounded-lg">
        <div className="flex flex-col h-full">
          <div className="border-b border-gray-300">
            <SearchBar />
          </div>

          <div className="grid grid-cols-12 flex-grow overflow-hidden">
            <div className="col-span-12 lg:col-span-5 xl:col-span-3 order-last lg:order-none">
              <SearchRecommend />
            </div>

            <div className="col-span-12 lg:col-span-7 xl:col-span-9 order-first lg:order-none p-6 lg:py-8 lg:pr-6">
              <div className="h-[400px] lg:h-full rounded-lg overflow-hidden bg-black">
                <MapBox />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Search;
