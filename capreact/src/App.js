import "./App.css";
import Registration from "./Components/registration";
import Login from "./Components/login";
import Home from "./Components/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/edit" element={<Edit />} /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
