import { Dispatch, ReactNode, SetStateAction } from "react"
import { IMapboxFeature } from "../interfaces/mapboxSearch"
import { IRoute } from "../interfaces/route"

export interface INavigationProps {
    children: ReactNode
}

export interface ISearchProps {
    children: ReactNode
}

export interface INavigationConText {
    cordinatesList: number[][],
    setCordinatesList: Dispatch<SetStateAction<number[][]>>,

    recommendRoutes: IRoute[],
    setRecommendRoutes: Dispatch<SetStateAction<IRoute[]>>
};

export interface ISearchContext {
    recommendAddress: IMapboxFeature[],
    setRecommendAddress: Dispatch<SetStateAction<IMapboxFeature[]>>,

    selectedAddress: IMapboxFeature | undefined,
    setSelectedAddress: Dispatch<React.SetStateAction<IMapboxFeature | undefined>>,
};