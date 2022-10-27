
import { Container, Div, DivCard, NomeSelecao, Li, Tabelas, TD, TH, TR, Tabela, DivResult, Result} from './styles';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Layout(){

    // const containerRef = useRef(null);
    // useEffect(() => console.log(typeof containerRef.current))

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
   const [grupoA, setgrupoA] = useState([])

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
    // //grupo1
    // let time1 = 'a'; let time2 = 'a';let time3 = 'a';let time4 = 'a'; let pntsTime1; let pntsTime2; let pntsTime3; let pntsTime4;
    // //grupo2
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
    const gerarJogo = () =>{
        let grupoDaVez = copaDoMundo['A'];
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
    gerarJogo()
    
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
                <NomeSelecao></NomeSelecao>
                <NomeSelecao></NomeSelecao>
            </DivCard>
            <DivCard>
                <NomeSelecao></NomeSelecao>
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
                <NomeSelecao>abacate:</NomeSelecao>
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                {/* <Selecoes></Selecoes> */}
            </DivCard>
        </Div>

        <Div>
            <DivCard>
                <NomeSelecao></NomeSelecao>
                <NomeSelecao></NomeSelecao>
            </DivCard>
            <DivCard>
                <NomeSelecao></NomeSelecao>
                <NomeSelecao></NomeSelecao>
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
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>{resultados[copaDoMundo['A'][0]][0]}</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                <TR>
                    <TD></TD>
                    <TD>teste</TD>
                    <TD>teste</TD>
                    <TD>teste</TD>
                    <TD>teste</TD>
                </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
            </Tabela>
            <Tabela>
            
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
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
            </Tabela>
            <Tabela>
                            
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
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
            </Tabela>
            <Tabela>
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
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
            </Tabela>
            <Tabela>
            
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
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
            </Tabela>
            <Tabela>
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
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
            </Tabela>
            <Tabela>
    
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
                    <TD></TD>
                    <TD>teste</TD>
                    <TD>teste</TD>
                    <TD>teste</TD>
                    <TD>teste</TD>
                </TR>
                <TR>
                    <TD></TD>
                    <TD>teste</TD>
                    <TD>teste</TD>
                    <TD>teste</TD>
                    <TD>teste</TD>
                </TR>
                <TR>
                    <TD></TD>
                    <TD>teste</TD>
                    <TD>teste</TD>
                    <TD>teste</TD>
                    <TD>teste</TD>
                </TR>
                <TR>
                    <TD></TD>
                    <TD>teste</TD>
                    <TD>teste</TD>
                    <TD>teste</TD>
                    <TD>teste</TD>
                </TR>
            </Tabela>
            <Tabela>
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
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
                <tbody>
                    <TR>
                        <TD></TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                        <TD>teste</TD>
                    </TR>
                </tbody>
            </Tabela>
       </Tabelas>
       
       </>
    )
}
