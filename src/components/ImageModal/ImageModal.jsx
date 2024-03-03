import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement(document.getElementById('root'));

export default function ImageModal({ isOpen = false, photo, onChange }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onChange(false)}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      preventScroll={true}
      className={css.modal}
      overlayClassName={`${css.overlay} ${isOpen ? css.overlayIsOpen : ''}`}>
      <img src={photo.src} className={css.img} />
      <p className={css.text}>{photo.description}</p>
    </Modal>
  );
}
