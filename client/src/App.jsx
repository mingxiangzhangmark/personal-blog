import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'



function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            // transition: Bounce
          />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/about' element = {<About/>} />
          <Route path='/dashboard' element = {<Dashboard/>} />
          <Route path='/projects' element = {<Projects/>} />
          <Route path='/signIn' element = {<SignIn/>} />
          <Route path='/signUp' element = {<SignUp/>} />
          {/* <Route path='/forgotPassword' element = {<ForgotPassword/>} /> */}
        </Routes>
      </BrowserRouter>
   
    </>
  )
}

export default App
