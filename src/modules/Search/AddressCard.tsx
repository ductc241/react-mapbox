import MarkerIcon from "../../icons/MarkerIcon";

const AddressCard = () => {
  return (
    <div className="address-card relative rounded-lg mb-7 shadow-card overflow-hidden">
      <div className="py-3 px-5 hover:cursor-pointer hover:bg-[#feefec]">
        <p className="text-xl font-semibold mb-2">Central Park</p>
        <div className="flex items-center gap-2">
          <MarkerIcon width={16} />
          <p className="text-gray-500 text-sm">
            Central Park, New York, New York, United States
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
