import { useContext } from "react";
import AddressCard from "./AddressCard";
import LoadingOverlay from "../../components/LoadingOverlay";
import { SearchContext } from "../../store/context";

const SearchRecommender = () => {
  const { recommendAddress, selectedAddress } = useContext(SearchContext);

  return (
    <div className="relative h-full px-6 py-8">
      {recommendAddress.length === 0 && (
        <p className="text-gray-400">
          Enter your place in the search bar, the results will be display
          here...
        </p>
      )}

      {recommendAddress.map(address => (
        <AddressCard address={address} key={address.id} />
      ))}
    </div>
  );
};

export default SearchRecommender;
