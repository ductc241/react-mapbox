import { BrowserRouter, Route, Routes } from "react-router-dom";

import Search from "./modules/Search";
import Navigation from "./modules/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="react-mapbox">
          <Route path="search" element={<Search />} />
          <Route path="direction" element={<Navigation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
