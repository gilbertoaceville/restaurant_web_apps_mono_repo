import React from 'react'
import { CustomToggle } from '../../component/Toggler';
import RatingStars from '../../component/RatingStars';
import Settings from '../../component/Settings';
import Notifications from '../../component/Notifications';
import {
  IoIosNotificationsOutline,
  IoIosInformationCircleOutline as Info
} from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import Customers from '../Dashboard/Customers'
import Deliveries from '../Dashboard/Deliveries'
import CustomersCard from '../../component/Cards/MultipurposeCard'
import DeliveriesCard from '../../component/Cards/MultipurposeCard'
import UserImage from '../../../lib/assets/kk.jpg'





function test() {
  return (
    <div>
  <Deliveries />

      <CustomToggle
        iconSize={'3rem'}
        style={{ fontSize: '2rem' }}
      />
      <RatingStars
        iconSize={'2rem'}
        onChange={(value) => console.log(value)}
      />
      <Settings
        SettingsListItem={SettingsListItem}
      />
      <Notifications 
      notificationMessages={5}
      onClick={() => console.log('clicked')} />

      <DeliveriesCard
        userdata={userdata}
        isDeliveries
        onClickMessage={() => console.log('clicked message button')}
        onClickCall={() => console.log('clicked call button')}
        onClickCancel={() => console.log('clicked cancel button')}
      />

      <CustomersCard
        userdata={userdata}
        isCustomers
        onClickMessage={() => console.log('clicked message button')}
        onClickCall={() => console.log('clicked call button')}
        onClickCancel={() => console.log('clicked cancel button')}
      />
    </div>
  )
}

export default test
const SettingsListItem = [
  {
    icon: <IoIosNotificationsOutline />,
    text: 'Notification',
  },
  {
    icon: <MdOutlineLocationOn />,
    text: 'Location Permission',
  },
  {
    icon: <Info />,
    text: 'Legal & About'
  }
]
const userdata = [
  {
    userImage: UserImage,
    userName: 'kayode kaleyemi',
    userAddress: '44b Aba Owerri Road',
    userGender: 'Male',
    userEmail: 'usermail@example.com',
    userPhone: '08000000000',
    orderTime: 'ordered just now',
    userKmAway: '2'
  },
]