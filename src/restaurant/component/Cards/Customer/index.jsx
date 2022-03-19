/**
 * This is Order Request Card
 * It contains all the tabs under Order Request
 * Use the 'type' prop to specify which card you need. 
 * e.g type='delivered' will give me the delivered card details in fullS
 * 
 * for newOrder, specify type in the userdata to decide whether assign or accept
 * 
 * when using this card on dashboard, you will specify userDetailsOnly props for it to hide other details and user detail alone
 * Use the userdetailsStyle prop to control the style from dashboard

*/



import React from 'react'
import {
    CustomersCardWrapper,
    CardDetailsWrapper,
    UserImageWrapper,
    UserDetailsWrapper,
    CardTextButtonWrapper
} from './customersCard.styles'
import { capitalizeWords } from '../../../../lib/factory.lib';
import { MdOutlineCall } from 'react-icons/md';


const index = ({ userdata, userDetailsOnly, userDetailsStyle }) => {

    return (
        <React.Fragment>
            {
                userdata.map((item, index) => {
                    return (
                        <CustomersCardWrapper key={"idx" + index}>
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
                                                {'Message'}
                                                <div >
                                                    {/* <MdKeyboardArrowRight /> */}
                                                </div>
                                            </p>
                                        </div>
                                        <div
                                            onClick={() => { }}
                                            className={'button'}>
                                            <div className={'callTime'}>
                                                <div className={'time'}>{'2days ago'}</div>

                                                <div
                                                    onClick={() => { }}
                                                    className={'call'}>
                                                    <MdOutlineCall />
                                                </div>
                                            </div>
                                            <div className={'whiteSpace'} />
                                        </div>
                                    </CardTextButtonWrapper>
                            }
                        </CustomersCardWrapper>
                    )
                })
            }
        </React.Fragment>

    )
}

export default index
