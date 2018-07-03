import App from './container/App';
import Delivery from './components/Delivery';
import DeliveryManagement from './components/DeliveryManagement';

const routes = [
  {
    path: '/',
    exact: true,
    component: App
  },
  {
    path: '/delivery',
    component: Delivery
  },
  {
    path: '/delivery-management',
    component: DeliveryManagement
  }
];

export default routes;
