import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Header from '../components/Header'
import Projects from './Projects'

function Home() {

  return (
    // <BrowserRouter>
      <>
     <Header />
     </>

    //   {/* <nav>
    //     <ul>
    //       <li> <Link to="/"> Home </Link> </li>
    //       <li> <Link to="/sobre"> Sobre </Link> </li>
    //     </ul>
    //   </nav> */}
    

    //     {/* <Routes>
    //       <Route path="/" element={}/>
    //       <Route path="/sobre" element={<h1>Aqui está a tela Sobre mim</h1>}/>
    //       <Route path="*" element={<p>Página não encontrada</p>} />  
    //     </Routes> */}
    // </BrowserRouter>


  )
}

//BrowserRouter é onde faz os direcionamentos
//Routes é o espaço onde será inserido os conteúdos dinâmicos
//Route é o elemento que será inserido
// Route path="*" Usada pra quando não encontrar a página

export default Home

