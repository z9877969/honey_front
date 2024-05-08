import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useModal } from 'hooks/useModal';
import { selectIsOpen } from '@redux/cart/cartSlice';
import { MainPage } from './pages';
import { SharedLayout } from 'shared/components';
import { Cart } from 'modules/cart';

function App() {
  const isOpen = useSelector(selectIsOpen);
  const setModal = useModal();

  useEffect(() => {
    if (isOpen) {
      setModal(<Cart onClose={() => setModal()} />);
    }
  }, [isOpen, setModal]);

  return (
    <>
      <SharedLayout>
        <MainPage />
      </SharedLayout>
    </>
  );
}

export default App;
