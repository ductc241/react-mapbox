import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavigationPage from "./pages/NavigationPage";
// import SearchPage from "./pages/SearchPage";

const Loading = () => {
  return <div className="absolute top-0">Loading</div>;
};

const SearchPage = lazy(() => import("./pages/SearchPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="react-mapbox">
            <Route index element={<NavigationPage />} />
            <Route path="search" element={<SearchPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
