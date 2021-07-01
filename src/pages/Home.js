import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import auth from '../services/auth'

const Home = () => {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  
  const handleLogout = () => {
    return auth.logout(() => history.push('/'));
  }

  const patients = user.patients || [];

  return (
    <>
      <h1>Home page</h1>
      {patients.map(patient => {
        return <div>{patient.name}</div>;
      })}
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Home;