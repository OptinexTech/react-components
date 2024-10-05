import './App.css';
import { useState, useEffect, useCallback } from 'react';
import Placeholder from './components/Placeholder';
import Button from './components/Button';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);

  const fetchProfileData = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setProfileData({
        name: 'John Doe',
        jobTitle: 'Software Engineer',
        profilePic: 'https://via.placeholder.com/150'
      });
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    fetchProfileData();
  }, [fetchProfileData]);

  return (
    <div className="App">
      <h2>Professional Profile Card with Placeholder</h2>
      <div className="profile-card">
        {isLoading ? (
          <>
            <Placeholder type="image" width='150px' height='150px' borderRadius='50%' />
            <Placeholder type='text' width='60%' height='20px' />
            <Placeholder type='text' width='40%' height='20px' />
          </>
        ) : (
          <>
            <img src={profileData.profilePic} alt="profile" className='profile-pic' />
            <h3>{profileData.name}</h3>
            <p>{profileData.jobTitle}</p>
          </>
        )}
      </div>
      <Button label={'Reload'} variant={'primary'} onClick={fetchProfileData} />
    </div>
  );
};

export default App;
