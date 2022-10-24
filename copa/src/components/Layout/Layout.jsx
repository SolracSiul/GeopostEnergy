
import { Container, Div, DivCard} from './styles';
import Selecoes from '../Selecoes/Selecoes';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Layout(){
    let sorteados = []
    let valorMaximo = 32
    const pegarIndex = () => {
        if (sorteados.length == valorMaximo) {
            if (true) sorteados = [];
            else return;
        }
        var sugestao = Math.ceil(Math.random() * valorMaximo); 
        while (sorteados.indexOf(sugestao) >= 0) { 
            sugestao = Math.ceil(Math.random() * valorMaximo);
        }
        sorteados.push(sugestao); 
        return sugestao; 
        
    } 
    const [informacoes, setInformacoes] = useState([]) 

   const apiCopa = () =>{ axios.get('https://estagio.geopostenergy.com/WorldCup/GetAllTeams', {
    headers: {
      'git-user': `SolracSiul`
    }
    }).then((res) => {
    console.log(res.data)
    }).catch((error) => {
    console.error(error)
    })
}
   useEffect(() =>{
    apiCopa()
   })

    return(
        <>
        
       <Container>
        <Div>
            <DivCard>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
            </DivCard>
            <DivCard>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
            </DivCard>
            <DivCard>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
            </DivCard>
            <DivCard>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                {/* <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes> */}
            </DivCard>
            <DivCard>
                {/* <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes> */}
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                {/* <Selecoes name={pegarIndex()}></Selecoes> */}
            </DivCard>
        </Div>

        <Div>
            <DivCard>
            {/* <Selecoes name={pegarIndex()}></Selecoes> */}
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                {/* <Selecoes name={pegarIndex()}></Selecoes> */}
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                {/* <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes> */}
            </DivCard>
            <DivCard>
                {/* <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes> */}
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
            </DivCard>
            <DivCard>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
            </DivCard>
            <DivCard>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
            </DivCard>
            <DivCard>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes name={pegarIndex()}></Selecoes>
            </DivCard>
        </Div>
       </Container>
       <div>
        Aqui poderemos inserir a tabela para ficar no mesmo componente
       </div>
       </>
    )
}
