import { useState } from 'react';

const Table = ({ patients, handleEdit, handleDelete }) => {
  const [searchTerm, setSearchTerm] = useState('');

  patients.forEach((patient, i) => {
    patient.id = i + 1;
  });


  const filteredPatients = patients.filter((patient) =>
    `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="contain-table">
      <div className="search-container">
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" value={searchTerm} onChange={handleSearch} />
      </div>
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Diagnosis</th>
            <th>Date</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient, i) => (
              <tr key={patient.id}>
                <td>{i + 1}</td>
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{patient.email}</td>
                <td>{(patient.diagnosis)}</td>
                <td>{patient.date} </td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(patient.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(patient.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Patients</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
