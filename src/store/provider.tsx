import {
  NavigationContext,
  NavigationDefaultValue,
  SearchContext,
  SearchDefaultValue,
} from "./context";
import { INavigationProps, ISearchProps } from "./store.type";

const NavigationProvider = ({ children }: INavigationProps) => {
  return (
    <NavigationContext.Provider value={NavigationDefaultValue}>
      {children}
    </NavigationContext.Provider>
  );
};

const SearchProvider = ({ children }: ISearchProps) => {
  return (
    <SearchContext.Provider value={SearchDefaultValue}>
      {children}
    </SearchContext.Provider>
  );
};

export { NavigationProvider, SearchProvider };
