import React from 'react';
import Table from 'react-bootstrap/Table';

const Myprofile = () => {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Active Campaigns</th>
          <th>Pending Campaigns</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
          <Table striped bordered>
      <thead>
        <tr>
          <th>Campaign Name</th>
          <th>Funds</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Affordable and Clean Energy</td>
          <td>20,000</td>
        </tr>
        <tr>
          <td>Clean Water and Sanitation</td>
          <td>40,000</td>
        </tr>
        <tr>
          <td>Good Health and Well-being</td>
          <td>4,000</td>
        </tr>
        <tr>
          <td>Life below water</td>
          <td>30,000</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </Table>
          </td>
          <td>
          <Table striped bordered>
      <thead>
        <tr>
          <th>Campaign Name</th>
          <th>Pending Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Pending</td>
        </tr>
        <tr>
          <td>Data 3</td>
          <td>Data 4</td>
        </tr>
        <tr>
          <td>Data 5</td>
          <td>Data 6</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </Table>
          </td>

        </tr>
        
        {/* Add more rows as needed */}
      </tbody>
    </Table>
  );
};

export default Myprofile;