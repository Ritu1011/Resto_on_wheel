
import './App.css';
// import HomePage from './Pages/HomePage';
import AllRoutes from './Routes/AllRoutes';
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <AllRoutes></AllRoutes>
    </div>
  );
}

export default App;
