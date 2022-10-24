
import { Container, Div, DivCard, NomeSelecao, Li} from './styles';
import Selecoes from '../Selecoes/Selecoes';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Layout(){
    
   

   const apiCopa =  () =>{  axios.get('https://estagio.geopostenergy.com/WorldCup/GetAllTeams', {
    headers: {
      'git-user': `SolracSiul`
    }
    }).then((res) => {
    console.log(res)
    setInformacoes(pegarIndex(res.data.Result))
    console.log(informacoes)
    }).catch((error) => {
    console.error(error)
    })
    }
   const [informacoes, setInformacoes] = useState([]) 

    const pegarIndex = (informacoes) => {
        for (var i = 31; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = informacoes[i];
            informacoes[i] = informacoes[j];
            informacoes[j] = temp;
        }
        return informacoes
        }
    

   useEffect(() =>{
    apiCopa()
},[0])

    return(
        <>
       <Container>
        <Div>
            <DivCard>
                {<ul>
                    {informacoes.slice(0,4).map(info =>(
                        <Li key={info.Token}>
                            <NomeSelecao>{info.Name}</NomeSelecao>
                        </Li>
                    ))}
                </ul>}
            </DivCard>
            <DivCard>
            { <ul>
                    {informacoes.slice(4,8).map(info =>(
                        <Li key={info.Token}>
                            <NomeSelecao>{info.Name}</NomeSelecao>
                        </Li>
                    ))}
                </ul>}
            </DivCard>
            <DivCard>
            { <ul>
                    {informacoes.slice(8,12).map(info =>(
                        <Li key={info.Token}>
                            <NomeSelecao>{info.Name}</NomeSelecao>
                        </Li>
                    ))}
                </ul>}
            </DivCard>
            <DivCard>
            { <ul>
                    {informacoes.slice(12,16).map(info =>(
                        <Li key={info.Token}>
                            <NomeSelecao>{info.Name}</NomeSelecao>
                        </Li>
                    ))}
                </ul>}
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                {/* <Selecoes></Selecoes>
                <Selecoes></Selecoes> */}
            </DivCard>
            <DivCard>
                {/* <Selecoes></Selecoes>
                <Selecoes></Selecoes> */}
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                {/* <Selecoes></Selecoes> */}
            </DivCard>
        </Div>

        <Div>
            <DivCard>
            {/* <Selecoes></Selecoes> */}
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                {/* <Selecoes></Selecoes> */}
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                {/* <Selecoes></Selecoes>
                <Selecoes></Selecoes> */}
            </DivCard>
            <DivCard>
                {/* <Selecoes></Selecoes>
                <Selecoes></Selecoes> */}
            </DivCard>
        </Div>

        <Div>
            <DivCard>
            { <ul>
                    {informacoes.slice(16,20).map(info =>(
                        <Li key={info.Token}>
                            <NomeSelecao>{info.Name}</NomeSelecao>
                        </Li>
                    ))}
                </ul>}
            </DivCard>
            <DivCard>
            { <ul>
                    {informacoes.slice(20,24).map(info =>(
                        <Li key={info.Token}>
                            <NomeSelecao>{info.Name}</NomeSelecao>
                        </Li>
                    ))}
                </ul>}
            </DivCard>
            <DivCard>
            { <ul>
                    {informacoes.slice(24,28).map(info =>(
                        <Li key={info.Token}>
                            <NomeSelecao>{info.Name}</NomeSelecao>
                        </Li>
                    ))}
                </ul>}
            </DivCard>
            <DivCard>
            { <ul>
                    {informacoes.slice(28,32).map(info =>(
                        <Li key={info.Token}>
                            <NomeSelecao>{info.Name}</NomeSelecao>
                        </Li>
                    ))}
                </ul>}
            </DivCard>
        </Div>
       </Container>
       <div>
        Aqui poderemos inserir a tabela para ficar no mesmo componente
       </div>
       </>
    )
}
