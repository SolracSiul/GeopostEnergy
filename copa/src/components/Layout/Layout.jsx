
import { Container, Div, DivCard, NomeSelecao, Li, Tabelas, TD, TH, TR, Tabela, DivResult, Result} from './styles';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Layout(){
    const apiCopa = async () => {
          await axios.get('https://estagio.geopostenergy.com/WorldCup/GetAllTeams', {
            headers: {
        'git-user': `SolracSiul`
        }
    }).then((res) => {
    setInformacoes(pegarIndex(res.data.Result));
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
    
    let copaDoMundo = {}
    let resultados = {}

    const inserirGeral = (chave, min,max) => {
        let inserirCA = informacoes.slice(min,max).map((x)=> (x.Name))
        copaDoMundo[chave] = inserirCA
        for(let i =0; i < 4; i++){
            inserirResultado(inserirCA[i])
        }
    }
    const inserirResultado = (pais) => {
        resultados[pais] = [0,0,0,0]
    }    
    const chamarTimes = () => {
        const alphabet = ["A","B","C","D","E","F","G","H"]
        let min;let max;
        [min,max] = [0,4] 
        for(let i = 0; i <alphabet.length; i++){
            inserirGeral(alphabet[i],min, max)
            min += 4;
            max +=4;
        }
        console.log(copaDoMundo)
        console.log(resultados)
    }
   
    chamarTimes()
    const gerarJogo = (x) =>{
        let grupoDaVez = copaDoMundo[x];
        let numeroTime1, numeroTime2;
        for(let i=0; i < 4; i++){
            for(let j = i+1; j < 4; j++){
                while(true){
                    numeroTime1 = Math.floor(Math.random() * 10)
                    numeroTime2 = Math.floor(Math.random() * 10)
                    if(numeroTime1 !== numeroTime2){
                        break
                    }
                }
                if(numeroTime1 > numeroTime2){
                    resultados[grupoDaVez[i]][0] += 3
                    resultados[grupoDaVez[i]][1] += 1
                    resultados[grupoDaVez[i]][3] += numeroTime1
                    resultados[grupoDaVez[j]][2] += 1;
                    resultados[grupoDaVez[j]][3] += numeroTime2;
                }else{
                    resultados[grupoDaVez[j]][0] += 3
                    resultados[grupoDaVez[j]][1] += 1
                    resultados[grupoDaVez[j]][3] += numeroTime2
                    resultados[grupoDaVez[i]][2] += 1;
                    resultados[grupoDaVez[i]][3] += numeroTime1;
                }
            }
        }
    }
    const gerarJogos = () =>{
        gerarJogo('A')
        gerarJogo('B')
        gerarJogo('C')
        gerarJogo('D')
        gerarJogo('E')
        gerarJogo('F')
        gerarJogo('G')
        gerarJogo('H')
    }
    gerarJogos()

    
    const pegarSemifinalista = (a) =>{
        let semifinalista1;
        // let semifinalista2;
        if((resultados[copaDoMundo[a][0]][0] > resultados[copaDoMundo[a][1]][0]) || (resultados[copaDoMundo[a][0]][0] > resultados[copaDoMundo[a][2]][0]) || (resultados[copaDoMundo[a][0]][0] > resultados[copaDoMundo[a][3]][0])){
            semifinalista1 = copaDoMundo[a][0]
        }else if ((resultados[copaDoMundo[a][1]][0] > resultados[copaDoMundo[a][0]][0]) || (resultados[copaDoMundo[a][1]][0] > resultados[copaDoMundo[a][2]][0]) || (resultados[copaDoMundo[a][1]][0] > resultados[copaDoMundo[a][3]][0])){
            semifinalista1 = copaDoMundo[a][1]
        }else if((resultados[copaDoMundo[a][2]][0] > resultados[copaDoMundo[a][1]][0]) || (resultados[copaDoMundo[a][2]][0] > resultados[copaDoMundo[a][1]][0]) || (resultados[copaDoMundo[a][2]][0] > resultados[copaDoMundo[a][3]][0])){
             semifinalista1 = copaDoMundo[a][2]
        }else if((resultados[copaDoMundo[a][3]][0] > resultados[copaDoMundo['A'][1]][0]) || (resultados[copaDoMundo[a][3]][0] > resultados[copaDoMundo[a][1]][0]) || (resultados[copaDoMundo[a][3]][0] > resultados[copaDoMundo[a][0]][0])){
            semifinalista1 = copaDoMundo[a][3]
        }else{
            semifinalista1 = 'teste'
        }
        return semifinalista1;
    }
    let semi1 = pegarSemifinalista('A')
    let semi2 = pegarSemifinalista('B')
    let semi3 = pegarSemifinalista('C')
    let semi4 = pegarSemifinalista('D')
    let semi5 = pegarSemifinalista('E')
    let semi6 = pegarSemifinalista('F')
    let semi7 = pegarSemifinalista('G')
    let semi8 = pegarSemifinalista('H')

    const gerarFinalista1 = (a,b) =>{
        let temp1 = Math.floor(Math.random() * 10)
        let temp2 = Math.floor(Math.random() * 10)
        let vencedor = ''
        while(true){
            temp1 = Math.floor(Math.random() * 10)
            temp2 = Math.floor(Math.random() * 10)
            if(temp1 !== temp2){
                break
            }
        }
        if(temp1 > temp2){
            vencedor = a
        }else{
            vencedor = b
        }
        return vencedor
    }
    let gerarFinal1 = gerarFinalista1(semi1,semi2)
    let gerarFinal2 = gerarFinalista1(semi7,semi8)

    const gerarCampeao = () => {
        let final1 = gerarFinal1
        let final2 = gerarFinal2
        let temp1 = Math.floor(Math.random() * 10)
        let temp2 = Math.floor(Math.random() * 10)
        let vencedor = ''
            while(true){
                temp1 = Math.floor(Math.random() * 10)
                temp2 = Math.floor(Math.random() * 10)
                if(temp1 !== temp2){
                    break
                }
            }
        if(temp1 > temp2){
            vencedor = final1
        }else if(temp2 > temp1){
            vencedor = final2
        }
        return vencedor
    }
    let campeao = gerarCampeao()
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
                <NomeSelecao>{semi1}</NomeSelecao>
                <NomeSelecao>{semi2}</NomeSelecao>
            </DivCard>
            <DivCard>
                <NomeSelecao>{semi3}</NomeSelecao>
                <NomeSelecao>{semi4}</NomeSelecao>
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                <NomeSelecao>{gerarFinal1}</NomeSelecao>
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                <NomeSelecao>{campeao}</NomeSelecao>
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                <NomeSelecao>{gerarFinal2}</NomeSelecao>
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                <NomeSelecao>{semi5}</NomeSelecao>
                <NomeSelecao>{semi6}</NomeSelecao>
            </DivCard>
            <DivCard>
                <NomeSelecao>{semi7}</NomeSelecao>
                <NomeSelecao>{semi8}</NomeSelecao>
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
        <DivResult>
            <Result>Resultados</Result>
        </DivResult>
       <Tabelas>
                
            <Tabela>
                <caption>Grupo A</caption>
                <tbody>
                    <TR>
                        <TH>País</TH>
                        <TH>Pontos</TH>
                        <TH>Vitórias</TH>
                        <TH>Derrotas</TH>
                        <TH>N° GOLS</TH>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['A'][0]}</TD>
                        <TD>{resultados[copaDoMundo['A'][0]][0]}</TD>
                        <TD>{resultados[copaDoMundo['A'][0]][1]}</TD>
                        <TD>{resultados[copaDoMundo['A'][0]][2]}</TD>
                        <TD>{resultados[copaDoMundo['A'][0]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['A'][1]}</TD>
                        <TD>{resultados[copaDoMundo['A'][1]][0]}</TD>
                        <TD>{resultados[copaDoMundo['A'][1]][1]}</TD>
                        <TD>{resultados[copaDoMundo['A'][1]][2]}</TD>
                        <TD>{resultados[copaDoMundo['A'][1]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                <TR>
                        <TD>{copaDoMundo['A'][2]}</TD>
                        <TD>{resultados[copaDoMundo['A'][2]][0]}</TD>
                        <TD>{resultados[copaDoMundo['A'][2]][1]}</TD>
                        <TD>{resultados[copaDoMundo['A'][2]][2]}</TD>
                        <TD>{resultados[copaDoMundo['A'][2]][3]}</TD>
                </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['A'][3]}</TD>
                        <TD>{resultados[copaDoMundo['A'][3]][0]}</TD>
                        <TD>{resultados[copaDoMundo['A'][3]][1]}</TD>
                        <TD>{resultados[copaDoMundo['A'][3]][2]}</TD>
                        <TD>{resultados[copaDoMundo['A'][3]][3]}</TD>
                    </TR>
                </tbody>
            </Tabela>
            <Tabela>
                <caption>Grupo B</caption>
                <tbody>
                    <TR>
                        <TH>País</TH>
                        <TH>Pontos</TH>
                        <TH>Vitórias</TH>
                        <TH>Derrotas</TH>
                        <TH>N° GOLS</TH>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['B'][0]}</TD>
                        <TD>{resultados[copaDoMundo['B'][0]][0]}</TD>
                        <TD>{resultados[copaDoMundo['B'][0]][1]}</TD>
                        <TD>{resultados[copaDoMundo['B'][0]][2]}</TD>
                        <TD>{resultados[copaDoMundo['B'][0]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['B'][1]}</TD>
                        <TD>{resultados[copaDoMundo['B'][1]][0]}</TD>
                        <TD>{resultados[copaDoMundo['B'][1]][1]}</TD>
                        <TD>{resultados[copaDoMundo['B'][1]][2]}</TD>
                        <TD>{resultados[copaDoMundo['B'][1]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['B'][2]}</TD>
                        <TD>{resultados[copaDoMundo['B'][2]][0]}</TD>
                        <TD>{resultados[copaDoMundo['B'][2]][1]}</TD>
                        <TD>{resultados[copaDoMundo['B'][2]][2]}</TD>
                        <TD>{resultados[copaDoMundo['B'][2]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['B'][3]}</TD>
                        <TD>{resultados[copaDoMundo['B'][3]][0]}</TD>
                        <TD>{resultados[copaDoMundo['B'][3]][1]}</TD>
                        <TD>{resultados[copaDoMundo['B'][3]][2]}</TD>
                        <TD>{resultados[copaDoMundo['B'][3]][3]}</TD>
                    </TR>
                </tbody>
            </Tabela>
            <Tabela>
            <caption>Grupo C</caption>  
            <tbody>
                    <TR>
                        <TH>País</TH>
                        <TH>Pontos</TH>
                        <TH>Vitórias</TH>
                        <TH>Derrotas</TH>
                        <TH>N° GOLS</TH>
                    </TR>
                </tbody>
                
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['C'][0]}</TD>
                        <TD>{resultados[copaDoMundo['A'][0]][0]}</TD>
                        <TD>{resultados[copaDoMundo['A'][0]][1]}</TD>
                        <TD>{resultados[copaDoMundo['A'][0]][2]}</TD>
                        <TD>{resultados[copaDoMundo['A'][0]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['C'][1]}</TD>
                        <TD>{resultados[copaDoMundo['C'][1]][0]}</TD>
                        <TD>{resultados[copaDoMundo['C'][1]][1]}</TD>
                        <TD>{resultados[copaDoMundo['C'][1]][2]}</TD>
                        <TD>{resultados[copaDoMundo['C'][1]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['C'][2]}</TD>
                        <TD>{resultados[copaDoMundo['C'][2]][0]}</TD>
                        <TD>{resultados[copaDoMundo['C'][2]][1]}</TD>
                        <TD>{resultados[copaDoMundo['C'][2]][2]}</TD>
                        <TD>{resultados[copaDoMundo['C'][2]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['C'][3]}</TD>
                        <TD>{resultados[copaDoMundo['C'][3]][0]}</TD>
                        <TD>{resultados[copaDoMundo['C'][3]][1]}</TD>
                        <TD>{resultados[copaDoMundo['C'][3]][2]}</TD>
                        <TD>{resultados[copaDoMundo['C'][3]][3]}</TD>
                    </TR>
                </tbody>
            </Tabela>
            <Tabela>
            <caption>Grupo D</caption>
            <tbody>
                    <TR>
                        <TH>País</TH>
                        <TH>Pontos</TH>
                        <TH>Vitórias</TH>
                        <TH>Derrotas</TH>
                        <TH>N° GOLS</TH>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['D'][0]}</TD>
                        <TD>{resultados[copaDoMundo['D'][0]][0]}</TD>
                        <TD>{resultados[copaDoMundo['D'][0]][1]}</TD>
                        <TD>{resultados[copaDoMundo['D'][0]][2]}</TD>
                        <TD>{resultados[copaDoMundo['D'][0]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['D'][1]}</TD>
                        <TD>{resultados[copaDoMundo['D'][1]][0]}</TD>
                        <TD>{resultados[copaDoMundo['D'][1]][1]}</TD>
                        <TD>{resultados[copaDoMundo['D'][1]][2]}</TD>
                        <TD>{resultados[copaDoMundo['D'][1]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['D'][2]}</TD>
                        <TD>{resultados[copaDoMundo['D'][2]][0]}</TD>
                        <TD>{resultados[copaDoMundo['D'][2]][1]}</TD>
                        <TD>{resultados[copaDoMundo['D'][2]][2]}</TD>
                        <TD>{resultados[copaDoMundo['D'][2]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['D'][3]}</TD>
                        <TD>{resultados[copaDoMundo['D'][3]][0]}</TD>
                        <TD>{resultados[copaDoMundo['D'][3]][1]}</TD>
                        <TD>{resultados[copaDoMundo['D'][3]][2]}</TD>
                        <TD>{resultados[copaDoMundo['D'][3]][3]}</TD>
                    </TR>
                </tbody>
            </Tabela>
            <Tabela>
            <caption>Grupo E</caption>
            <tbody>
                    <TR>
                        <TH>País</TH>
                        <TH>Pontos</TH>
                        <TH>Vitórias</TH>
                        <TH>Derrotas</TH>
                        <TH>N° GOLS</TH>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['E'][0]}</TD>
                        <TD>{resultados[copaDoMundo['E'][0]][0]}</TD>
                        <TD>{resultados[copaDoMundo['E'][0]][1]}</TD>
                        <TD>{resultados[copaDoMundo['E'][0]][2]}</TD>
                        <TD>{resultados[copaDoMundo['E'][0]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['E'][1]}</TD>
                        <TD>{resultados[copaDoMundo['E'][1]][0]}</TD>
                        <TD>{resultados[copaDoMundo['E'][1]][1]}</TD>
                        <TD>{resultados[copaDoMundo['E'][1]][2]}</TD>
                        <TD>{resultados[copaDoMundo['E'][1]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['E'][2]}</TD>
                        <TD>{resultados[copaDoMundo['E'][2]][0]}</TD>
                        <TD>{resultados[copaDoMundo['E'][2]][1]}</TD>
                        <TD>{resultados[copaDoMundo['E'][2]][2]}</TD>
                        <TD>{resultados[copaDoMundo['E'][2]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['E'][3]}</TD>
                        <TD>{resultados[copaDoMundo['E'][3]][0]}</TD>
                        <TD>{resultados[copaDoMundo['E'][3]][1]}</TD>
                        <TD>{resultados[copaDoMundo['E'][3]][2]}</TD>
                        <TD>{resultados[copaDoMundo['E'][3]][3]}</TD>
                    </TR>
                </tbody>
            </Tabela>
            <Tabela>
            <caption>Grupo F</caption>
            <tbody>
                    <TR>
                        <TH>País</TH>
                        <TH>Pontos</TH>
                        <TH>Vitórias</TH>
                        <TH>Derrotas</TH>
                        <TH>N° GOLS</TH>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['F'][0]}</TD>
                        <TD>{resultados[copaDoMundo['F'][0]][0]}</TD>
                        <TD>{resultados[copaDoMundo['F'][0]][1]}</TD>
                        <TD>{resultados[copaDoMundo['F'][0]][2]}</TD>
                        <TD>{resultados[copaDoMundo['F'][0]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['F'][1]}</TD>
                        <TD>{resultados[copaDoMundo['F'][1]][0]}</TD>
                        <TD>{resultados[copaDoMundo['F'][1]][1]}</TD>
                        <TD>{resultados[copaDoMundo['F'][1]][2]}</TD>
                        <TD>{resultados[copaDoMundo['F'][1]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['F'][2]}</TD>
                        <TD>{resultados[copaDoMundo['F'][2]][0]}</TD>
                        <TD>{resultados[copaDoMundo['F'][2]][1]}</TD>
                        <TD>{resultados[copaDoMundo['F'][2]][2]}</TD>
                        <TD>{resultados[copaDoMundo['F'][2]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['F'][3]}</TD>
                        <TD>{resultados[copaDoMundo['F'][3]][0]}</TD>
                        <TD>{resultados[copaDoMundo['F'][3]][1]}</TD>
                        <TD>{resultados[copaDoMundo['F'][3]][2]}</TD>
                        <TD>{resultados[copaDoMundo['F'][3]][3]}</TD>
                    </TR>
                </tbody>
            </Tabela>
            <Tabela>
            <caption>Grupo G</caption>
            <tbody>
                    <TR>
                        <TH>País</TH>
                        <TH>Pontos</TH>
                        <TH>Vitórias</TH>
                        <TH>Derrotas</TH>
                        <TH>N° GOLS</TH>
                    </TR>
                </tbody>
                <TR>
                        <TD>{copaDoMundo['G'][0]}</TD>
                        <TD>{resultados[copaDoMundo['G'][0]][0]}</TD>
                        <TD>{resultados[copaDoMundo['G'][0]][1]}</TD>
                        <TD>{resultados[copaDoMundo['G'][0]][2]}</TD>
                        <TD>{resultados[copaDoMundo['G'][0]][3]}</TD>
                </TR>
                <TR>
                        <TD>{copaDoMundo['G'][1]}</TD>
                        <TD>{resultados[copaDoMundo['G'][1]][0]}</TD>
                        <TD>{resultados[copaDoMundo['G'][1]][1]}</TD>
                        <TD>{resultados[copaDoMundo['G'][1]][2]}</TD>
                        <TD>{resultados[copaDoMundo['G'][1]][3]}</TD>
                </TR>
                <TR>
                        <TD>{copaDoMundo['G'][2]}</TD>
                        <TD>{resultados[copaDoMundo['G'][2]][0]}</TD>
                        <TD>{resultados[copaDoMundo['G'][2]][1]}</TD>
                        <TD>{resultados[copaDoMundo['G'][2]][2]}</TD>
                        <TD>{resultados[copaDoMundo['G'][2]][3]}</TD>
                </TR>
                <TR>
                        <TD>{copaDoMundo['G'][3]}</TD>
                        <TD>{resultados[copaDoMundo['G'][3]][0]}</TD>
                        <TD>{resultados[copaDoMundo['G'][3]][1]}</TD>
                        <TD>{resultados[copaDoMundo['G'][3]][2]}</TD>
                        <TD>{resultados[copaDoMundo['G'][3]][3]}</TD>
                </TR>
            </Tabela>
            <Tabela>
            <caption>Grupo H</caption>
            <tbody>
                    <TR>
                        <TH>País</TH>
                        <TH>Pontos</TH>
                        <TH>Vitórias</TH>
                        <TH>Derrotas</TH>
                        <TH>N° GOLS</TH>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['H'][0]}</TD>
                        <TD>{resultados[copaDoMundo['H'][0]][0]}</TD>
                        <TD>{resultados[copaDoMundo['H'][0]][1]}</TD>
                        <TD>{resultados[copaDoMundo['H'][0]][2]}</TD>
                        <TD>{resultados[copaDoMundo['H'][0]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['H'][1]}</TD>
                        <TD>{resultados[copaDoMundo['H'][1]][0]}</TD>
                        <TD>{resultados[copaDoMundo['H'][1]][1]}</TD>
                        <TD>{resultados[copaDoMundo['H'][1]][2]}</TD>
                        <TD>{resultados[copaDoMundo['H'][1]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['H'][2]}</TD>
                        <TD>{resultados[copaDoMundo['H'][2]][0]}</TD>
                        <TD>{resultados[copaDoMundo['H'][2]][1]}</TD>
                        <TD>{resultados[copaDoMundo['H'][2]][2]}</TD>
                        <TD>{resultados[copaDoMundo['H'][2]][3]}</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD>{copaDoMundo['H'][3]}</TD>
                        <TD>{resultados[copaDoMundo['H'][3]][0]}</TD>
                        <TD>{resultados[copaDoMundo['H'][3]][1]}</TD>
                        <TD>{resultados[copaDoMundo['H'][3]][2]}</TD>
                        <TD>{resultados[copaDoMundo['H'][3]][3]}</TD>
                    </TR>
                </tbody>
            </Tabela>
       </Tabelas>
       
       </>
    )
}
