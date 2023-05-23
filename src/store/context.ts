import { createContext } from "react";
import { INavigationConText, ISearchContext } from "./store.type";

// Navigation
const NavigationDefaultValue = {};
const NavigationContext = createContext<INavigationConText>(
  NavigationDefaultValue,
);

// Search
const SearchDefaultValue = {};
const SearchContext = createContext<ISearchContext>(SearchDefaultValue);

export { NavigationContext, NavigationDefaultValue, SearchContext, SearchDefaultValue };
