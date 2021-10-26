import React, { useState } from 'react';

export const NameGenerator = () => {
  const [name, setName] = useState('');

  const clickHandler = async () => {
    const request = await fetch(`https://swapi.dev/api/people/${Math.floor(Math.random() * 9  + 1)}`);
    const response = await request.json();
    setName(response.name);
  };

  return (
    <div>
      <div>
        <button onClick={clickHandler}>Get a Name!</button>
      </div>
      <div>{name}</div>
    </div>
  );
};
