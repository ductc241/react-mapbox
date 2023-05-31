import {
  ChangeEvent,
  Ref,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { debounce } from "throttle-debounce";

import TextField from "../../../components/TextField";
import MarkerIcon from "../../../icons/MarkerIcon";
import TargetIcon from "../../../icons/TargetIcon";
import { NavigationContext } from "../../../store/context";
import { IMapboxFeature } from "../../../interfaces/mapboxSearch";
import { geocodingService } from "../../../api/geocoding.api";

const PlacePointSelecter = () => {
  const { cordinatesList, setCordinatesList, setRecommendRoutes } =
    useContext(NavigationContext);

  const [suggestAddress, setSuggestAddress] = useState<IMapboxFeature[]>([]);
  const [inputSelecetd, setInputSelecetd] = useState<number | undefined>();

  const [state, setState] = useState<number[][]>([]);

  const handleClick = () => {
    setCordinatesList([]);
    setRecommendRoutes([]);
  };

  const handleChange = debounce(500, (e: ChangeEvent<HTMLInputElement>) => {
    const getSuggestAddress = async () => {
      const { data } = await geocodingService.forward(e.target.value);
      setSuggestAddress(data.features);
    };

    getSuggestAddress();
  });

  const handleSelecAddress = (address: IMapboxFeature) => {
    if (inputSelecetd === undefined) return;

    const list = [...cordinatesList];
    list[inputSelecetd] = address.center;

    setCordinatesList(list);
    setSuggestAddress([]);
  };

  useEffect(() => {
    setState(cordinatesList);
  }, [cordinatesList]);

  return (
    <div className="shadow-md">
      <div className="p-7">
        <div className="flex items-center gap-3 mb-5">
          <TargetIcon width={18} height={18} fill="gray" />
          <TextField
            containerClass="flex-grow"
            value={state[0]?.join(",")}
            placeholder="Choose starting point by click on the map"
            onChange={e => handleChange(e)}
            onFocus={() => setInputSelecetd(0)}
          />
        </div>

        <div className="flex items-center gap-3">
          <MarkerIcon width={18} height={18} fill="red" />
          <TextField
            containerClass="flex-grow"
            placeholder="Chose destinatons"
            value={state[1]?.join(",")}
            onChange={e => handleChange(e)}
            onFocus={() => setInputSelecetd(1)}
          />
        </div>
      </div>

      {cordinatesList.length > 0 && (
        <div className="flex justify-center pb-5">
          <p
            className="text-center text-rose-500 font-semibold hover:cursor-pointer"
            onClick={handleClick}
          >
            Clear all coordinates
          </p>
        </div>
      )}

      <div>
        {suggestAddress.map(address => (
          <div
            className="flex items-center gap-5 py-3 px-7 hover:bg-gray-200 hover:cursor-pointer"
            key={address.id}
            onClick={() => handleSelecAddress(address)}
          >
            <MarkerIcon width={15} height={15} className="shrink-0" />
            <p>{address.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacePointSelecter;
