import { DeliveryWrapper } from './delivery.styles'
import MiniHeader from '../../../component/MiniHeader'
import DeliveryCard from '../../../component/Cards/Delivery'
import UserImage from '../../../../lib/assets/kk.jpg'



const Delivery = () => {
  return (
    <DeliveryWrapper>
      <MiniHeader
        onClick={() => { }}
        searchBar
      />
      <div className={'cardHolder'}>
        <DeliveryCard
          userdata={userdata}
        />
      </div>
    </DeliveryWrapper>
  );
}

export default Delivery;
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

