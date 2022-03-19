import { useState } from 'react';
import CustomerCard from '../../../component/Cards/Customer'

import { CustomersWrapper } from './customers.styles'
import MiniHeader from '../../../component/MiniHeader'
import CustomersCard from '../../../component/Cards/Customer'
import UserImage from '../../../../lib/assets/kk.jpg'



const Customers = () => {
  return (
    <CustomersWrapper>
      <MiniHeader
        onClick={() => { }}
        searchText
      />
      <div className={'cardHolder'}>
        <CustomersCard
          userdata={userdata}
        />
      </div>
    </CustomersWrapper>
  );
}

export default Customers;
const userdata = [
  {
    userImage: UserImage,
    userName: 'kayode kaleyemi',
    userMail: 'example@gmail.com',
    userDistance: '3km away',

  },
  {
    userImage: UserImage,
    userName: 'kayode kaleyemi',
    userMail: 'example@gmail.com',
    userDistance: '3km away',
  },
  {
    userImage: UserImage,
    userName: 'kayode kaleyemi',
    userMail: 'example@gmail.com',
    userDistance: '3km away',
  },
  {
    userImage: UserImage,
    userName: 'kayode kaleyemi',
    userMail: 'example@gmail.com',
    userDistance: '3km away',
  },
  {
    userImage: UserImage,
    userName: 'kayode kaleyemi',
    userMail: 'example@gmail.com',
    userDistance: '3km away',
  },
  {
    userImage: UserImage,
    userName: 'kayode kaleyemi',
    userMail: 'example@gmail.com',
    userDistance: '3km away',
  },
  {
    userImage: UserImage,
    userName: 'kayode kaleyemi',
    userMail: 'example@gmail.com',
    userDistance: '3km away',
  }
]
