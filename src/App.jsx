import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

import './App.css'
import Form from './routes/Form'
import Resposta from './routes/Resposta'

function App() {
  


  return (
    

     <div className='App'>
      <Navbar />
      <Form />
      <div className="container"></div>
      <Outlet />
    

      
     </div>
   
  )
}

export default App
