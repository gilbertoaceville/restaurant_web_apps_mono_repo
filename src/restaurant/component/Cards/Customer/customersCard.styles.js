import styled from 'styled-components'

export const CustomersCardWrapper = styled('div')`
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
color: #7F7F7F95;
font-size: 12px;
font-weight: lighter;
};

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
height: 100%;

.callTime{
    height: 100%;
    display: flex column;
    width: 100%;



}
.time{
    color: #7F7F7F95;
height: 40%;
width: 100%;
text-align: right;
display: flex;
justify-content: flex-end;
align-items: center;
font-weight: lighter;
font-size: 12px;
}
.call{
height: 50%;
float: right;
display: flex;
justify-content: flex-end;
align-items: center;
width: 30%;
cursor: pointer;
svg{
padding: 5px;
color: #fff;
background-color: #f38b1c;
border-radius: 8px;
font-size: 15px;
}
}
}
.whiteSpace{
    width: 30px;

}

`;