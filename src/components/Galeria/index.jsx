import Titulo from "../Titulo";
import Populares from "./Populares/index.jsx";
import Tags from "./Tags/index.jsx";
import styled from "styled-components";
import Imagem from "./Imagem/index.jsx";

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`



const Galeria = ({ fotos = [] }) => {
    return (
        <div>
            <>
                <Tags />
                <GaleriaContainer>
                    <SecaoFluida>
                    <Titulo>Navegue pela Galeria</Titulo>
                    {fotos.map((foto, index) => <Imagem key={index} foto={foto} />)}
                    </SecaoFluida>
                    <Populares />
                </GaleriaContainer>
            </>
        </div>
    );
}

export default Galeria;