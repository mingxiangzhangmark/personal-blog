import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'



function App() {


  return (
    <>
      <BrowserRouter>
        <Header/>
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
