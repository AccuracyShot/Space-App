import { styled } from "styled-components";

const CampoDeTextoEstilizado = styled.input`
/* Dimensões e borda */
width: 500px; /* Ajuste a largura conforme necessário */
height: 40px;
border: none;
border-radius: 12px;
padding: 10px 20px;
margin-right: 10px;
/* Fonte */
font-size: 16px;
font-family: sans-serif;
color: #ffffff;
/* Background */
background-color: transparent;
background-image: url('/images/search.svg');
background-repeat: no-repeat;
background-position: 95% 50%;
border: 2px solid #800080;
box-shadow: 0 0 5px 0px #c367e7, 0 0 10px 0px #430bd2;

/* Placeholder */
&::placeholder {
color: #ffffff;
font-weight: bold;
}

&:focus {
outline: none;
}

`

const CampoDeTexto = () => {
    return (
        <CampoDeTextoEstilizado type="text" placeholder="O que você procura?" />
    );
}

export default CampoDeTexto;




