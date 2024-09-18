import React from 'react';

const CompanyTable = () => {
  return (
    <div>
      {/* Header */}
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Company Information</h1>

      {/* Table */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <table border="1" style={{ width: '30%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amazon</td>
              <td>Marina</td>
              <td>Bangalore</td>
            </tr>
            <tr>
              <td>Google</td>
              <td>Chang</td>
              <td>Mexico</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Paragraph */}
      <p style={{ marginTop: '10px', width: '50%', textAlign: 'center', margin: '10px auto' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default CompanyTable;
