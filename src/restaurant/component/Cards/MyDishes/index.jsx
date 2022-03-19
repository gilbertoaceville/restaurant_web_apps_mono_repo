import {
    MyDishesCardWrapper,
    CardImageWrapper,
    CardTitleDiv,
    CardAddressDiv,
    CardPriceDiv,
    CardAddressText,
    CardAddressIcon,
    HeartIconWrapper
} from './mydishes.styles'
// import Image from 'next-images'
import PropTypes from "prop-types";
import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { IoMdHeartEmpty } from 'react-icons/io';



const MyDishesCard = ({
    cardData,
    onClick,
    wrapperStyle,
    cardTitleStyle,
    addrIconStyle,
    addresstyle,
    priceStyle }) => {

    return (
        <React.Fragment>
            {cardData.map((item, index) => {
                console.log(item.cardImg);
                return (
                    <React.Fragment>
                        <MyDishesCardWrapper
                            style={wrapperStyle}
                            onClick={onClick}
                            key={'mydishescard' + index}>
                            <HeartIconWrapper className='heart-icon'><IoMdHeartEmpty /></HeartIconWrapper>
                            <CardImageWrapper bgImg={item.cardImg.src} />
                            <CardTitleDiv
                                style={cardTitleStyle}
                            >{item.cardTitle || 'Enter Card Title'}</CardTitleDiv>
                            <CardAddressDiv>
                                <CardAddressIcon >{item.cardLocationIcon || <MdLocationOn color={"#f38b1c"} />}</CardAddressIcon>
                                <CardAddressText
                                    style={addresstyle}
                                >{item.cardLocationAddress || 'enter location address'}</CardAddressText>
                            </CardAddressDiv>

                            <CardPriceDiv
                                style={priceStyle}
                            ><sup>₦</sup>{item.cardPriceTag}</CardPriceDiv>
                        </MyDishesCardWrapper>
                    </React.Fragment>)
            }
            )}
        </React.Fragment>
    )
}

MyDishesCard.prototype = {
    cardData: PropTypes.array,
}
export default MyDishesCard