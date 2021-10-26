import React from 'react';
import { useRandomName } from '../hooks/useRandomName';

export const NameGeneratorWithHook = () => {
  const { name, generate } = useRandomName();

  return (
    <div>
      <div>
        <button onClick={generate}>Get a Name through a Hook!</button>
      </div>
      <div>{name}</div>
    </div>
  );
};
