import { Routes, Route} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Menupage from "../Pages/Menupage";
import { Checkout } from "../Pages/Checkout";
import Login from "../Pages/Login";
import Location from "../Pages/Location";
import Cart from "../Pages/Cart";
import Breakfast from "../Pages/Breakfast";
import BreakfstCart from "../Pages/BreakfastCart";
import Dinner from "../Pages/Dinner";
import DinnerCart from "../Pages/DinnerCart";
import MenuCart from "../Pages/MenuCart";
import SignIn from "../Pages/SignIn";
import { Payment } from "../Pages/Payment";
import OrderPlaced from "../Pages/OrderPlaced";
import Navbar from "../Pages/Navbar";

function AllRoutes() {
return (
      <>
            <Routes>
             <Route path="/" element={<SignIn/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/menupage" element={<Menupage/>} />
            <Route path="/menupage/:id" element={<MenuCart/>} />
            <Route path="/orderpacled" element={<OrderPlaced/>} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/location" element={<Location/>} />
            <Route path="/breakfast" element={<Breakfast/>} />
            <Route path="/breakfast/:id" element={<BreakfstCart/>} />
            <Route path="/dinner" element={<Dinner/>} />
            <Route path="/dinner/:id" element={<DinnerCart/>} />
           </Routes>
      </>
    );
  }
  
  export default AllRoutes;