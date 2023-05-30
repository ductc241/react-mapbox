import { useContext } from "react";
import { NavigationContext } from "../../../store/context";
import CarIcon from "../../../icons/CarIcon";
import clsx from "clsx";

const RecommendRoutes = () => {
  const { recommendRoutes } = useContext(NavigationContext);

  return (
    <div className="">
      {recommendRoutes.map((route, index) => (
        <div
          className={clsx(
            "p-3 mb-5 border-l-4 border-y border-y-gray-300 hover:cursor-pointer",
            index === 0 ? "border-l-blue-400" : "border-l-slate-300",
          )}
          key={index}
        >
          <div className="flex items-start gap-5">
            <CarIcon width={20} height={20} className="mt-[6px] shrink-0" />
            <div className="flex-grow">
              <div className="mb-2 flex justify-between font-semibold">
                <p>{route.legs[0].summary}</p>
                <p className="shrink-0">
                  {(route.duration / 60).toFixed(1)} min
                </p>
              </div>
              <div className="mb-5 flex justify-between text-gray-500 text-sm">
                {index === 0 && (
                  <p>Fastest route now due to traffic conditions</p>
                )}
                <p>{(route.distance / 1000).toFixed(2)} km</p>
              </div>
              <p className="text-blue-400 font-semibold">Detail</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecommendRoutes;
