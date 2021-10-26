import React from 'react';
import { render } from '@testing-library/react';
import { NameGeneratorWithHook } from '../04 NameGeneratorWithHook';

test('if clicking the button will show a random name', () => {
  render(<NameGeneratorWithHook />);
  
})
