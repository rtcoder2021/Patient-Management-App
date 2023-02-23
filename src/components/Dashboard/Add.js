import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ patients, setPatients, setIsAdding }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [admitDate, setAdmitDate] = useState('');

  const handleAdd = e => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !diagnosis || !admitDate) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const id = patients.length + 1;
    const newPatient = {
      id,
      firstName,
      lastName,
      email,
      diagnosis,
      admitDate,
    };

    patients.push(newPatient);
    localStorage.setItem('patients_data', JSON.stringify(patients));
    setPatients(patients);
    setIsAdding(false);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: `${firstName} ${lastName}'s data has been added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Patient</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="diagnosis">Diagnosis</label>
        <input
          id="diagnosis"
          type="text"
          name="diagnosis"
          value={diagnosis}
          onChange={e => setDiagnosis(e.target.value)}
        />
        <label htmlFor="admitDate">Admit Date</label>
        <input
          id="admitDate"
          type="date"
          name="admitDate"
          value={admitDate}
          onChange={e => setAdmitDate(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
