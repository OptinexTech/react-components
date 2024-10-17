import './App.css';
import { useState } from 'react';
import Modal from './components/Modal';
import Button from './components/Button';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const deleteUser = () => {
    console.log('User deleted');
    closeModal();
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <Button label={'Delete User'} variant={'primary'} onClick={openModal} />
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        title={'Delete User Confirmation'}
        width="400px"
        height="200px"
      >
        <p>
          Are you sure you want to delete this user? <br />
          This action cannot be undone.
        </p>
        <div>
          <Button 
            label="Confirm"
            variant={'secondary'}
            onClick={deleteUser}
            customStyles={{ marginRight: '12px' }}
          />
          <Button 
            label="Cancel"
            variant={'primary'}
            onClick={closeModal}
          />
        </div>
      </Modal>
    </div>
  );
};

export default App;
