import { Luis, NavBar, Btn } from "./styles";

export default function Header(){
    return(
        <Luis>
            <nav>
                <NavBar>
                    <li><Btn>Sobre a criação do projeto</Btn></li>
                    <li><Btn>Projeto </Btn></li>
                    <li><Btn>Contato </Btn></li>
                </NavBar>
            </nav>
        </Luis>
    )
}
