import clsx from "clsx";
import MarkerIcon from "../../icons/MarkerIcon";
import { IMapboxFeature } from "../../interfaces/mapboxSearch";
import { useContext } from "react";
import { SearchContext } from "../../store/context";

interface IAddessCardProps {
  address: IMapboxFeature;
}

const AddressCard = ({ address }: IAddessCardProps) => {
  const { selectedAddress, setSelectedAddress } = useContext(SearchContext);

  const handleClick = () => {
    if (selectedAddress?.id === address.id) {
      setSelectedAddress(undefined);
      return;
    }

    setSelectedAddress(address);
  };

  return (
    <div
      className="address-card relative rounded-lg mb-7 bg-white shadow-card"
      onClick={handleClick}
    >
      <div
        className={clsx(
          "py-3 px-5 hover:cursor-pointer hover:bg-[#feefec]",
          selectedAddress?.id === address.id && "bg-[#feefec]",
        )}
      >
        <p className="text-xl font-semibold mb-2">{address.text}</p>
        <div className="flex items-center gap-2">
          <div>
            <MarkerIcon width={16} />
          </div>
          <p className="text-gray-500 text-sm">{address.place_name}</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
