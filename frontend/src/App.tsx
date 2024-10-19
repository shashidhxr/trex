import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import { Signup } from './pages/Signup'
// import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Home } from './pages/Home'
import './App.css'
import { Landing } from './pages/Landing'
import { Publish } from './pages/Publish'
import { Test } from './pages/test'
import { Profile } from './pages/Profile'

function App() {
  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing></Landing>}></Route>
                {/* <Route path='/signup' element={<Signup></Signup>}></Route>
                <Route path='/signin' element={<Signin></Signin>}></Route> */}
                <Route path='/blog/:id' element={<Blog></Blog>}></Route>
                <Route path='/home' element={<Home></Home>}></Route>
                <Route path='/create' element={<Publish></Publish>}></Route>
                <Route path='/test' element={<Test></Test>}></Route>
                <Route path='/profile' element={<Profile></Profile>}></Route>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
