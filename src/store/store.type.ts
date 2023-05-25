import { Dispatch, ReactNode, SetStateAction } from "react"
import { IMapboxFeature } from "../interfaces/mapboxSearch"

export interface INavigationProps {
    children: ReactNode
}

export interface ISearchProps {
    children: ReactNode
}

export interface INavigationConText { };

export interface ISearchContext {
    recommendAddress: IMapboxFeature[],
    setRecommendAddress: Dispatch<SetStateAction<IMapboxFeature[]>>,

    selectedAddress: IMapboxFeature | undefined,
    setSelectedAddress: Dispatch<React.SetStateAction<IMapboxFeature | undefined>>,
};