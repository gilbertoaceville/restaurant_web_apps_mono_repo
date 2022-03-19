import Dashboard from '../../Dashboard';
import { RestaurantWrapper } from './restaurant.styles'

const NavList = [
  {
    tab: 'New Orders',
    href: '/restaurant/dashboard/OrderRequest/NewOrders',
    active: 'active'
  },
  {
    tab: 'On Delivery',
    href: '/restaurant/dashboard/OrderRequest/OnDelivery',
    active: 'active'

  },
  {
    tab: 'Delivered',
    href: '/restaurant/dashboard/OrderRequest/Delivered',
    active: 'active'

  },
  {
    tab: 'Canceled',
    href: '/restaurant/dashboard/OrderRequest/Canceled',
    active: 'active'

  },

]

const Index = () => {
  return (
    <Dashboard>
      <RestaurantWrapper>
        Restaurant
      </RestaurantWrapper>
    </Dashboard>
  );
}

export default Index;

