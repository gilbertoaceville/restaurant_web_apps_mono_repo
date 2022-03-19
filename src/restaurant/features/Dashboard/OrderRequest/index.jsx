import MiniHeaderOutline from '../../../component/MiniHeader/MiniHeaderOutline';
import { OrderRequestWrapper, Children } from './orderrequest.styles'
import Dashboard from '../../Dashboard';


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

const OrderRequest = ({ children }) => {
  return (
    <Dashboard>
      <OrderRequestWrapper>
        <div>
          <MiniHeaderOutline orderRequest={NavList} />
        </div>
        <Children >
          {children}
        </Children>
      </OrderRequestWrapper>
    </Dashboard>
  );
}

export default OrderRequest;

