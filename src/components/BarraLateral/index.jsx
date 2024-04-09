import styled from "styled-components";
import ItemNavegacao from "./ItemNavegacao/index.jsx";

const ListaUtilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
    a {
        text-decoration: none;
        color: #ffffff;
        font-size: 16px;
    }
`

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListaUtilizada>
                    <ItemNavegacao 
                        iconeAtivo=""
                        IconeInativo=""
                        ativo={true}
                    >
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao 
                        iconeAtivo=""
                        IconeInativo=""
                        ativo={true}
                    >
                        Favoritos
                    </ItemNavegacao>
                </ListaUtilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral;