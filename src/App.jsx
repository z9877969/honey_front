import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useModal } from 'hooks/useModal';
import { selectIsOpen } from '@redux/cart/cartSlice';
import { MainPage } from './pages';
import { SharedLayout } from 'shared/components';
import { Cart } from 'modules/cart';

function App() {
  const isOpen = useSelector(selectIsOpen);
  const setModal = useModal();

  const closeModal = useCallback(() => {
    setModal();
  }, [setModal]);

  const openModal = useCallback(() => {
    setModal(<Cart onClose={closeModal} />);
  }, [setModal, closeModal]);

  useEffect(() => {
    if (isOpen) {
      openModal();
    }
  }, [isOpen, openModal]);

  return (
    <>
      <SharedLayout>
        <MainPage />
      </SharedLayout>
    </>
  );
}

export default App;
