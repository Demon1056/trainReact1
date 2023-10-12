import styled from "styled-components";

export const StatList = styled.ul`
background-color: lightgray;
display: flex;
justify-content: space-between;
border-top: 1px solid red;
`

export const StatItem = styled.li`
flex-basis: calc(100%/3);
padding: 20px 0;
display: flex;
flex-direction: column;
align-items: center;
&:not(:last-child){
border-right: 1px solid red;}
`
export const Label = styled.span`
color:grey;
`
export const Value = styled.span`
font-weight: bold;
font-size: 18px;
`