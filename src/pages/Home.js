import React from 'react';
import { useHistory } from 'react-router-dom';

import auth from '../services/auth'

const Home = () => {
  const history = useHistory();
  
  const handleLogout = () => {
    return auth.logout(() => history.push('/'));
  }

  return (
    <>
      <h1>Home page</h1>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Home;