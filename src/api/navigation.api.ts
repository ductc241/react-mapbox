import { AxiosResponse } from "axios";
import instance from "./instance";
import { IDireactionResponse } from "../interfaces/route";

const NavigationService = {
  direction: (coordinates: number[][]): Promise<AxiosResponse<IDireactionResponse, any>> => {
    const queryCoordinates = coordinates.map(c => c.join(",")).join(";")
    const url = `directions/v5/mapbox/driving/${queryCoordinates}`

    return instance.get(`${url}?alternatives=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=${import.meta.env.VITE_MAPBOX_TOKEN}`)
  }
}

export default NavigationService;