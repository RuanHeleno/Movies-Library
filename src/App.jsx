import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import GlobalStyle from "./theme/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
