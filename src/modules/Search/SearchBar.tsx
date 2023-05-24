import SearchIcon from "../../icons/SearchIcon";

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <div className="pl-5">
        <SearchIcon width={20} height={20} />
      </div>
      <input
        className="w-full outline-none p-5"
        type="text"
        placeholder="Search your places..."
      />
    </div>
  );
};

export default SearchBar;
