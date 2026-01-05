
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes,Route } from "react-router";
import Movie from './Views/Movie';

const root=createRoot(document.getElementById('root'))

root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/movie" element={<Movie/>}/>
  </Routes>
  </BrowserRouter>

)
