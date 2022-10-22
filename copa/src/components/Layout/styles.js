import styled from "styled-components"

export const Container = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 120px 120px; 
  max-width: 1200px;
  margin: 0 auto;
  background-color: red;
  height: 60vh;
  gap: 10px;
  padding: 10px;
`
export const Div = styled.div`
    width: 120px;
    background-color: blue;
    color: white;
`