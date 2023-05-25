import { useState } from "react";
import {
  NavigationContext,
  NavigationDefaultValue,
  SearchContext,
  SearchDefaultValue,
} from "./context";
import { INavigationProps, ISearchProps } from "./store.type";
import { IMapboxFeature } from "../interfaces/mapboxSearch";

const NavigationProvider = ({ children }: INavigationProps) => {
  return (
    <NavigationContext.Provider value={NavigationDefaultValue}>
      {children}
    </NavigationContext.Provider>
  );
};

const SearchProvider = ({ children }: ISearchProps) => {
  const [recommendAddress, setRecommendAddress] = useState<IMapboxFeature[]>(
    [],
  );
  const [selectedAddress, setSelectedAddress] = useState<IMapboxFeature>();

  return (
    <SearchContext.Provider
      value={{
        recommendAddress,
        setRecommendAddress,
        selectedAddress,
        setSelectedAddress,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { NavigationProvider, SearchProvider };
