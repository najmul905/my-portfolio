import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


// import Main from './Pages/Main/Main.jsx';
// import Home from './Pages/Home/Home.jsx';
// import About from './Pages/About/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className='bg-slate-700 text-white'>
          <RouterProvider router={router} />
      </div>
  </React.StrictMode>,
)
