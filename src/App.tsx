
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import Posts from './Posts'
import AddPost from './AddPost'
import EditPost from './EditPost'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element={<Posts/>}></Route>
            <Route path='/add-post' element={<AddPost/>}></Route>
            <Route path='/edit-post' element={<EditPost/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
