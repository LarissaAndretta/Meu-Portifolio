import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './assets/template/Header.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import './custom.css'
import SobreMim from './pages/SobreMim.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "sobremim",
    element: <SobreMim />
  },
  {
    path: "contato",
    element: <SobreMim />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>,
)
