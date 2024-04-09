import styled from "styled-components";

const ItemListaEstilizado = styled.li`
    font-size: 24px;
    line-height: 29px;
    cursor: pointer;
    color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9' };
    gap: 22px;
    margin: 16px 0 16px 20px;
    align-items: center;
    display: flex;
`
const ItemNavegacao = ({ iconeAtivo, iconeInativo, ativo = false, children }) => {
    return <ItemListaEstilizado $ativo={ativo}>
        <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
        {children}
    </ItemListaEstilizado>
}

export default ItemNavegacao;