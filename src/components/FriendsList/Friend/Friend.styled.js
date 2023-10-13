import styled from "styled-components";

export const FriendItem = styled.li`
display: flex;
align-items: center;
border: 1px solid red;
border-radius: 15px;
padding: 10px 5px;
font-size: 20px;
font-weight: bold;
&:not(:last-child){
    margin-bottom: 15px;
}`

export const Status = styled.span`
margin-right: 10px; 
&:before{
    content: '';
    display: block;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${p=>(p.stat)?"green":"red"}`

export const ImgBorder = styled.div`
width: 50px;
height: 50px;
border: 1px solid grey;
border-radius: 15px;
margin-right: 20px;`