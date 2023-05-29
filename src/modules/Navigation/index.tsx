import MapNavigation from "./MapNavigation";
import NavigationSidebar from "./NavigationSidebar";

const Navigation = () => {
  return (
    <div className="h-[100vh] p-10 bg-[#4f4a9e2b]">
      <div className="h-full grid grid-cols-12 bg-white shadow-card rounded-lg overflow-hidden">
        <div className="col-span-3">
          <NavigationSidebar />
        </div>
        <div className="col-span-9">
          <div className="h-full bg-black">
            <MapNavigation />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
