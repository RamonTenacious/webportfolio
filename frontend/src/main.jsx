import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { Index } from './routes/Index.jsx';

const basename = import.meta.env.VITE_DEVELOPMENT === "true" ? "" : "/tenacious-portifolio";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <Index />
    </BrowserRouter>
  </StrictMode>,
)
