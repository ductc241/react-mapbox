import MapBox from "../components/Map";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-[#cad1dd] h-screen p-5 lg:p-10 overflow-hidden">
      <div className="h-full p-5 bg-white rounded-lg">
        <div className="grid grid-cols-12 gap-10 h-full">
          <div className="col-span-12 lg:col-span-6 order-last sm:order-none">
            <Outlet />
          </div>
          <div className="col-span-12 lg:col-span-6 order-first sm:order-none">
            <div className="rounded-lg overflow-hidden h-full">
              <MapBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
