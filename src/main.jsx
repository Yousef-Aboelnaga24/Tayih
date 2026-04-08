import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css'
import AOS from 'aos'
import { BrowserRouter } from 'react-router-dom';
// import { Online } from 'react-detect-offline';

AOS.init({ once: true })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Online> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </Online> */}
  </StrictMode>,
)
