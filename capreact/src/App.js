import './App.css';
import Registration from './Components/registration';
import Login from './Components/login(sr)';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return (
    <div className="App">
      {/* <Registration/> */}
      <Login />
    </div>
  );
}

export default App;
