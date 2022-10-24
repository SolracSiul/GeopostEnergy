
import { Container, Div, DivCard} from './styles';
import Selecoes from '../Selecoes/Selecoes';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Layout(){
    
   const [informacoes, setInformacoes] = useState([]) 

   const apiCopa = () =>{ axios.get('https://estagio.geopostenergy.com/WorldCup/GetAllTeams', {
    headers: {
      'git-user': `SolracSiul`
    }
    }).then((res) => {
    console.log(res.data.Result)
    setInformacoes(res.data.Result)
    }).catch((error) => {
    console.error(error)
    })
}
   useEffect(() =>{
    apiCopa()
   },[])

   let sorteados = []
   let valorMaximo = 32
   const pegarIndex = () => {
       if (sorteados.length === valorMaximo) {
           if (true) sorteados = [];
       }
       var sugestao = Math.ceil(Math.random() * valorMaximo); 
       while (sorteados.indexOf(sugestao) >= 0) { 
           sugestao = Math.ceil(Math.random() * valorMaximo);
       }
       sorteados.push(sugestao); 
       return sugestao;
   }
   
    return(
        <>
        
       <Container>
        <Div>
            <DivCard>
                <Selecoes name={pegarIndex()}></Selecoes>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
            </DivCard>
            <DivCard>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
            </DivCard>
            <DivCard>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
            </DivCard>
            <DivCard>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
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
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
            </DivCard>
            <DivCard>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
            </DivCard>
            <DivCard>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
            </DivCard>
            <DivCard>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
                <Selecoes></Selecoes>
            </DivCard>
        </Div>
       </Container>
       <div>
        Aqui poderemos inserir a tabela para ficar no mesmo componente
       </div>
       </>
    )
}
