import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'

function App() {

  return (
    <BrowserRouter>
     <Header />
     <Routes>
      <Route path="/" element={'Home'} />
      <Route path="/sobre" element={'Sobre'} />
      <Route path="/contato" element={'Contato'} />
      <Route path="/projects" element={<Projects />} />
        {/*<Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        */}
      </Routes>
    </BrowserRouter>
  )
}

//BrowserRouter é onde faz os direcionamentos
//Routes é o espaço onde será inserido os conteúdos dinâmicos
//Route é o elemento que será inserido
// Route path="*" Usada pra quando não encontrar a página

export default App

