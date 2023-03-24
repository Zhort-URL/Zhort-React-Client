import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Authentication/Login.jsx";
import Error404 from "./pages/Error/404.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Dashboard />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='*' element={<Error404 />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
