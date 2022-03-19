import { useState } from 'react';
import Dashboard from '../../Dashboard';
import { CustomersWrapper } from './customers.styles'
import CustomersCard from '../../../component/Cards/MultipurposeCard'
import UserImage from '../../../../lib/assets/kk.jpg'



const Customers = () => {
  return (
    <Dashboard>
      <CustomersWrapper>
        <div className={'headLabel'}>
          <div className={'NAG'}>Name / Address / Gender</div>
          <div className={'EP'}>Email / Phone</div>
          <div className={'blank'}></div>
        </div>
        <div className={'cardHolder'}>
          <CustomersCard
            userData={userData}
            isCustomers
            onClickMessage={() => console.log('clicked message button')}
            onClickCall={() => console.log('clicked call button')}
            onClickCancel={() => console.log('clicked cancel button')}
          />
        </div>
      </CustomersWrapper>
    </Dashboard>
  );
}

export default Customers;
const userData = [
  {
    userImage: UserImage,
    userName: 'kayode kaleyemi',
    userAddress: '44b Aba Owerri Road',
    userGender: 'MalE',
    userEmail: 'usermail@example.com',
    userPhone: '08000000000',
    orderTime: 'ordered just now',
    userKmAway: '2'
  },
  {
    userImage: UserImage,
    userName: 'kayode kaleyemi',
    userAddress: '44b Aba Owerri Road',
    userGender: 'MalE',
    userEmail: 'usermail@example.com',
    userPhone: '08000000000',
    orderTime: 'ordered just now',
    userKmAway: '2'
  },
  {
    userImage: UserImage,
    userName: 'kayode kaleyemi',
    userAddress: '44b Aba Owerri Road',
    userGender: 'MalE',
    userEmail: 'usermail@example.com',
    userPhone: '08000000000',
    orderTime: 'ordered just now',
    userKmAway: '2'
  },
  {
    userImage: UserImage,
    userName: 'kayode kaleyemi',
    userAddress: '44b Aba Owerri Road',
    userGender: 'MalE',
    userEmail: 'usermail@example.com',
    userPhone: '08000000000',
    orderTime: 'ordered just now',
    userKmAway: '2'
  },
  {
    userImage: UserImage,
    userName: 'kayode kaleyemi',
    userAddress: '44b Aba Owerri Road',
    userGender: 'MalE',
    userEmail: 'usermail@example.com',
    userPhone: '08000000000',
    orderTime: 'ordered just now',
    userKmAway: '2'
  },
  {
    userImage: UserImage,
    userName: 'kayode kaleyemi',
    userAddress: '44b Aba Owerri Road',
    userGender: 'MalE',
    userEmail: 'usermail@example.com',
    userPhone: '08000000000',
    orderTime: 'ordered just now',
    userKmAway: '2'
  },
  {
    userImage: UserImage,
    userName: 'kayode kaleyemi',
    userAddress: '44b Aba Owerri Road',
    userGender: 'MalE',
    userEmail: 'usermail@example.com',
    userPhone: '08000000000',
    orderTime: 'ordered just now',
    userKmAway: '2'
  },
  {
    userImage: UserImage,
    userName: 'kayode kaleyemi',
    userAddress: '44b Aba Owerri Road',
    userGender: 'MalE',
    userEmail: 'usermail@example.com',
    userPhone: '08000000000',
    orderTime: 'ordered just now',
    userKmAway: '2'
  },
]
