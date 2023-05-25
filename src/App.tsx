import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./modules/Navigation";
import SearchPage from "./pages/SearchPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="react-mapbox">
          <Route index element={<SearchPage />} />
          <Route path="direction" element={<Navigation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
