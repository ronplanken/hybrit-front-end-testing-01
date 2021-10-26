import React, { useState } from 'react';

export const NumberList = () => {
  const [number, setNumber] = useState(0);
  const [numbers, setNumbers] = useState<number[]>([]);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setNumber(Number(e.currentTarget.value));
  }

  const addNumber = () => {
    setNumbers((currentNumbers) => [...currentNumbers, Number(number)]);
  };

  return (
    <div>
      <label htmlFor='newNumber'>New Number</label>
      <input type='text' id='newNumber' value={number} onChange={handleChange} />
      <div>
        <button onClick={addNumber}>Add</button>
      </div>
      <div>Current numbers: {numbers.join()}</div>
    </div>
  );
};
