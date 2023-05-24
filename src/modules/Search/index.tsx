import SearchRecommend from "./SearchRecommend";
import MapBox from "../../components/Map";
import SearchBar from "./SearchBar";

const Search = () => {
  return (
    <div className="bg-[#cad1dd] sm:h-screen p-5 lg:p-10">
      <div className="h-full bg-white rounded-lg overflow-hidden">
        <div className="flex flex-col h-full">
          <div className="border-b border-gray-300">
            <SearchBar />
          </div>

          <div className="grid grid-cols-12 flex-grow">
            <div className="col-span-12 lg:col-span-3 order-last lg:order-none">
              <SearchRecommend />
            </div>

            <div className="col-span-12 lg:col-span-9 order-first lg:order-none py-8 pr-6">
              <div className="h-full rounded-lg overflow-hidden">
                <MapBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
