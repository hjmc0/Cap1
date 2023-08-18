import "./App.css";
import Registration from "./Components/registration";
import Login from "./Components/login(sr)";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
