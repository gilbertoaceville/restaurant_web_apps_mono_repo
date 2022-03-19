import React,{useState} from 'react';
import {
  DashboardWrapper,
  AddDishButton,
  BodyHead,
  Body,
  CardWrapper
} from './dashboard.styles';
import Card from '../../../component/Cards';
import MiniHeader from '../../../component/MiniHeader';
import AddDish from '../MyDishes/AddDish';
import MyDishesCard from '../../../component/Cards/MyDishes';
import CardImg from '../../../../lib/assets/dish1.jpg'
import Sausage from '../../../../lib/assets/sausage.jpg'
import { MdLocationOn } from 'react-icons/md';
import OrderRequestCard from '../../../component/Cards/OrderRequest';
import UserImage from '../../../../lib/assets/kk.jpg'


const Dashboard = () => {

  const [toggle, setToggle] = useState(true);
  const [toggleAddDish, setToggleAddDish] = useState(true);
  return (
    <DashboardWrapper>
        {
          toggleAddDish?
      <BodyHead>
          <MiniHeader
          onClick={()=>setToggleAddDish(!toggleAddDish)}
          addDish
          />

          </BodyHead>
          :null
        }
        {
          toggleAddDish ?
      <Body>
          <React.Fragment>
          <CardWrapper>
            <div style={{height:'9%', display:'flex', justifyContent: 'space-between', padding: '5px 15px'}}>
              <div style={{fontSize: '14px'}}>{'Mostly Ordered'}</div>
              <div style={{color:'#f38b1c', fontSize: '12px'}}>{'See All >'}</div>
            </div>
          <div style={{padding:'0 15px',display:'flex', overflow: 'hidden', height: 'max-content'}}>
            <MyDishesCard 
            wrapperStyle={{
              height: '200px',
              padding: '2px',
              margin: '0px 5px'
            }}
            priceStyle={{
              fontSize: '8px',
              hover: {
              color: 'red'

              }
            }}
            cardTitleStyle={{
              fontSize: '10px'
            }}
            addrIconStyle={{
              fontSize:'13px'
            }}
            addresstyle={{
              fontSize: '9px'
            }}
            cardData={cardData}/>
            </div>
        </CardWrapper>
        <CardWrapper>
        <div style={{height:'7%', display:'flex', justifyContent: 'space-between', padding: '5px 15px'}}>
              <div style={{fontSize: '14px'}}>{'Recent order request'}<br/>
              <span  style={{fontSize: '10px', color:'#7F7F7F95'}}>{'You have not responded to 10 new orders'}</span>
              </div>
              <div style={{color:'#f38b1c', fontSize: '12px'}}>{'See All >'}</div>
            </div>
          <div style={{padding:'0 15px', overflow: 'hidden', height: 'max-content'}}>
            <OrderRequestCard 
            userDetailsOnly
            userdata={orderRequestCardData} 
            userDetailsStyle={{
              padding: '0 10px',
            }}
            userNameStyle={{
              fontSize:'12px'
            }}
            userAdressStyle={{
              fontSize:'10px'
            }}
            userOrderStyle={{
              fontSize:'12px'
            }}
            />
            </div>
        </CardWrapper>
        <CardWrapper>
          <div style={{display:'flex', overflow: 'hidden', height: 'max-content'}}>
           
            </div>
        </CardWrapper> 
        <CardWrapper>
          <div style={{display:'flex', overflow: 'hidden', height: 'max-content'}}>
            
            </div>
        </CardWrapper>
          </React.Fragment>
      </Body>
      : 
      <Body style={{height: '100%'}}>
        <AddDish 
        arrowTitle={'Back to Dashboard'}
        onClick={()=>setToggleAddDish(!toggleAddDish)}
        
        />
      </Body>
        }
    </DashboardWrapper>
  );
}

export default Dashboard;
const cardData = [
  {
    cardImg: CardImg,
    cardImgAlt: "peppersoup-image",
    cardTitle: "Chicken peppersoup",
    cardLocationIcon: <MdLocationOn color="#F38B1C" />,
    cardLocationAddress: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    cardPriceTag: " 1700",
  },
  {
    cardImg: Sausage,
    cardImgAlt: "sausage-image",
    cardTitle: " Sausage Roll",
    cardLocationIcon: <MdLocationOn color="#F38B1C" />,
    cardLocationAddress: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    cardPriceTag: " 500",
  },
  {
    cardImg: Sausage,
    cardImgAlt: "sausage-image",
    cardTitle: " Sausage Roll",
    cardLocationIcon: <MdLocationOn color="#F38B1C" />,
    cardLocationAddress: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    cardPriceTag: " 500",
  },
]


const orderRequestCardData = [
  {
    userImage: UserImage,
    userName: 'kayode kaleyemi',
    userAddress: '45, Aba owerri road.',
    userOrderID: null,
    userOrder: 'Pizza babeieque',
  },
  {
    userImage: UserImage,
    userName: 'John Orimaye',
    userAddress: '2a, School road, Umuahia.',
    userOrderID: null,
    userOrder: 'Pizza babeieque',
  }
]