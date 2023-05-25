import MapBox from "../modules/Search/MapSearch";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-[#cad1dd] sm:h-screen p-5 lg:p-10 overflow-hidden">
      <div className="h-full p-5 bg-white rounded-lg">
        <div className="grid grid-cols-2 gap-10 h-full">
          <div className="col-span-2 lg:col-span-1 order-last lg:order-none">
            <Outlet />
          </div>
          <div className="col-span-2 lg:col-span-1 order-first lg:order-none">
            <div className="rounded-lg overflow-hidden h-full">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                eius animi magni ab assumenda quibusdam dolorem explicabo. Autem
                amet possimus maiores omnis error fugiat ipsam deleniti in!
                Iste, itaque minima.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
