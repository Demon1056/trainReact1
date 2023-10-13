import styled from "styled-components";
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;}

    const makeSize = p=>`calc(100% / ${p.length})`
    export const StatisticTitle = styled.h2`
text-align: center;
text-transform: uppercase;
color: gray;
padding: 30px 0;
background-color: white;`

export const StatisticList = styled.ul`
display: flex;
justify-content: space-between;

`
export const StatisticItem = styled.li`
flex-basis: ${makeSize};
padding: 25px 0;
color: white;
font-size: 15px;
text-align: center;
display: flex;
flex-direction: column;
background-color: ${()=>getRandomColor() };
`
export const StatisticValue = styled.span`
font-size: 25px;
`
