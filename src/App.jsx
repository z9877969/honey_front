import { MainPage } from './pages';
import { SharedLayout } from 'shared/components';
import { OrderCheckoutPage } from 'modules/order';

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
