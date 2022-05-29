/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import './calendar-modal.scss';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const CalendarModal = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {};

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={openModal}>
        Open Modal
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
      >
        <h2>Hello</h2>
        <button type="button" onClick={closeModal}>
          close
        </button>
        <div>I am a modal</div>
      </Modal>
    </div>
  );
};

export default CalendarModal;
