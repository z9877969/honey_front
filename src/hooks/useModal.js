import { useContext } from 'react';
import { ModalConext } from 'context';

export const useModal = () => useContext(ModalConext);
