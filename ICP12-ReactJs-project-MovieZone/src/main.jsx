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

function App() {
  return (<SeatSelection />);
}

export default App;

const root = createRoot (document.getElementById("root"));
root.render(
<StrictMode>
<BrowserRouter>
<Routes>
    <Route path="/" element={<h1>HOME</h1>}/>
    <Route path="/about" element={<h1>About</h1>}/>
    <Route path="/booking" element={<h1>Booking</h1>}/>
    <Route path="/login" element={<h1>Login</h1>}/>
    <Route path="/movie" element={<h1>Movie</h1>}/>
    <Route path="/payment" element={<h1>Payment</h1>}/>
    <Route path="/register" element={<h1>Register</h1>}/>
    <Route path="/seatselection" element={<h1>SeatSelection</h1>}/>
</Routes>
</BrowserRouter>
</StrictMode>);