import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './keyframes.css'
import 'mouse-follower/src/scss/index.scss';  // Import the MouseFollower styles
import './index.css'
import './media.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './i18n.js';
import 'bootstrap/dist/js/bootstrap.bundle.js'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
