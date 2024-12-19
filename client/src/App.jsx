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
import MyFooter from './components/MyFooter'
import PrivateRoute from './components/PrivateRoute'
import CreatePost from './pages/CreatePost'
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import UpdatePost from './pages/UpdatePost'
import PostPage from './pages/PostPage'
import ScrollToTop from './components/ScrollToTop'



function App() {


  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
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
          
          <Route element = {<PrivateRoute/>}>
            <Route path='/dashboard' element = {<Dashboard/>} />
          </Route>
          
          <Route path='/projects' element = {<Projects/>} />
          <Route path='/post/:postSlug' element = {<PostPage/>} />
          <Route path='/signIn' element = {<SignIn/>} />
          <Route path='/signUp' element = {<SignUp/>} />

          <Route element={<OnlyAdminPrivateRoute/>}>
            <Route path='/create-post' element = {<CreatePost/>}/>  
            <Route path='/update-post/:postId' element = {<UpdatePost/>}/>
         </Route>
          {/* <Route path='/forgotPassword' element = {<ForgotPassword/>} /> */}
        </Routes>
        <MyFooter/>
      </BrowserRouter>
   
    </>
  )
}

export default App
