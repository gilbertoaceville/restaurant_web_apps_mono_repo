import styled from 'styled-components'

export const OrderRequestCardWrapper = styled('div')`
width: 100%;
height: 95px;
background: transparent url() 0% 0% no-repeat padding-box;
box-shadow: 0px 1px 5px #00000029;
border-radius: 11px;
opacity: 1;
filter: blur(0px);
display: flex;
justify-content: space-between;
/* align-items: center; */
/* overflow: hidden; */
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

.userAddress{
color: #7F7F7F;
font-size: 12px;
font-weight: lighter;
};

.userOrderID{
color: #f38b1c;
font-size: 12px;
font-weight: lighter;
};

.userOrder{
color: #000;
font-size: 15px;
};
`;

export const CardButtonsWrapper = styled('div')`
flex-basis: 50%;
display: flex;
justify-content: space-between;
align-items: center;

.left, .right{
flex-basis: 50%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
}
`;


export const TrackDeliveryContainer = styled('div')`
height: 100%;
width: 100%;
`;

export const DelivererContainer = styled('div')`
height: 70%;
display: flex;
align-items: center;
justify-content: space-around;
`;

export const DelivererImageContainer = styled('div')`
display: flex;
justify-content: center;
clip-path: circle(30%);
align-items: center;
object-fit: cover;
overflow: hidden;
flex-basis: 35%;
`;

export const DelivererImage = styled('img')`
height:50%;
width: 50%;
border-radius: 50%;
`;

export const DelivererDetailsContainer = styled('div')`
flex-basis: 60%;

.delivererName{
    font-size: 12px;
    font-weight: 600;
}
.delivererEmail{
    font-size: 10px;
    color: #7F7F7F;
    margin-top: 5px;
}
`;

export const TrackDeliveryText = styled('div')`
height: 30%;
font-size: 12px;
color: #f38b1c;
display: flex;
justify-content: center;
align-items: center;
font-weight: 600;
`;

export const DeliveredText = styled('div')`
font-size: 12px;
color: #40dc4f;
display: flex;
justify-content: center;
align-items: center;
font-weight: lighter;
`;

export const CanceledText = styled('div')`
font-size: 12px;
color: #ff7a4f;
display: flex;
justify-content: center;
align-items: center;
font-weight: lighter;
`;
