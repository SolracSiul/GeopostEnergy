import styled from "styled-components"

export const Container = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto;
    background-color: blue;
    grid-gap: 10px;
    padding: 10px;
    max-width: 1376px;
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
    background-color: yellow;

    width:  80px;
    height: 45px;
    margin: 10px;
    
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    text-align: center;
`
export const NomeSelecao = styled.small`
  font-size: 8px;
`