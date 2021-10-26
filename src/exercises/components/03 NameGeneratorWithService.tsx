import React, { useState } from 'react';
import { RandomNameService } from '../services/06 RandomNameService';

export const NameGeneratorWithService = () => {
  const [name, setName] = useState('');

  const clickHandler = async () => {
    setName(await RandomNameService.getName());
  };

  return (
    <div>
      <div>
        <button onClick={clickHandler}>Get a Name through a Service!</button>
      </div>
      <div>{name}</div>
    </div>
  );
};
