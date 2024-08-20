import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from './pages/Blogs'
import './App.css'
import { Landing } from './pages/Landing'
import { Publish } from './pages/Publish'

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path='/' element={<Landing></Landing>}></Route>
                <Route path='/signup' element={<Signup></Signup>}></Route>
                <Route path='/signin' element={<Signin></Signin>}></Route>
                <Route path='/blog/:id' element={<Blog></Blog>}></Route>
                <Route path='/blogs' element={<Blogs></Blogs>}></Route>
                <Route path='/create' element={<Publish></Publish>}></Route>
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
