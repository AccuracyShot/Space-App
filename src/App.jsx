import { styled } from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import bannerBackground from "./assets/banner.png";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";
import { useState } from "react";
import fotos from "./components/Galeria/fotos.json";
import ModalZoom from "./components/ModalZoom";

function App() {

  const FundoGradiente = styled.div`
    background: linear-gradient(
      174.61deg,
      #041833 4.16%,
      #04244f,
      #154580 96.76%
    );
    width: 100%;
    min-height: 100vh;
  `;

  const AppContainer = styled.div`
    width: 1440px;
    margin: 0 auto;
    max-width: 100%;
  `;

  const MainContainer = styled.div`
    display: flex;
    gap: 24px;
  `;

  const ConteudoDaGaleria = styled.div`
    display: flex;
    gap: 24px;
    flex-grow: 1;
    flex-direction: column;
  `
const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
const [fotoSelecionada, setFotoSelecionada] = useState(null);
  return (
    <>
      <FundoGradiente>
        <EstilosGlobais />
        <AppContainer>
          <Cabecalho />
          <MainContainer>
            <BarraLateral />
            <ConteudoDaGaleria>
            <Banner
              texto="A galeria mais completa de fotos do espaço!"
              backgroundImage={bannerBackground}
            />
            <Galeria 
              aoFotoSelecionada={foto => setFotoSelecionada(foto)} 
              fotos={fotosDaGaleria} 
            />
            </ConteudoDaGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom foto={fotoSelecionada} />
      </FundoGradiente>
    </>
  );
}

export default App;
