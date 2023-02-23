import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ patients, selectedPatient, setPatients, setIsEditing }) => {
  const id = selectedPatient.id;

  const [firstName, setFirstName] = useState(selectedPatient.firstName);
  const [lastName, setLastName] = useState(selectedPatient.lastName);
  const [email, setEmail] = useState(selectedPatient.email);
  const [diagnosis, setDiagnosis] = useState(selectedPatient.diagnosis);
  const [date, setDate] = useState(selectedPatient.date);

  const handleUpdate = e => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !diagnosis || !date) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const patient = {
      id,
      firstName,
      lastName,
      email,
      diagnosis,
      date,
    };

    for (let i = 0; i < patients.length; i++) {
      if (patients[i].id === id) {
        patients.splice(i, 1, patient);
        break;
      }
    }

    localStorage.setItem('patients_data', JSON.stringify(patients));
    setPatients(patients);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${patient.firstName} ${patient.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Patient</h1>
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
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};


export default Edit;
