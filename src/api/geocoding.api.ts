import { AxiosResponse } from "axios";
import instance from "./instance";
import { IMapboxSearch } from "../interfaces/mapboxSearch";

export const search = (text: string): Promise<AxiosResponse<IMapboxSearch, any>> => {
  return instance.get(`geocoding/v5/mapbox.places/${text}.json?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`)
}

export const geocodingService = {
  forward: (text: string): Promise<AxiosResponse<IMapboxSearch, any>> => {
    return instance.get(`geocoding/v5/mapbox.places/${text}.json?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`)
  },

  reverse: (lng: number, lat: number): Promise<AxiosResponse<IMapboxSearch, any>> => {
    return instance.get(`geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`)
  }
}