import { SearchProvider } from "../store/provider";
import Search from "../modules/Search";

const SearchPage = () => {
  return (
    <SearchProvider>
      <Search />
    </SearchProvider>
  );
};

export default SearchPage;
