import { ModalContext } from '@providers/Modal';
import { ReactElement, useContext } from 'react';

function useModalContext() {
  const value = useContext(ModalContext);

  if (!value) {
    throw new Error('Modal must wrapped inside ModalProvider!');
  }

  return value;
}

function useModal(Content: ReactElement) {
  const { remove, push } = useModalContext();

  //update
  const handleShow = () => push(Content);

  const handleDismiss = () => remove(Content);

  return [handleShow, handleDismiss];
}

export default useModal;
