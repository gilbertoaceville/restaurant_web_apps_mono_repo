/**
 * This is Order Request Card
 * It contains all the tabs under Order Request
 * Use the 'type' prop to specify which card you need. 
 * e.g type='delivered' will give me the delivered card details in fullS
 * 
 * for newOrder, specify type in the userdata to decide whether assign or accept
 */


import React from 'react'
import {
OrderRequestCardWrapper,
CardDetailsWrapper,
CardButtonsWrapper,
UserImageWrapper,
UserDetailsWrapper,
TrackDeliveryContainer,
DelivererContainer,
DelivererImageContainer,
DelivererDetailsContainer,
DelivererImage,
TrackDeliveryText,
CanceledText,
DeliveredText


} from './orderRequest.styles'
import { capitalizeWords } from '../../../../lib/factory.lib';
import { Button } from '../../../../lib/components/Button'
import { MdKeyboardArrowRight } from 'react-icons/md';


const index = ({
data,
type,
btnSize,
userdata,
userDetailsOnly, userDetailsStyle,
userNameStyle,
userAdressStyle,
userOrderStyle
}) => {

return (
<React.Fragment>
{
userdata.map((item, index) => {
return (
    <OrderRequestCardWrapper key={"idx" + index}>
 {
    userDetailsOnly ?
        <CardDetailsWrapper style={userDetailsStyle}>
            <UserImageWrapper>
                <div>
                    <img
                        className={'userImage'}
                        src={item.userImage.src} alt="User Image"
                    />
                </div>
            </UserImageWrapper>
            <UserDetailsWrapper>
                <div style={userNameStyle} className={'userName'}>{capitalizeWords(item.userName)}</div>
                <div style={userAdressStyle} className={'userAddress'}>{item.userAddress}</div>
             {userDetailsOnly? '' : <div  className={'userOrderID'}>{item.userOrderID}</div> }  
                <div style={userOrderStyle} className={'userOrder'}>{item.userOrder}</div>
            </UserDetailsWrapper>
        </CardDetailsWrapper>
       : 
       <CardDetailsWrapper style={userDetailsStyle}>
            <UserImageWrapper>      
                <div>
                    <img
                        className={'userImage'}
                        src={item.userImage.src} alt="User Image"
                    />
                </div>
            </UserImageWrapper>
            <UserDetailsWrapper>
                <div style={userNameStyle} className={'userName'}>{capitalizeWords(item.userName)}</div>
                <div style={userAdressStyle} className={'userAddress'}>{item.userAddress}</div>
                {userDetailsOnly? '' : <div  className={'userOrderID'}>{item.userOrderID}</div> }  
                <div style={userOrderStyle} className={'userOrder'}>{item.userOrder}</div>
            </UserDetailsWrapper>
        </CardDetailsWrapper>
    }
    {
        userDetailsOnly ? '' :

        <CardButtonsWrapper>
            <div className={'left'}>
                {type === 'newOrders' ?
                    <>
                        {item.type === 'accept' ? <Button
                            type={'submit'}
                            size={btnSize}
                            text={'Accept'}
                        />
                        : item.type === 'assign' ?
                            <Button
                                type={'submit'}
                                text={'Assign Driver Delivery'}
                                size={btnSize}
                                icon={<MdKeyboardArrowRight />}
                            /> : ''}
                    </>

                    : type === 'onDelivery' || type === 'delivered' || type === 'canceled' ?
                        (
                            data.map((data, idx) => {
                                return (
                    <TrackDeliveryContainer key={data.delivererName + idx}>
                        {type === 'onDelivery' ?
                            <>
                                <DelivererContainer>
                                    <DelivererImageContainer>
                                        <DelivererImage
                                            src={data.delivererImage.src}
                                            alt={'deliverer Image'} />
                                    </DelivererImageContainer>

                                    <DelivererDetailsContainer>
                                        <div className={'delivererName'}>{capitalizeWords(data.delivererName)}</div>
                                        <div className={'delivererEmail'}>{data.delivererEmail}</div>
                                    </DelivererDetailsContainer>
                                </DelivererContainer><TrackDeliveryText style={{ height: '30%' }}>
                                    Track Delivery
                                </TrackDeliveryText>
                            </>

                            :
                            type === 'canceled' || type === 'delivered' ?

                                (<DelivererContainer
                                    style={{
                                        height: '100%'
                                    }}
                                >
                                    <DelivererImageContainer >
                                        <DelivererImage
                                            src={data.delivererImage.src}
                                            alt={'deliverer Image'}
                                        />
                                    </DelivererImageContainer>

                                    <DelivererDetailsContainer>
                                        <div className={'delivererName'}>{capitalizeWords(data.delivererName)}</div>
                                        <div className={'delivererEmail'}>{data.delivererEmail}</div>
                                        <TrackDeliveryText
                                            style={{
                                                //  height: '10%',
                                                color: '#7F7F7F',
                                                fontWeight: '500',
                                                fontSize: '10px',
                                                display: 'block'
                                            }}>
                                            Track Delivery
                                        </TrackDeliveryText>
                                    </DelivererDetailsContainer>
                                </DelivererContainer>)

                                : 'no data'
                        }

                    </TrackDeliveryContainer>
                )
            }))

                        : 'no data'
                }

            </div>
            <div className={'right'}>
                {type === 'newOrders' || type === 'onDelivery' ?
                    <Button
                        type={'submit'}
                        size={btnSize}
                        text={'Cancel'}
                    />
                    : type === 'delivered' ?
                        <DeliveredText>Delivered</DeliveredText>
                        : type === 'canceled' ?
                            <CanceledText>Canceled</CanceledText>
                            : null
                }
            </div>
        </CardButtonsWrapper>
}
    </OrderRequestCardWrapper>
)
})
}
</React.Fragment>

)
}

export default index
