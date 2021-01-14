import styled from 'styled-components'

export const Paragraph = styled.p`
font-weight: bold;
font-size: 2rem;
margin-top: 25px; 
margin-left: 10rem;
margin-bottom: 15px;
text-align: center;
background: rgb(5, 70, 80)

@media screen and (max-width: 480px){
    font-size: 15px;
    margin-top: 25px; 
    margin-left: 0px;
    margin-bottom: 0px;
    
}
`

export const SecondParagraph = styled.p`
font-size: 1.5rem;
font-weight: light;
margin-top: 25px; 
margin-left: 10rem;
margin-bottom: 15px;
@media screen and (max-width: 480px){
    font-size: 15px;
    margin-top: 25px; 
    margin-left: 0px;
    margin-bottom: 0px;
     
}

`
