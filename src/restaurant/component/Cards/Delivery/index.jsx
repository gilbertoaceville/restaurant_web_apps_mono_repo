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
    DeliveryCardWrapper,
    CardDetailsWrapper,
    UserImageWrapper,
    UserDetailsWrapper,
    CardTextButtonWrapper


} from './deliveryCard.styles'
import { capitalizeWords } from '../../../../lib/factory.lib';
import { MdKeyboardArrowRight, MdOutlineCall } from 'react-icons/md';


const index = ({ userdata, userDetailsOnly, userDetailsStyle }) => {

    return (
        <React.Fragment>
            {
                userdata.map((item, index) => {
                    return (
                        <DeliveryCardWrapper key={"idx" + index}>
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
                                            <div className={'userName'}>{capitalizeWords(item.userName)}</div>
                                            <div className={'userMail'}>{item.userMail}</div>
                                            <div className={'userDistance'}>{item.userDistance}</div>
                                        </UserDetailsWrapper>
                                    </CardDetailsWrapper>
                                    : ''
                            }
                            {
                                userDetailsOnly ? '' :
                                    <CardTextButtonWrapper>
                                        <div className={'text'}>

                                            <p
                                                onClick={() => { }}
                                            >
                                                {'Select this driver'}
                                                <div >
                                                    <MdKeyboardArrowRight />
                                                </div>
                                            </p>
                                        </div>
                                        <div
                                            onClick={() => { }}
                                            className={'button'}>
                                            <div className={'call'}>
                                                <MdOutlineCall />
                                            </div>
                                            <div className={'whiteSpace'} />
                                        </div>
                                    </CardTextButtonWrapper>
                            }
                        </DeliveryCardWrapper>
                    )
                })
            }
        </React.Fragment>

    )
}

export default index
