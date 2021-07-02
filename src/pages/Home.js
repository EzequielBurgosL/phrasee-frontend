import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import auth from '../services/auth'
import { hydrateUserData } from '../redux/User/actions';
import { isoStringToDatetime, sortArrayOfObjects } from '../utils/helpers';

const processPatientsList = (patients = []) => {
  const filteredPatients = patients.filter(p => p.is_completed === false);

  return sortArrayOfObjects(
    sortArrayOfObjects(filteredPatients, 'last_visit_date'),
    'type'
  );
};

const Home = () => {
  const [deletedGroupTypes, setDeletedGroupTypes] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user);

  useEffect(() => {
    const token = auth.isAuthenticated();

    if (token) dispatch(hydrateUserData(token));
  }, [dispatch]);

  const handleLogout = () => {
    const callback = () => history.push('/');

    return auth.logout(callback);
  };

  // This should be moved into redux and be persisted
  const handleGroupDeletion = (groupType) => { 
    const updatedDeletedGroupTypes = [groupType, ...deletedGroupTypes];

    setDeletedGroupTypes(updatedDeletedGroupTypes);
  };

  const patients = processPatientsList(userData.patients);
  let currentType;

  return (
    <div className='home-page'>
      <h1>Patients</h1>
      {patients.map((patient, index) => {
        const key = `${patient._id + index}`;
        const newType = patient.type !== currentType;
        const show = !deletedGroupTypes.some(type => type === patient.type);

        if (newType) currentType = patient.type;

        return (
          <>
            {newType && show &&
              <>
                <h2>{patient?.type.split('_').join('-')}</h2>
                <span onClick={() => handleGroupDeletion(patient.type)}>(Delete group)</span>
              </>
            }
            {show &&
              <div key={key} className='card'>
                <p>Name: {patient.name}</p>
                <p>Joined: {isoStringToDatetime(patient.joined)}</p>
                <p>Last visit: {isoStringToDatetime(patient.last_visit_date)}</p>
                <p>Completed: {patient.is_completed ? 'Yes' : 'No'}</p>
              </div>
            }
          </>
        );
      })}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;