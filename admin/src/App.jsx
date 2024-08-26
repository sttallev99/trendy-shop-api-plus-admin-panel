import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from "./components/Navbar"
import { Sidebar } from './components/Sidebar'
import { List } from './pages/List'
import { Orders } from './pages/Orders'
import { Add } from './pages/Add'

function App() {
  const url = "http://localhost:4000";
  
  return (
    <BrowserRouter>
    <ToastContainer />
      <Navbar />
      <hr />
      <div className='flex max-padd-container'>
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add  url={url}/>}/>
          <Route path='/list' element={<List url={url}/>}/>
          <Route path='/orders' element={<Orders url={url}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
