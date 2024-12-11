// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import redux store
import { Provider } from 'react-redux'
import { store, persistor } from '../redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'
import ThemeProvider from './components/themeProvider.jsx'

createRoot(document.getElementById('root')).render(

    <PersistGate loading={null} persistor={persistor}>
     
        <Provider store={store}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </Provider>
      
     
    </PersistGate>
  
  // <StrictMode>
  //   <App />
  // </StrictMode>,
)
