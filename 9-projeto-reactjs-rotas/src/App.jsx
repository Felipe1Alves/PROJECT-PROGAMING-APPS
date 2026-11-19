
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Rodape from './components/Rodape'
import Cabecalho from './components/Cabecalho'
import ServicosPage from './pages/ServicosPage'
import SobreNosPage from './pages/SobreNosPage'
import { Historia } from './pages/Historia'
import TrabalheConosco from './pages/TrabalheConosco'




function App() {
  return (
    <>
      <BrowserRouter>
      <Cabecalho/>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/servicos' element={<ServicosPage />} />
          <Route path='/sobre-nos' element={<SobreNosPage />} />
          <Route path='/historia' element={<Historia/>} />
          <Route path='/trabalhe-conosco' element={<TrabalheConosco/>} />
        </Routes>
      </main>
      <Rodape/>
      </BrowserRouter>
    </>
  )
}

export default App
