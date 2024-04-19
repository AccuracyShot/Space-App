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



const Galeria = ({ fotos = [] }) => {
    return (
        <div>
            <>
                <Tags />
                <Titulo>Navegue pela Galeria</Titulo>
                <GaleriaContainer>
                
                    <div>
                        <SecaoFluida>
                        {fotos.map((foto, index) => <Imagem key={index} foto={foto} />)}
                        </SecaoFluida>
                        <Populares />
                    </div>
                </GaleriaContainer>
            </>
        </div>
    );
}

export default Galeria;