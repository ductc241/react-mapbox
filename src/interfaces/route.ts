export interface IRoute {
  weight_name: "auto",
  weight: number,
  duration: number, // total duration
  distance: number, // total distance

  // https://docs.mapbox.com/api/navigation/directions/#route-leg-object
  legs: [
    {
      // https://docs.mapbox.com/api/navigation/directions/#route-step-object
      steps: [
        {
          // https://docs.mapbox.com/api/navigation/directions/#step-maneuver-object
          maneuver: {
            type: string,
            instruction: string,
            modifier?: string,
            location: [number, number]
          },
          name: string,
          duration: number,
          distance: number,
          driving_side: string,
          weight: number,
          mode: string,
        },
      ],
      summary: string
    }
  ],
  geometry: {
    coordinates: [number, number][],
    type: string
  }
}


export interface IDireactionResponse {
  routes: IRoute[],
  waypoints: {
    distance: number,
    name: string,
    location: [number, number]
  }[],
  code: string;
  uuid: string
}