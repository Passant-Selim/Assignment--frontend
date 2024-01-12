/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Table.css'

const Table = () => {
  const [input, setInput] = useState([]);
  const [existingValues, setExistingValues] = useState([10, 100, 1000]); 

  const handleInputChange = (index, value) => {
    const updateInput = [...input];
    updateInput[index] = parseFloat(value) || 0; 
    setInput(updateInput);
  };

  const calculatePercentage = (input, existingValue) => {
    return (input / existingValue) * 100 || 0; 
  };

  return (
    <div>
      <table className='table'>
        <thead className='thead'>
          <tr>
            <th className='th'>Input</th>
            <th className='th'>Value</th>
            <th className='th'>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {existingValues.map((existingValue, index) => (
            <tr key={index}>
              <td className='td'>
                <input
                className='input'
                  type="number"
                  value={input[index] || ''}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              </td>
              <td className='td'>{existingValue}</td>
              <td className='td'>{calculatePercentage(input[index], existingValue)}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
