import styled from 'styled-components'


export const SecondHeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
margin-top: 0px;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1

:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(100deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%); 
    z-index: 2;
}

@media screen and (max-width: 480px){
    width: 330px !important;
    height: 300px !important 
}

`;

export const SecondHeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;

`

export const SecondVideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232834;
`;

export const SecondHeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;

`

export const SecondHeroH1 = styled.h1`
color: #fff;
font-size: 48px;
text-align: center;

@media screen and (max-width: 768px){
    font-size: 32px;
}
@media screen and (max-width: 480px){
    font-size: 12px;
}

`;

export const SecondHeroP = styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px){
    font-size: 24px
}
@media screen and (max-width: 768px){
    font-size: 18px
}
`

export const SecondHeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;

`

export const SecondHeroButton = styled.button`
background: #fff;
height: 2.5rem;
width: 35rem;
color: black;


&:hover{
    background: transparent;
    transition: all 1s ease-in-out;
    color: white
    
}
@media screen and (max-width: 768px){
   width: 20rem;
}
@media screen and (max-width: 480px){
    width: 15rem;
}
`