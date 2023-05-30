import { createContext } from "react";
import { INavigationConText, ISearchContext } from "./store.type";
import { IMapboxFeature } from "../interfaces/mapboxSearch";
import { IRoute } from "../interfaces/route";

// Navigation
const NavigationDefaultValue: INavigationConText = {
  cordinatesList: [],
  setCordinatesList: (state: number[][]) => { },

  recommendRoutes: [],
  setRecommendRoutes: (state: IRoute[]) => { }
} as INavigationConText;

const NavigationContext = createContext<INavigationConText>(
  NavigationDefaultValue,
);

// Search
const SearchDefaultValue: ISearchContext = {
  recommendAddress: [],
  setRecommendAddress: (state: IMapboxFeature[]) => { },

  selectedAddress: undefined,
  setSelectedAddress: (state: IMapboxFeature) => { }
} as ISearchContext;

const SearchContext = createContext<ISearchContext>(SearchDefaultValue);

export { NavigationContext, NavigationDefaultValue, SearchContext, SearchDefaultValue };
