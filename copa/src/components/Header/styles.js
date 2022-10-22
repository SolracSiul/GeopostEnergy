import styled from "styled-components"

export const Luis = styled.header`
    background-color: #9da65c !important;
`
export const NavBar = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 45px;
`
export const Btn = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
        color: yellow;
    }
`
