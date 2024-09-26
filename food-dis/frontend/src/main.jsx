import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import StoreContextProvider from './Context/Storecontext.jsx'

createRoot(document.getElementById('app')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>

    {/* <App /> */}


  </BrowserRouter>
)



// render(<App />, document.getElementById('app'))