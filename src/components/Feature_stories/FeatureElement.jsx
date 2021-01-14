import styled from 'styled-components'

export const FeatureContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: rgb(5, 70, 80);

@media screen and (max-width: 768px){
    height: 1100px;
}
@media screen and (max-width: 480px){
    height: 1300px;
}

`

export const FeatureWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px){
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
    padding: 0 20px
}

`

export const FeatureCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
position: relative;
&:hover {
    transform: scale(1.08);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    position: relative
}
`

export const FeatureImage = styled.img`
height: 190px;
width: 210px;
margin-bottom: 10px;


`

export const FeatureH1 = styled.h1`
font-size: 2.5rem;
color: #fff;
margin-bottom: 64px;

@media screen and (max-width: 480px){
    font-size: 2rem;
    margin-bottom: 64px;
}
`



export const FeatureButton = styled.button`
position: absolute;
top: 0;
margin-top: 120px;
margin-left: 20px;
width: 65%;
background: transparent;
color: #fff;
&:hover {
    transform: scale(1.05);
    transition: all 1s ease-in-out;
    cursor: pointer;
    background: #fff;
    color: #000
    
}

`