import React from 'react';
import Modal from 'react-modal';
import './Modal.css'; // Import your custom CSS for styling

const AddModal = ({ isOpen, onClose, onAdd }) => {
  // State to hold the input values
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [userName, setUserName] = React.useState('');
  const [age, setAge] = React.useState('');
  const [salary, setSalary] = React.useState('');

  // Function to handle form submission
  const handleSubmit = () => {
    if (!firstName || !lastName || !userName || age === null || salary === null) {
      console.log("Please fill in all required fields.");
      return;
    }
    // Create a new student object with input values
    const newStudent = {
      first_name: firstName,
      last_name: lastName,
      username: userName,
      age: age,
      salary: salary,
    };

    // Call the onAdd callback with the new student object
    onAdd(newStudent);

    // Clear input fields
    setFirstName('');
    setLastName('');
    setUserName('');
    setAge('');
    setSalary('');

    // Close the modal
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="container-modal"
      overlayClassName="modal-overlay"
      appElement={document.getElementById('root')} 
      contentLabel="Add Student Modal"
    >
      <div className="modal-card">
        <h2 className="modal-title">Add New Student</h2>
        <div className="modal-form">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            placeholder="Major"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className="modal-buttons">
          <button className="modal-add-btn" onClick={handleSubmit}>
            Add User
          </button>
          <button className="modal-cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddModal;
