import { styled } from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais"
import Cabecalho from "./components/Cabecalho"
import BarraLateral from "./components/BarraLateral"

function App() {

  const FundoGradiente = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
  `

  return (
    <>
      <FundoGradiente>
        <EstilosGlobais />
        <Cabecalho />
        <BarraLateral />
      </FundoGradiente>
    </>
  )
}

export default App
