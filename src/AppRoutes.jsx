import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactLoading from "react-loading";

import { Home, Movie, Search } from "./pages";
import App from "./App";
import { GlobalContext, GlobalProvider } from "./contexts/global";

const AppRoutes = () => {
  const Load = ({ children }) => {
    const { loading } = useContext(GlobalContext);

    return loading ? (
      <div id="loading">
        <ReactLoading type={"spin"} width={100} />
      </div>
    ) : (
      children
    );
  };

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route element={<App />}>
            <Route
              path="/"
              element={
                <Load>
                  <Home />
                </Load>
              }
            />
            <Route
              path="/movie/:id"
              element={
                <Load>
                  <Movie />
                </Load>
              }
            />
            <Route
              path="/search"
              element={
                <Load>
                  <Search />
                </Load>
              }
            />
          </Route>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
