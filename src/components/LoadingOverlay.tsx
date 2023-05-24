import LoadingIcon from "../icons/LoadingIcon";

const LoadingOverlay = () => {
  return (
    <div className="absolute inset-0">
      <div className="h-full flex justify-center items-center bg-[#000000a6]">
        <LoadingIcon
          width={30}
          height={30}
          className="animate-spin"
          fill="white"
        />
      </div>
    </div>
  );
};

export default LoadingOverlay;
