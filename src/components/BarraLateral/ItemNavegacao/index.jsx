import styled from "styled-components";

const ItemListaEstilizado = styled.li`
    display: flex;
`
const ItemNavegacao = ({ iconeAtivo, iconeInativo, ativo = false, children }) => {
    return <ItemListaEstilizado>
        <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
        {children}
    </ItemListaEstilizado>
}

export default ItemNavegacao;