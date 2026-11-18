import './App.css'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import Homepage from './pages/HomePage'

function App() {
  return (
    <>
    <Cabecalho />
    <main className="page-content">
      <Homepage />
    </main>
    <Rodape />
    </>
  )
}

export default App
