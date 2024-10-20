import Descontos from './components/Descontos'
import './App.css'

function App() {

  return (
    <> 
      <Descontos descontoDoProduto={true}/>
      <Descontos descontoDoProduto={false}/>
    </>
  )
}

export default App
