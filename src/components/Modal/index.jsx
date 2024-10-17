import './modal.css';

const Modal = ({
  isOpen,
  closeModal,
  title,
  children,
  width,
  height
}) => {
  if(!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div 
        className="modal-content"
        style={{ width: width || '500px', height: height || '300px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={closeModal}>&times;</button>
        <div className="modal-header">
          <h2>{title}</h2>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
};

export default Modal;