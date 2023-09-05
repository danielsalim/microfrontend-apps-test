import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Modal.css'; // Import your custom CSS for styling

const EditModal = ({ isOpen, onClose, onUpdate, user }) => {

    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name);
    const [userName, setUserName] = useState(user.username);
    const [age, setAge] = useState(user.age);
    const [salary, setSalary] = useState(user.salary);

    useEffect(() => {
      setFirstName(user.first_name);
      setLastName(user.last_name);
      setUserName(user.username);
      setAge(user.age);
      setSalary(user.salary);
    }, [user]);

  const handleSubmit = () => {
    
    if (!firstName || !lastName || !userName || age === null || salary === null) {
      console.log("Please fill in all required fields.");
      return;
    }

    const updatedUser = {
      ...user,
      first_name: firstName,
      last_name: lastName,
      username: userName,
      age: age,
      salary: salary,
    };

    console.log(updatedUser);
    onUpdate(updatedUser);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="container-modal"
      overlayClassName="modal-overlay"
      contentLabel="Edit Student Modal"
    >
      <div className="modal-card">
        <h2 className="modal-title">Edit Student</h2>
        <div className="modal-form">
          <input
            type="text"
            placeholder="First Name"
            className="input-field"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="input-field"
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
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            placeholder="Salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className="modal-buttons">
          <button className="modal-confirm-btn" onClick={handleSubmit}>
            Update User
          </button>
          <button className="modal-cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditModal;
