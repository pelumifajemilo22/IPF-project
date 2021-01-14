import styled from 'styled-components'


export const DivWrapper = styled.div`
min-height: 0.5vh;
border: 3px solid #f0eaea;
position: sticky;
`
export const UlStyle = styled.ul`
list-style-type: none;
text-align: center;
border-top: 0.2px  transparent;
background-color: white;
`
export const ListStyle = styled.li`
text-decoration: none
`

export const Input = styled.input`
width: 70%;
height: 1.8rem;
font-family: Arial, Helvetica, sans-serif;
font-size: 14px;
color: rgb(0, 0, 0);
padding: 10px 5x;
outline: none;
text-align: center;
margin-top: 3px;
margin-left: 10px
@media screen and (max-width: 480px){
    min-width:2rem ;
    height: 1.2rem;
    margin-left: 10px
}
`
export const Span = styled.span`
font-size: 12px;
color: rgb(2, 36, 49);
@media screen and (max-width: 480px){
    display: none;
}

`