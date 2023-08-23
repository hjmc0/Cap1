import "./App.css";
import Registration from "./Components/registration";
import Login from "./Components/login";
import Home from "./Components/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./Components/edit";
import Confirmation from "./Components/confirmation";
import Dashboard from "./Components/transaction";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/Cap1" element={<Login />} />
          <Route path="/register" element={<Confirmation />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/user" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
      {/*<Confirmation/>*/}
    </div>
  );
}

function PageNotFound() {
  return (
    <div>
      <h2>404 Page not found</h2>
    </div>
  );
}

export default App;
