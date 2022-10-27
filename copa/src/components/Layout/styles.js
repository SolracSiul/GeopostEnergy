import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    background-color: rgba(66, 165, 245);
    grid-gap: 10px;
    padding: 10px;
    max-width: 1376px;
    margin: 0 auto;
`
export const Div = styled.div`
    text-align: center;
    font-size: 30px;
    /* background-color: aqua; */
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const DivCard = styled.div`
    background-color: rgba(227, 242, 253);

    width:  80px;
    height: 45px;
    margin: 10px;
    box-shadow: 3px 0px 19px 0px rgba(157,194,145,0.71);
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    text-align: center;
    &ul > li> h2{
        font-size: 6px;
        color: yellow;
    }
`
export const NomeSelecao = styled.small`
  font-size: 8px;
`
export const Li = styled.li`
    display: flex;
    flex-direction: column;
`
export const Tabelas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background-color: rgba(21, 101, 192);
    max-width: 1200px;
    margin: 0 auto;
    gap: 45px;
    
`
export const Tabela = styled.table`
    padding-top: 12px;
    padding-bottom: 20px;
    background-color: #5c5757;
    border: 5px solid #0c0d0c7e;
`
export const TR = styled.tr`
    padding: 20px;
`
export const TH = styled.th`
    background-color: rgba(227, 242, 253);
`
export const TD = styled.td`
    background-color: rgba(227, 242, 253);
`
export const DivResult = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Result = styled.h2`
    color:black;
    padding: 5px;
    font-size: 20px;
`