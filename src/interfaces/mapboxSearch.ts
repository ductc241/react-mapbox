interface IMapboxFeature {
    id: string,
    center: number[],
    geometry: { type: string, coordinates: number[] },
    place_name: string,
    text: string;
}

interface IMapboxSearch {
    type: string,
    features: IMapboxFeature[]
}

export type { IMapboxSearch, IMapboxFeature }