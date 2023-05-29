import { useContext } from "react";
import TextField from "../../../components/TextField";
import MarkerIcon from "../../../icons/MarkerIcon";
import TargetIcon from "../../../icons/TargetIcon";
import { NavigationContext } from "../../../store/context";

const PlacePointSelecter = () => {
  const { cordinatesList } = useContext(NavigationContext);

  return (
    <div className="mb-8 p-7 shadow-md">
      <div className="flex items-center gap-3 mb-5">
        <TargetIcon width={18} height={18} fill="gray" />
        <TextField
          containerClass="flex-grow"
          value={cordinatesList[0]?.join(",")}
          placeholder="Choose starting point by click on the map"
          disabled
        />
      </div>

      <div className="flex items-center gap-3 mb-5">
        <MarkerIcon width={18} height={18} />
        <TextField
          containerClass="flex-grow"
          value={cordinatesList[1]?.join(",")}
          placeholder="Chose destinatons"
          disabled
        />
      </div>

      <div className="flex justify-center">
        <p className="text-center text-rose-500 font-semibold hover:cursor-pointer">
          Clear all coordinates
        </p>
      </div>
    </div>
  );
};

export default PlacePointSelecter;
