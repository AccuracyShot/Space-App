import styled from "styled-components";
import tags from "./tags.json";

const TagsEstilizadas = styled.button` 
    background-color: #53505e;
    color: #ffffff;
    border: none;
    border-radius: 12px;
    padding: 10px 20px;
    margin-right: 10px;
    font-size: 16px;
    font-family: sans-serif;
    cursor: pointer;
    /* box-shadow: 0 0 5px 0px #c367e7, 0 0 10px 0px #430bd2; */
    transition: all 0.3s;
    &:hover {
        transform: scale(1.1);
        background-color: #c367e7;
    }
    &:active {
        transform: scale(1);
    }
`

const TituloEstilizado = styled.p`
    color: #ffffff;
    font-size: 20px;
    font-weight: bold;
`

const Container = styled.div`
    display: flex;
    gap: 24px;
    flex-grow: 1;
`

const Tags = () => {
    return <div>
        <Container>
            <TituloEstilizado>Busque por Tags: </TituloEstilizado>
               
                   {tags.map((tag, index) => {
                        return <TagsEstilizadas key={index}>{tag.titulo}</TagsEstilizadas>
                   })}
        </Container>
    </div>
   }
   
   export default Tags;