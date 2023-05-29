import { useEffect, useState } from "react";
import { NavigationContext, SearchContext } from "./context";
import { INavigationProps, ISearchProps } from "./store.type";
import { IMapboxFeature } from "../interfaces/mapboxSearch";
import NavigationService from "../api/navigation.api";

const NavigationProvider = ({ children }: INavigationProps) => {
  const [cordinatesList, setCordinatesList] = useState<number[][]>([]);
  const [recommendRoutes, setRecommendRoutes] = useState<IRoute[]>([]);

  useEffect(() => {
    if (cordinatesList.length < 2) return;

    const getData = async () => {
      const { data } = await NavigationService.direction(cordinatesList);
      setRecommendRoutes(data.routes);
    };

    getData();
  }, [cordinatesList]);

  return (
    <NavigationContext.Provider
      value={{
        cordinatesList,
        setCordinatesList,
        recommendRoutes,
        setRecommendRoutes,
      }}
    >
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
