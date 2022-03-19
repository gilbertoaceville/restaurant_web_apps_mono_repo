import React, { useState } from 'react'
import {
  MyDishesWrapper,
  MyDishesHeader,
  MyDishesList
} from './mydishes.styles'
import MyDishesCard from '../../../component/Cards/MyDishes'
import CardImg from '../../../../lib/assets/dish1.jpg'
import Sausage from '../../../../lib/assets/sausage.jpg'
import HotDog from '../../../../lib/assets/hotdogpie.jpg'
import Chicken from '../../../../lib/assets/chicken.jpg'
import { MdLocationOn } from 'react-icons/md';
import MiniHeader from '../../../component/MiniHeader'
import SingleDish from './SingleDish'
import AddDish from './AddDish'
const MyDishes = () => {

  const [toggle, setToggle] = useState(true);
  const [toggleAddDish, setToggleAddDish] = useState(true);

  return (
    <MyDishesWrapper>
      {!toggle ?
        <SingleDish  onClick={()=>setToggle(!toggle)}/>
        : null}

      {!toggleAddDish ?
        <AddDish 
        arrowTitle ={'Back to My Dishes'}
        onClick={()=>setToggleAddDish(!toggleAddDish)} />
        : null}

      {toggle && toggleAddDish ?
        <React.Fragment>
          <MyDishesHeader>
            <MiniHeader onClick={()=>setToggleAddDish(!toggleAddDish)} addDish searchBar />
          </MyDishesHeader>
          <MyDishesList>
            <MyDishesCard onClick={()=>setToggle(!toggle)} cardData={cardData} />
          </MyDishesList>
        </React.Fragment>
        : null}
    </MyDishesWrapper>
  );
}

export default MyDishes;

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
    cardImg: HotDog,
    cardImgAlt: "hot-dog0pie-image",
    cardTitle: " Hot Dog Pie",
    cardLocationIcon: <MdLocationOn color="#F38B1C" />,
    cardLocationAddress: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    cardPriceTag: " 800",
  },
  {
    cardImg: HotDog,
    cardImgAlt: "hot-dog0pie-image",
    cardTitle: " Hot Dog Pie",
    cardLocationIcon: <MdLocationOn color="#F38B1C" />,
    cardLocationAddress: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    cardPriceTag: " 700.99",
  },
  {
    cardImg: HotDog,
    cardImgAlt: "hot-dog0pie-image",
    cardTitle: " Hot Dog Pie",
    cardLocationIcon: <MdLocationOn color="#F38B1C" />,
    cardLocationAddress: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    cardPriceTag: " 400",
  },
  {
    cardImg: Chicken,
    cardImgAlt: "chicken-image",
    cardTitle: " Chicken Crunch",
    cardLocationIcon: <MdLocationOn color="#F38B1C" />,
    cardLocationAddress: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    cardPriceTag: " 1200",
  },
  {
    cardImg: Sausage,
    cardImgAlt: "sausage-image",
    cardTitle: " Sausage Roll",
    cardLocationIcon: <MdLocationOn color="#F38B1C" />,
    cardLocationAddress: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    cardPriceTag: " 1000",
  },
  {
    cardImg: HotDog,
    cardImgAlt: "hot-dog0pie-image",
    cardTitle: " Hot Dog Pie",
    cardLocationIcon: <MdLocationOn color="#F38B1C" />,
    cardLocationAddress: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    cardPriceTag: " 1000",
  },
  {
    cardImg: Chicken,
    cardImgAlt: "chicken-image",
    cardTitle: " Chicken Crunch",
    cardLocationIcon: <MdLocationOn color="#F38B1C" />,
    cardLocationAddress: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    cardPriceTag: " 2000",
  },
  {
    cardImg: HotDog,
    cardImgAlt: "hot-dog0pie-image",
    cardTitle: " Hot Dog Pie",
    cardLocationIcon: <MdLocationOn color="#F38B1C" />,
    cardLocationAddress: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    cardPriceTag: " 800",
  },
  {
    cardImg: HotDog,
    cardImgAlt: "hot-dog0pie-image",
    cardTitle: " Hot Dog Pie",
    cardLocationIcon: <MdLocationOn color="#F38B1C" />,
    cardLocationAddress: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    cardPriceTag: " 700.99",
  },
  {
    cardImg: HotDog,
    cardImgAlt: "hot-dog0pie-image",
    cardTitle: " Hot Dog Pie",
    cardLocationIcon: <MdLocationOn color="#F38B1C" />,
    cardLocationAddress: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    cardPriceTag: " 400",
  },
  {
    cardImg: Chicken,
    cardImgAlt: "chicken-image",
    cardTitle: " Chicken Crunch",
    cardLocationIcon: <MdLocationOn color="#F38B1C" />,
    cardLocationAddress: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    cardPriceTag: " 1200",
  },
  {
    cardImg: Sausage,
    cardImgAlt: "sausage-image",
    cardTitle: " Sausage Roll",
    cardLocationIcon: <MdLocationOn color="#F38B1C" />,
    cardLocationAddress: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    cardPriceTag: " 1000",
  },
  {
    cardImg: HotDog,
    cardImgAlt: "hot-dog0pie-image",
    cardTitle: " Hot Dog Pie",
    cardLocationIcon: <MdLocationOn color="#F38B1C" />,
    cardLocationAddress: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    cardPriceTag: " 1000",
  },
  {
    cardImg: Chicken,
    cardImgAlt: "chicken-image",
    cardTitle: " Chicken Crunch",
    cardLocationIcon: <MdLocationOn color="#F38B1C" />,
    cardLocationAddress: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    cardPriceTag: " 2000",
  },
]
