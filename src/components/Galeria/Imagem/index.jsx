import { styled } from "styled-components"

const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '460px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`

const BotaoEstilizado = styled.button`
    background-color: #53505e;
    color: #ffffff;
    border: none;
    border-radius: 12px;
    padding: 10px 20px;
    font-size: 16px;
    font-family: sans-serif;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        transform: scale(1.1);
        background-color: #c367e7;
    }
    &:active {
        transform: scale(1);
    }
`

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Imagem = ({ foto, expandida = false, aoZoomSolicitado }) => {
    return (<Figure $expandida={expandida} id={`foto-${foto.id}`}>
        <img src={foto.path} alt={foto.alt} />
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Rodape>
                <h4>{foto.fonte}</h4>
                <BotaoEstilizado>
                    <img src="/icones/favorite.svg" alt="Icone de favorito" />
                </BotaoEstilizado>
                {!expandida && <BotaoEstilizado aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                    <img src="/icones/maximize.svg" alt="Icone de expandir" />
                </BotaoEstilizado>}
            </Rodape>
        </figcaption>
    </Figure>)
}

export default Imagem;