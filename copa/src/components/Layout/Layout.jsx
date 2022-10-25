
import { Container, Div, DivCard, NomeSelecao, Li} from './styles';
import Selecoes from '../Selecoes/Selecoes';

import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import axios from 'axios';

export default function Layout(){

    // const containerRef = useRef(null);
    // useEffect(() => console.log(typeof containerRef.current))

   const apiCopa =  () =>{  axios.get('https://estagio.geopostenergy.com/WorldCup/GetAllTeams', {
    headers: {
      'git-user': `SolracSiul`
    }
    }).then((res) => {
    // console.log(res)
    setInformacoes(pegarIndex(res.data.Result))
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
},[])
    const gerarNumero = () =>{
        let numeroAlet = (Math.random() * 10).toFixed(0);
        return numeroAlet
    }
    const definirVencedoresGrupoA = () => {
        let grupoA = informacoes.slice(0,4).map((x) =>(x.Name))
        let time1, time2, time3, time4;
        time1 = grupoA[0]
        time2 = grupoA[1]
        time3 = grupoA[2]
        time4 = grupoA[3]
        
        let pntsTime1, pntsTime2,pntsTime3, pntsTime4;
        pntsTime1 = gerarNumero() + 100;
        pntsTime2 = gerarNumero()
        pntsTime3 = gerarNumero()
        pntsTime4 = gerarNumero()
        
        console.log(time1)
        console.log(time2)
        console.log(time3)
        console.log(time4)
        console.log(pntsTime1)
        if(pntsTime1 > (pntsTime2 && pntsTime3 && pntsTime4)){
            return time1
        }
    }
    const definirVencedoresGrupoB = () => {
        let grupoB = informacoes.slice(4,8).map((x) =>(x.Name))
        let time1, time2, time3, time4;
        time1 = grupoB[0]
        time2 = grupoB[1]
        time3 = grupoB[2]
        time4 = grupoB[3]
        
        let pntsTime1, pntsTime2,pntsTime3, pntsTime4;
        pntsTime1 = gerarNumero() + 100;
        pntsTime2 = gerarNumero()
        pntsTime3 = gerarNumero()
        pntsTime4 = gerarNumero()
        
        console.log(time1)
        console.log(time2)
        console.log(time3)
        console.log(time4)
        console.log(pntsTime1)
        if(pntsTime1 > (pntsTime2 && pntsTime3 && pntsTime4)){
            return time1
        }
    }
    const definirVencedoresGrupoC = () => {
        let grupoC = informacoes.slice(8,12).map((x) =>(x.Name))
        let time1, time2, time3, time4;
        time1 = grupoC[0]
        time2 = grupoC[1]
        time3 = grupoC[2]
        time4 = grupoC[3]
        
        let pntsTime1, pntsTime2,pntsTime3, pntsTime4;
        pntsTime1 = gerarNumero() + 100;
        pntsTime2 = gerarNumero()
        pntsTime3 = gerarNumero()
        pntsTime4 = gerarNumero()
        
        console.log(time1)
        console.log(time2)
        console.log(time3)
        console.log(time4)
        console.log(pntsTime1)
        if(pntsTime1 > (pntsTime2 && pntsTime3 && pntsTime4)){
            return time1
        }
    }
    const definirVencedoresGrupoD = () => {
        let grupoD = informacoes.slice(12,16).map((x) =>(x.Name))
        let time1, time2, time3, time4;
        time1 = grupoD[0]
        time2 = grupoD[1]
        time3 = grupoD[2]
        time4 = grupoD[3]
        
        let pntsTime1, pntsTime2,pntsTime3, pntsTime4;
        pntsTime1 = gerarNumero() + 100;
        pntsTime2 = gerarNumero()
        pntsTime3 = gerarNumero()
        pntsTime4 = gerarNumero()
        
        console.log(time1)
        console.log(time2)
        console.log(time3)
        console.log(time4)
        console.log(pntsTime1)
        if(pntsTime1 > (pntsTime2 && pntsTime3 && pntsTime4)){
            return time1
        }
    }
    return(
        <>
       <Container>
        <Div>
            <DivCard>
                {<ul>
                    {informacoes.slice(0,4).map(info =>(
                        <Li key={info.Token} >
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
                <NomeSelecao>{definirVencedoresGrupoA()}</NomeSelecao>
                <NomeSelecao>{definirVencedoresGrupoB()}</NomeSelecao>
            </DivCard>
            <DivCard>
                <NomeSelecao>{definirVencedoresGrupoC()}</NomeSelecao>
                <NomeSelecao>{definirVencedoresGrupoD()}</NomeSelecao>
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                <NomeSelecao></NomeSelecao>
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                <NomeSelecao></NomeSelecao>
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                {/* <Selecoes></Selecoes> */}
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                <NomeSelecao>{definirVencedoresGrupoB()}</NomeSelecao>
                <NomeSelecao>{definirVencedoresGrupoA()}</NomeSelecao>
            </DivCard>
            <DivCard>
                <NomeSelecao>{definirVencedoresGrupoB()}</NomeSelecao>
                <NomeSelecao>{definirVencedoresGrupoA()}</NomeSelecao>
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
    
       </div>
       
       </>
    )
}
