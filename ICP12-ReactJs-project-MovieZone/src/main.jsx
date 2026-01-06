import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route} from "react-router-dom";


import Home from './Views/Home.jsx';
import Booking from './Views/Booking.jsx';
import About from './Views/About.jsx';
import Login from './Views/Login.jsx';
import Movie from './Views/Movie.jsx';
import Payment from './Views/Payment.jsx';
import Register from './Views/Register.jsx';
import SeatSelection from './Views/SeatSelection.jsx';


const root = createRoot (document.getElementById("root"));
root.render(
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/booking" element={<Booking/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/movie" element={<Movie/>}/>
    <Route path="/payment" element={<Payment/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/seatselection" element={<SeatSelection/>}/>
</Routes>
</BrowserRouter>
);