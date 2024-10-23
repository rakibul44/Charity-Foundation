import React from 'react';
import './DonorList.css';

const DonorList = () => {
  const donors = [
    {
      serialNo: 1,
      date: '2024-10-15',
      name: 'John Doe',
      address: '123 Elm St, Springfield',
      donationSector: 'Education',
      amount: '$500'
    },
    {
      serialNo: 2,
      date: '2024-10-16',
      name: 'Jane Smith',
      address: '456 Oak St, Shelbyville',
      donationSector: 'Healthcare',
      amount: '$750'
    },
    {
      serialNo: 3,
      date: '2024-10-17',
      name: 'Ahmed Ali',
      address: '789 Pine St, Capital City',
      donationSector: 'Relief Fund',
      amount: '$1000'
    }
    // Add more donors as needed
  ];

  return (
    <div className="donor-list-container">
      <h2 className="donor-list-title">Donor List</h2>
      <div className="title-underline">
       <span></span>
      </div>
      <table className="donor-table">
        <thead>
          <tr>
            <th>Serial No</th>
            <th>Date</th>
            <th>Name</th>
            <th>Address</th>
            <th>Donation Sector</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr key={donor.serialNo}>
              <td>{donor.serialNo}</td>
              <td>{donor.date}</td>
              <td>{donor.name}</td>
              <td>{donor.address}</td>
              <td>{donor.donationSector}</td>
              <td>{donor.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='DonorButton'>View More</button>
    </div>
  );
};

export default DonorList;
