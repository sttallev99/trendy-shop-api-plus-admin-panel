import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from "./components/Navbar"
import { Sidebar } from './components/Sidebar'
import { List } from './pages/List'
import { Orders } from './pages/Orders'
import { Add } from './pages/Add'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <hr />
      <div className='flex max-padd-container'>
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add />}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/orders' element={<Orders/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
