import  styled from 'styled-components'

export const TopProfileContainer = styled.div` 
padding: 30px 0;
background-color: white;
text-align: center;
`

export const ProfileImg = styled.img` 
width: 300px;
height: 300px;
border-radius: 50%;
border: 1px solid red;
margin-left: auto;
margin-right: auto;
margin-bottom: 50px;
`
export const ProfileName = styled.p` 
font-size: 28px;
font-weight: bold;
margin-bottom: 15px;
`
export const ProfileText = styled.p` 
font-size: 20px;
margin-bottom: 15px;
color: grey;
&:last-child {
    margin-bottom: 0;
  }
`