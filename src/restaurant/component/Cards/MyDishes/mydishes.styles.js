import styled from 'styled-components'


export const MyDishesCardWrapper = styled('div')`
padding: 10px;
width: 160px;
height: 250px;  
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 0px 10px #0000001A;
border-radius: 16px;
margin: 15px 10px;
cursor: pointer;
transition: transform 200ms;
position: relative;

&:hover{
    transform: scale(1.1);
    
    .heart-icon{
        visibility: visible;
    }
}
`;

export const HeartIconWrapper = styled('div')`
border: 1px solid none;
width: max-content;
padding: 5px;
border-bottom-left-radius: 100px;
border-bottom-right-radius:100px;
background: #97938ADB ;
position: absolute;
right: 30px;
z-index: 1;
visibility: hidden;
-webkit-transition:visibility 300ms ease-in;
  -moz-transition: visibility 300ms ease-in;
  -o-transition:   visibility 300ms ease-in;
  transition:      visibility 300ms ease-in;

svg{
    color: #fff;
}

`;

export const CardImageWrapper = styled('div')`
height: 50%;
overflow: hidden;
object-fit: cover;
border-top-left-radius:  16px;
border-top-right-radius: 16px;
background: ${({ bgImg }) => `transparent url(${bgImg}) 0% 0% no-repeat padding-box;`};
background-position: center;
background-size: cover;
transition: transform 200ms;

&:hover{
    transform: scale(1.1);
}
`;

export const CardImage = styled('img')`
display: flex;
justify-content: center;
align-items: center;

`;
export const CardTitleDiv = styled('div')`
height: 10%;
display: flex;
padding: 5px 0px;
align-items: center;
font: normal normal 600 14px Open Sans;;

`;

export const CardAddressDiv = styled('div')`
height: 22%;
display: flex;
width: 100%;
`;

export const CardAddressIcon = styled('div')`
    padding:  5px 0px;
    display: flex;
align-items: flex-start;
`;

export const CardAddressText = styled('div')`
display: flex;
padding:  5px 10px;
text-align: left;
font: normal normal normal 12px Open Sans;
letter-spacing: 0px;
color: #7F7F7F;
opacity: 1;
flex-grow: 1;

`;

export const CardPriceDiv = styled('div')`
height: 20%;
display: flex;
justify-content: center;
align-items: center;
font: normal normal bold 16px/14px Open Sans;

sup{
    height: 48%;
}
`;