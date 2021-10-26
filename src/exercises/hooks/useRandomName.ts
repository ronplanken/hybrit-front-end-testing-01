import React from 'react';
import { RandomNameService } from '../services/RandomNameService';

function useRandomName() {
  const [name, setName] = React.useState('');

  const getName = async () => {
    setName(await RandomNameService.getName());
  };

  const generate = () => getName();

  return { name, generate };
}

export { useRandomName };
