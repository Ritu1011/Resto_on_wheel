import { Routes, Route} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Menupage from "../Pages/Menupage";
import Navbar from "../Pages/Navbar";
import Login from "../Pages/Login";
import Location from "../Pages/Location";
import Cart from "../Pages/Cart";
import Breakfast from "../Pages/Breakfast";
import BreakfstCart from "../Pages/BreakfastCart";
import Dinner from "../Pages/Dinner";
import DinnerCart from "../Pages/DinnerCart";
import MenuCart from "../Pages/MenuCart";
import SignIn from "../Pages/SignIn";

function AllRoutes() {
return (
      <>
      <Navbar></Navbar>
        <Routes>
          <Route path="/signIn" element={<SignIn/>}></Route>
            <Route path="/" element={<HomePage/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/menupage" element={<Menupage/>} />
            <Route path="/menupage/:id" element={<MenuCart/>} />
            <Route path="/location" element={<Location/>} />
            <Route path="/login" element={<Login/>} />
          <Route path="/breakfast" element={<Breakfast/>} />
            <Route path="/breakfast/:id" element={<BreakfstCart/>} />
            <Route path="/dinner" element={<Dinner/>} />
            <Route path="/dinner/:id" element={<DinnerCart/>} />
           </Routes>
      </>
    );
  }
  
  export default AllRoutes;