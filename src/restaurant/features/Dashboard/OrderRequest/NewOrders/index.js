import React from 'react'
import OrderRequestCard from '../../../../component/Cards/OrderRequest'
import UserImage from '../../../../../lib/assets/kk.jpg'


const index = () => {
  return (
    <div>
      <OrderRequestCard
        userdata={userdata}
        data={onDelivery}
        btnSize='sm'
        type='newOrders'

      />
    </div>
  )
}

export default index
const userdata = [
  {
    userImage: UserImage,
    userName: 'kayode kaleyemi',
    userAddress: '45, Aba owerri road.',
    userOrderID: 'Order ID: #242343fs',
    userOrder: 'Pizza babeieque',
    type: 'accept'
  },
  {
    userImage: UserImage,
    userName: 'John Orimaye',
    userAddress: '2a, School road, Umuahia.',
    userOrderID: 'Order ID: #242343fs',
    userOrder: 'Pizza babeieque',
    type: 'assign'

  },
  {
    userImage: UserImage,
    userName: 'John Deo',
    userAddress: '2a, School road, Umuahia.',
    userOrderID: 'Order ID: #242343fs',
    userOrder: 'Pizza babeieque',
    type: 'accept'

  },
  {
    userImage: UserImage,
    userName: 'John Deo',
    userAddress: '2a, School road, Umuahia.',
    userOrderID: 'Order ID: #242343fs',
    userOrder: 'Pizza babeieque',
    type: 'accept'

  },
  {
    userImage: UserImage,
    userName: 'John Deo',
    userAddress: '2a, School road, Umuahia.',
    userOrderID: 'Order ID: #242343fs',
    userOrder: 'Pizza babeieque',
    type: 'accept'

  }
]

const onDelivery = [
  {
    delivererImage: UserImage,
    delivererName: 'kayode kaleyemi',
    delivererEmail: 'caresskakka@gmail.com',
  },
]

