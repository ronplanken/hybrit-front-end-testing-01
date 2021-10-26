import React from 'react';
import { render } from '@testing-library/react';
import { NameGenerator } from '../02 NameGenerator';

test('if clicking the button will show a random name', () => {
  render(<NameGenerator />);
  
})
