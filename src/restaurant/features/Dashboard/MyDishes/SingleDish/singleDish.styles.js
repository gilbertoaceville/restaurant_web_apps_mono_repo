import styled from "styled-components";
import Sausage from '../../../../../lib/assets/sausage.jpg'

export const SingleDishWrapper = styled("div")`
/* border: 1px solid red; */
height: 100%;
width: 97%;
float: right;
display: flex;
flex-direction: column;
`;

export const SingleDishBody = styled("div")`
height: 80%;
display: flex;
margin-top: 40px;
justify-content: space-between;
`;


export const DishImageWrapper = styled('div')`
flex-basis: 50%;
object-fit: cover;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden;
border-radius: 10px;


img{
    height:100%;
    width: 100%;
    transition: transform 300ms; 
}

&:hover{
        img{
    transform: scale(1.19);
    }
}


`;

export const DishDetails = styled('div')`
    flex-basis: 45%;
`;

export const DishTitleAndPrice = styled('div')`
    height:10%;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

.dish-price{
    float: right;
    font-size: 17px;

}
`;

export const DishCode = styled('div')`
    color: #7F7F7F;
    font-weight: lighter;
    font-size: 10px;
`;

export const DishRating = styled('div')`
    display: flex;
    justify-content: space-around;
    width: max-content;
   
   svg{
       color:#FFBB00 ;
       cursor: pointer;
       padding: 0 2px;
   }
`;

export const DishInfo = styled('div')`
   color: #7F7F7F;
    font-weight: lighter;
    font-size: 10px;
    padding: 10px 1px;
    text-align: justify;
`;

export const DishAvailability = styled('div')`
   margin-top: 10px;
   display: flex;
   justify-content: space-between;
   align-items: center;

   span{
    font-size: 18px;
    font-weight: bold;
   }

 .availability-text{
    color: #7F7F7F;
    font-weight: lighter;
    font-size: 10px;
 }
`;