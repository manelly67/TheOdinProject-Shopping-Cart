import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { googleFonts } from './components/google-fonts.jsx';
import './styles/index.css';

import routes from "./components/routes.jsx";

const meta = document.createElement('meta');
meta.setAttribute('meta','description');
meta.setAttribute('content','manelly67\'s exercise study project:Shopping Cart within the curriculum The Odin Project');
document.head.appendChild(meta);

googleFonts();

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
