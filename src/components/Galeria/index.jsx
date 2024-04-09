import Titulo from "../Titulo";
import Populares from "./Populares/index.jsx";
import Tags from "./Tags/index.jsx";
import styled from "styled-components";

const GaleriaContainer = styled.div`
    display: flex;
`

const SecaoFluida = styled.section`
    flex-grow: 1;
`



const Galeria = () => {
    return (
        <div>
            <>
                <Tags />
                <GaleriaContainer>
                    <SecaoFluida>
                    <Titulo>Navegue pela Galeria</Titulo>
                    </SecaoFluida>
                    <Populares />
                </GaleriaContainer>
            </>
        </div>
    );
}

export default Galeria;