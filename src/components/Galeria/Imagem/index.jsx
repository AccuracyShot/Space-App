import styled from "styled-components";

const ImagemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    //gap: 16px;
    justify-content: center;
    align-items: center;
    //padding: 16px;
    border-radius: 12px;
`


const FigureEstiliziado = styled.figure`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    padding: 8px;
    background-color: transparent;
`

const ImagemEstilizada = styled.img`
    width: 100%;
    max-width: 100%;
    height: 300px;
    border-radius: 12px 12px 0px 0px;
`   

const FigCaptionEstilizado = styled.figcaption`
    display: flex;
    flex-direction: column;
    padding: 8px;
    background-color: #110f2b;
    border-radius: 0px 0px 12px 12px;
    align-items: center;
`

const FooterEstilizado = styled.footer`
    display: flex;
    gap: 8px;
    justify-content: space-between;
    align-items: center;
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

const TextoEstilizado = styled.h3`
    color: #ffffff;
    font-size: 16px;
    font-family: sans-serif;
`

const Imagem = ({foto, expandida = false, aoZoomSolicitado }) => {
    return (
        <ImagemContainer>
            <FigureEstiliziado $expandida={expandida} id={`foto-${foto.id}`}>
                <ImagemEstilizada src={foto.path} alt={foto.titulo} />
                <FigCaptionEstilizado>
                    <TextoEstilizado>{foto.titulo}</TextoEstilizado>
                    <FooterEstilizado>
                        <p>{foto.descricao}</p>
                        <BotaoEstilizado>
                            <img src="/icones/favorite.svg" alt="Botão de curtir" />
                        </BotaoEstilizado>
                        {!expandida && <BotaoEstilizado aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                            <img src="/icones/maximize.svg" alt="Botão de maximizar" />
                        </BotaoEstilizado>}
                    </FooterEstilizado>
                </FigCaptionEstilizado>
            </FigureEstiliziado>
        </ImagemContainer>
        
    )
}

export default Imagem;