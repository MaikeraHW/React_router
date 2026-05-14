import { BrowserRouter, Route, Router, Link } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li> <Link to="/"> Home </Link> </li>
        </ul>
      </nav>
    
    </BrowserRouter>
  )
}

export default App
