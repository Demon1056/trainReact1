import styled from "styled-components";

export const Table = styled.table`
 border-collapse: collapse; 
width: 100%; 
text-align: center;
color: grey;
`
export const Thead =styled.thead`
background-color: aqua;
padding: 250px;
color:black;
`

export const Tr = styled.tr`
border: 1px solid black; 

background-color: aquamarine;
&:nth-child(odd){
background-color: white;}`

export const Td = styled.td`border: 1px solid black; `
