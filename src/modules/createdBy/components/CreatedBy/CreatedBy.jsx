import { useModal } from 'hooks/useModal';

const CreatedBy = () => {
  const setModal = useModal();
  const closeModal = () => {
    setModal();
  };
  return (
    <div>
      <p>Hello</p>
      <button type="button" onClick={closeModal}>
        Close Modal
      </button>
    </div>
  );
};

export default CreatedBy;
