import React from "react";
import AddressCard from "./AddressCard";
import LoadingOverlay from "../../components/LoadingOverlay";

const SearchRecommender = () => {
  return (
    <div className="relative h-full px-6 py-8">
      <AddressCard />
      <AddressCard />
      <AddressCard />
      <AddressCard />

      {/* <LoadingOverlay /> */}
    </div>
  );
};

export default SearchRecommender;
