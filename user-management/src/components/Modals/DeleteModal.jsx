import React from 'react';
import Modal from 'react-modal';
import './Modal.css'; // Import the custom CSS file for styling

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="container-modal"
      overlayClassName="modal-overlay"
      appElement={document.getElementById('root')}
      contentLabel="Delete Confirmation"
    >
      <div className="modal-card">
        <h2 className="modal-title">Confirm Deletion</h2>
        <p className="modal-message">
          Are you sure you want to delete this item?
        </p>
        <div className="modal-buttons">
          <button className="modal-delete-btn" onClick={onDelete}>
            Delete
          </button>
          <button className="modal-cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
