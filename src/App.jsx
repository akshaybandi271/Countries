
import './App.css'
import Home from './Pages/Home'
import Country from './Pages/Country'
import { Routes,Route } from 'react-router-dom'

function App() {
    
    return (
       
          <Routes>
              <Route exact path='/' element={<Home />}/>
              <Route path='/:country' element={<Country />}/>
          </Routes>

    )
}

export default App
