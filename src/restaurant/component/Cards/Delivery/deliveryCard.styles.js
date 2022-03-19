import styled from 'styled-components'

export const DeliveryCardWrapper = styled('div')`
width: 100%;
height: 95px;
background: transparent url() 0% 0% no-repeat padding-box;
box-shadow: 0px 1px 5px #00000029;
border-radius: 11px;
opacity: 1;
filter: blur(0px);
display: flex;
justify-content: space-between;
margin: 15px 0;

`;

export const CardDetailsWrapper = styled('div')`
flex-basis: 50%;
display: flex;
align-items: center;


`;

export const UserImageWrapper = styled('div')`
flex-basis: 30%;
display: flex;
align-items: center;
justify-content: center;

div{
width: 60px;
height: 60px;
border-radius: 50%;
object-fit: cover;
overflow: hidden;

    .userImage{
    width: 100%;
    height: 100%;
    clip-path: circle(50%);
    border-radius: inherit;
    box-shadow: 0px 3px 10px #0000001A;
    opacity: 1;
    }
}

`;


export const UserDetailsWrapper = styled('div')`
flex-basis: 70%;

div{
    padding: 2px 0;
    height: 100%;
}

.userName{
color: #000;
font-size: 15px;
font-weight: 600;
};

.userMail{
color: #7F7F7F;
font-size: 12px;
font-weight: lighter;
};

.userDistance{
color: #000;
font-size: 15px;
}
`;

export const CardTextButtonWrapper = styled('div')`
flex-basis: 50%;
display: flex;
align-items: center;

.text, .button{
flex-basis: 50%;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
color: #f38b1c;
font-size: 14px;
font-weight: bold;

p { 
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
div{
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
svg{
    font-size: 20px;
}
}}
}

.button{


    .call{
    padding: 5px;
    border-radius: 5px;
    background: #f38b1c;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        color: #fff;
        font-size: 18px;
    }
}
.whiteSpace{
    width: 30px;
}
}
`;