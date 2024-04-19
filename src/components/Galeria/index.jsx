import Titulo from "../Titulo";
import Populares from "./Populares/index.jsx";
import Tags from "./Tags/index.jsx";
import styled from "styled-components";
import Imagem from "./Imagem/index.jsx";

const GaleriaContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const SecaoFluida = styled.section`
    flex-wrap: wrap;
    display: flex;
    gap: 50px;
`



const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
    return (
        <div>
            <>
                <Tags />
                <GaleriaContainer>
                <Titulo>Navegue pela Galeria</Titulo>
                    <div>
                        <SecaoFluida>
                        {fotos.map((foto, index) => 
                            <Imagem 
                            aoZoomSolicitado={aoFotoSelecionada}
                            key={index} 
                            foto={foto} />)}
                        </SecaoFluida>
                    </div>
                <Populares />
                </GaleriaContainer>
            </>
        </div>
    );
}

export default Galeria;