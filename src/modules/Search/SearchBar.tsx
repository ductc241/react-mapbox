import { useContext, useEffect, useState } from "react";
import SearchIcon from "../../icons/SearchIcon";
import useDebounce from "../../hooks/useDebouce";
import { search } from "../../api/geocoding.api";
import { AxiosError } from "axios";
import { isAxiosError } from "axios";
import { IMapboxError } from "../../interfaces/mapboxError";
import { SearchContext } from "../../store/context";
import { toast } from "react-toastify";

const SearchBar = () => {
  const { setRecommendAddress } = useContext(SearchContext);

  const [searchTern, setSearchTern] = useState<string>();
  const debouncedSearchTerm = useDebounce(searchTern, 800);

  useEffect(() => {
    const getSearchData = async () => {
      if (!searchTern) return;

      try {
        const { data } = await search(searchTern);
        setRecommendAddress(data.features);
      } catch (error) {
        if (!isAxiosError(error)) return;

        const errMapbox: AxiosError<IMapboxError, any> = error;
        toast(errMapbox.response?.data.message);
      }
    };

    getSearchData();
  }, [debouncedSearchTerm]);

  return (
    <div className="relative flex items-center">
      <div className="pl-5">
        <SearchIcon width={20} height={20} />
      </div>

      <input
        className="w-full outline-none p-5"
        type="text"
        placeholder="Search your places..."
        onChange={e => setSearchTern(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
