import OrderCheckoutPage from 'modules/order/components/OrderCheckoutPage/OrderCheckoutPage';
import { MainPage } from './pages';
import { SharedLayout } from 'shared/components';

function App() {
  return (
    <>
      {/* <SharedLayout>
        <MainPage />
      </SharedLayout> */}
      <OrderCheckoutPage />
    </>
  );
}

export default App;
