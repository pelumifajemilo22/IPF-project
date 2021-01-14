import styled from 'styled-components'

export const ConnectLeaderButton = styled.button`
background: #fff;

&:hover{
    transform: scale(1.05);
    transition: all 1s ease-in-out;
    cursor: pointer;
    background: rgb(2, 36, 49);
    color: #fff
}

`
export const IframeGoogleMap = styled.iframe`
width: 600px !important;
height: 300px !important;

@media screen and (max-width: 480px){
    width: 330px !important;
    height: 300px !important 
}
`